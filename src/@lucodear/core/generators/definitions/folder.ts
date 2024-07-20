import { lucodearIconsPath } from '.';
import {
  type Config,
  type DefaultIcon,
  type FolderIcon,
  type FolderTheme,
  type Manifest,
  highContrastColorFileEnding,
  lightColorFileEnding,
} from '../../../../core';
import {
  cloneIconExtension,
  openedFolder,
} from '../../../../core/generator/constants';
import {
  getEnabledFolderTheme,
  setDefaultFolderIcons,
  setFolderNames,
} from '../../../../core/generator/folderGenerator';
import { merge } from '../../../../core/helpers/object';
import type { LucodearFolderIcon, LucodearFolderTheme } from '../../models';

export const loadLucodearFolderIconDefinitions = (
  folderIcons: LucodearFolderTheme[],
  config: Config,
  manifest: Manifest
): Manifest => {
  manifest.hidesExplorerArrows = config.hidesExplorerArrows;
  const activeTheme = getEnabledFolderTheme(
    folderIcons as FolderTheme[],
    config.folders?.theme
  );
  if (!activeTheme) {
    return {};
  }
  const enabledIcons = disableIconsByPack(activeTheme, config.activeIconPack);

  if (config.folders?.theme === 'none') {
    return config;
  }

  enabledIcons.forEach((icon) => {
    if (icon.disabled) return;
    const folderNames = extendFolderNames(icon.folderNames);
    manifest = setIconDefinitions(manifest, icon);
    manifest = merge(manifest, setFolderNames(icon.name, folderNames));
    manifest.light = icon.light
      ? merge(
          manifest.light,
          setFolderNames(icon.name, folderNames, lightColorFileEnding)
        )
      : manifest.light;
    manifest.highContrast = icon.highContrast
      ? merge(
          manifest.highContrast,
          setFolderNames(icon.name, folderNames, highContrastColorFileEnding)
        )
      : manifest.highContrast;
  });

  manifest = setDefaultFolderIcons(activeTheme, manifest, config);
  return manifest;
};

const disableIconsByPack = (
  folderIcons: FolderTheme | undefined,
  activatedIconPack: string | undefined
): FolderIcon[] => {
  if (!folderIcons?.icons || folderIcons.icons.length === 0) {
    return [];
  }
  return folderIcons.icons.filter((icon) => {
    return !icon.enabledFor
      ? true
      : icon.enabledFor.some((p) => p === activatedIconPack);
  });
};

export const setIconDefinitions = (
  manifest: Manifest,
  icon: LucodearFolderIcon | DefaultIcon
) => {
  const isClone = (icon as LucodearFolderIcon).clone !== undefined;

  manifest = createIconDefinitions(manifest, icon, '', isClone);
  if (icon.light) {
    manifest = merge(
      manifest,
      createIconDefinitions(
        manifest,

        icon,
        lightColorFileEnding,
        isClone
      )
    );
  }
  if (icon.highContrast) {
    manifest = merge(
      manifest,
      createIconDefinitions(
        manifest,

        icon,
        highContrastColorFileEnding,
        isClone
      )
    );
  }
  return manifest;
};

const createIconDefinitions = (
  manifest: Manifest,
  icon: LucodearFolderIcon | DefaultIcon,
  appendix: string = '',
  isClone = false,
  path: string = lucodearIconsPath
) => {
  const iconName = icon.name;

  const configIconDefinitions = manifest.iconDefinitions;
  const ext = isClone ? cloneIconExtension : '.svg';
  const key = `${iconName}${appendix}`;
  const openedKey = `${iconName}${openedFolder}${appendix}`;

  const theme =
    (icon as LucodearFolderIcon).theme === undefined
      ? ''
      : `${(icon as LucodearFolderIcon).theme}/`;

  if (configIconDefinitions) {
    configIconDefinitions[key] = {
      iconPath: `${path}${theme}${key}${ext}`,
    };
    configIconDefinitions[openedKey] = {
      iconPath: `${path}${theme}${openedKey}${ext}`,
    };
  }
  return manifest;
};

const extendFolderNames = (folderNames?: string[]) => {
  const names: string[] = [];
  const styles: [string, string][] = [
    ['', ''],
    ['.', ''],
    ['_', ''],
    ['__', '__'],
    ['~', ''],
    ['@', ''],
    ['=', ''],
  ];
  folderNames?.forEach((name) => {
    styles.forEach((style) => {
      names.push(`${style[0]}${name}${style[1]}`);
    });
  });
  return names;
};
