import type { Config, FileIcons, FolderTheme, Manifest } from '../../../core';
import { getEnabledFolderTheme } from '../../../core/generator/folderGenerator';
import { merge } from '../../../core/helpers/object';
import { clone } from '../helpers';
import { lucodearFileIcons, lucodearFolderIcons } from '../icons';
import type { LucodearFileIcons, LucodearFolderTheme } from '../models';
import { definitions } from './definitions';

/** Generate lucodear addon icons manifest */
export const lucodearIconGenerator = (
  manifest: Manifest,
  config: Config,
  pkiefIcons: { file: FileIcons; folder: FolderTheme[] }
): Manifest => {
  manifest = merge({}, manifest);
  // const files: FileIcon[] = [];
  // const folders: FolderIcon[] = [];

  // if (env.LUCODEAR_SCRIPT_EXECUTION !== 'true') {
  // this would only work if it's not running as a script, because the regex implementation
  // needs the vscode library to be available, as it needs to access the current workspace
  // const regex = await import('./regex/regexGeneration');
  // const eligible = await regex.getEligibleFiles(options);
  // const regexAssociations = regex.matches(
  //   eligible,
  //   options.lucodear.files?.regexAssociations ?? {},
  //   options.lucodear.folders?.regexAssociations ?? {}
  // );

  // files = [...files, ...getCustomFileIcons(regexAssociations.files)];
  // folders = [...folders, ...getCustomFolderIcons(regexAssociations.folders)];

  // addonRegexConfigs = merge(
  //   {},
  //   manifest,
  //   makeRegexConfig(
  //     files,
  //     folders,
  //     manifest,
  //     regexAssociations.files,
  //     currentFileConfig,
  //     currentFolderConfig
  //   )
  // );
  // }

  // remove folder names, file names and extensions that override icons
  // already defined in the active icon pack
  const [filteredFiles, filteredFolders] = filterOutPacksOverrides(
    lucodearFileIcons,
    lucodearFolderIcons,
    pkiefIcons,
    config
  );

  manifest = definitions.file(filteredFiles, config, manifest);
  manifest = definitions.folder([filteredFolders], config, manifest);
  // manifest = merge({}, manifest, addonFileIcons, addonFolderIcons);

  return manifest;
};

const filterOutPacksOverrides = (
  files: LucodearFileIcons,
  folders: LucodearFolderTheme,
  pkiefIcons: { file: FileIcons; folder: FolderTheme[] },
  options: Config
): [LucodearFileIcons, LucodearFolderTheme] => {
  files = clone(files);
  folders = clone(folders);

  const pack = options.activeIconPack;
  if (!pack) return [files, folders];

  // files
  const [fileExts, fileNames]: [Set<string>, Set<string>] =
    pkiefIcons.file.icons.reduce(
      ([fileExts, fileNames], icon) => {
        if (!icon.enabledFor?.some((p) => p === pack)) {
          return [fileExts, fileNames];
        }

        icon.fileExtensions?.forEach((ext) => fileExts.add(ext));
        icon.fileNames?.forEach((name) => fileNames.add(name));
        return [fileExts, fileNames];
      },
      [new Set<string>(), new Set<string>()]
    );

  files.icons.forEach((icon) => {
    if (icon.enabledFor !== undefined) {
      // if the icon has a pack defined, it should not be filtered out
      return;
    }

    if (icon.fileExtensions) {
      icon.fileExtensions = icon.fileExtensions.filter(
        (ext) => !fileExts.has(ext)
      );
    }

    if (icon.fileNames) {
      icon.fileNames = icon.fileNames.filter((name) => !fileNames.has(name));
    }
  });

  // folders
  const folderNames =
    getEnabledFolderTheme(
      pkiefIcons.folder,
      options.folders?.theme
    )?.icons?.reduce((names, icon) => {
      if (!icon.enabledFor?.some((p) => p === pack)) return names;

      icon.folderNames?.forEach((name) => names.add(name));
      return names;
    }, new Set<string>()) ?? new Set<string>();

  folders.icons.forEach((icon) => {
    if (icon.enabledFor !== undefined) {
      // if the icon has a pack defined, it should not be filtered out
      return;
    }

    if (icon.folderNames) {
      icon.folderNames = icon.folderNames.filter(
        (name) => !folderNames.has(name)
      );
    }
  });

  return [files, folders];
};
