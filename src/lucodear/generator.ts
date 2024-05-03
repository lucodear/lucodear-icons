import { env } from 'process';
import {
  FileIcon,
  FileIcons,
  FolderIcon,
  FolderTheme,
  IconAssociations,
  IconConfiguration,
  parseIconPack,
} from '../models';
import merge from 'lodash.merge';
import clone from 'lodash.clonedeep';
import {
  ExtendedOptions,
  LucodearFileIcons,
  LucodearFolderTheme,
} from './model';
import {
  FileMappingType,
  getEnabledFolderTheme,
  highContrastColorFileEnding,
  lightColorFileEnding,
  mapSpecificFileIcons,
  setFolderNames,
} from '../icons';
import {
  getCustomFileIcons,
  loadLucodearFileIconDefinitions,
  setFileIconDefinition,
} from './dups/fileGenerator';
import { lucodearFileIcons, lucodearFolderIcons } from './icons';
import {
  getCustomFolderIcons,
  loadLucodearFolderIconDefinitions,
  setFolderIconDefinitions,
} from './dups/folderGenerator';

/**
 * Get addons icon definitions as object.
 */
export const loadLucodearAddonIconDefinitions = async (
  config: IconConfiguration,
  options: ExtendedOptions,
  currentFileConfig: IconConfiguration,
  currentFolderConfig: IconConfiguration,
  pkiefIcons: { file: FileIcons; folder: FolderTheme[] }
): Promise<IconConfiguration> => {
  config = merge({}, config);
  let files: FileIcon[] = [];
  let folders: FolderIcon[] = [];
  let addonRegexConfigs: IconConfiguration = {};

  if (env.LUCODEAR_SCRIPT_EXECUTION !== 'true') {
    // this would only work if it's not running as a script, because the regex implementation
    // needs the vscode library to be available, as it needs to access the current workspace
    const regex = await import('./regex/regexGeneration');
    const eligible = await regex.getEligibleFiles(options);
    const regexAssociations = regex.matches(
      eligible,
      options.lucodear.files?.regexAssociations ?? {},
      options.lucodear.folders?.regexAssociations ?? {}
    );

    files = [...files, ...getCustomFileIcons(regexAssociations.files)];
    folders = [...folders, ...getCustomFolderIcons(regexAssociations.folders)];

    addonRegexConfigs = merge(
      {},
      config,
      makeRegexConfig(
        files,
        folders,
        config,
        regexAssociations.files,
        currentFileConfig,
        currentFolderConfig
      )
    );
  }

  // remove folder names, file names and extensions that override icons
  // already defined in the active icon pack
  const [filteredFiles, filteredFolders] = filterOutPacksOverrides(
    lucodearFileIcons,
    lucodearFolderIcons,
    pkiefIcons,
    options
  );

  const addonFileIcons = loadLucodearFileIconDefinitions(
    filteredFiles,
    config,
    options
  );

  const addonFolderIcons = loadLucodearFolderIconDefinitions(
    [filteredFolders],
    config,
    options
  );

  config = merge(
    {},
    config,
    addonRegexConfigs,
    addonFileIcons,
    addonFolderIcons
  );

  return config;
};

const makeRegexConfig = (
  files: FileIcon[],
  folders: FolderIcon[],
  config: IconConfiguration,
  associations: IconAssociations,
  currentFileConfig: IconConfiguration,
  currentFolderConfig: IconConfiguration
) => {
  files.forEach((icon) => {
    if (icon.disabled) return;

    if (icon.fileNames) {
      if (!currentFileConfig.iconDefinitions?.[icon.name]) {
        config = merge({}, config, setFileIconDefinition(config, icon.name));
      }

      config = merge(
        {},
        config,
        mapSpecificFileIcons(icon, FileMappingType.FileNames, associations)
      );
    }
  });

  folders.forEach((icon) => {
    if (icon.disabled) return;

    if (!currentFolderConfig.iconDefinitions?.[icon.name]) {
      config = setFolderIconDefinitions(config, icon);
    }
    config = merge({}, config, setFolderNames(icon.name, icon.folderNames));
    config.light = icon.light
      ? merge(
          {},
          config.light,
          setFolderNames(icon.name, icon.folderNames, lightColorFileEnding)
        )
      : config.light;
    config.highContrast = icon.highContrast
      ? merge(
          {},
          config.highContrast,
          setFolderNames(
            icon.name,
            icon.folderNames,
            highContrastColorFileEnding
          )
        )
      : config.highContrast;
  });

  return config;
};

const filterOutPacksOverrides = (
  files: LucodearFileIcons,
  folders: LucodearFolderTheme,
  pkiefIcons: { file: FileIcons; folder: FolderTheme[] },
  options: ExtendedOptions
): [LucodearFileIcons, LucodearFolderTheme] => {
  files = clone(files);
  folders = clone(folders);

  const pack = parseIconPack(options.activeIconPack);
  if (!pack) return [files, folders];

  // files
  const [fileExts, fileNames]: [Set<string>, Set<string>] =
    pkiefIcons.file.icons.reduce(
      ([fileExts, fileNames], icon) => {
        if (!icon.enabledFor?.includes(pack)) return [fileExts, fileNames];

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
      if (!icon.enabledFor?.includes(pack)) return names;

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
