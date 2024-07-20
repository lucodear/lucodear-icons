import { lucodearIconsPath } from '.';
import {
  type Config,
  type FileIcon,
  type Manifest,
  highContrastColorFileEnding,
  lightColorFileEnding,
} from '../../../../core';
import { cloneIconExtension } from '../../../../core/generator/constants';
import {
  FileMappingType,
  mapSpecificFileIcons,
} from '../../../../core/generator/fileGenerator';
import type { LucodearFileIcon, LucodearFileIcons } from '../../models';

export const loadLucodearFileIconDefinitions = (
  fileIcons: LucodearFileIcons,
  config: Config,
  manifest: Manifest
): Manifest => {
  const enabledIcons = disableIconsByPack(fileIcons, config.activeIconPack);

  enabledIcons.forEach((icon) => {
    if (icon.disabled) return;
    const isClone = icon.clone !== undefined;
    manifest = setIconDefinition(manifest, icon, isClone);

    if (icon.light) {
      manifest = setIconDefinition(
        manifest,
        icon,
        isClone,
        lightColorFileEnding
      );
    }
    if (icon.highContrast) {
      manifest = setIconDefinition(
        manifest,
        icon,
        isClone,
        highContrastColorFileEnding
      );
    }

    if (icon.fileExtensions) {
      manifest = mapSpecificFileIcons(
        icon as FileIcon,
        FileMappingType.FileExtensions,
        manifest
      );
    }
    if (icon.fileNames) {
      manifest = mapSpecificFileIcons(
        icon as FileIcon,
        FileMappingType.FileNames,
        manifest,
        config.files?.associations
      );
    }
  });

  // set default file icon
  if (fileIcons.defaultIcon) {
    manifest = setIconDefinition(manifest, fileIcons.defaultIcon.name, false);
    manifest.file = fileIcons.defaultIcon.name;

    if (fileIcons.defaultIcon.light && manifest.light) {
      manifest = setIconDefinition(
        manifest,
        fileIcons.defaultIcon.name,
        false,
        lightColorFileEnding
      );
      if (manifest.light) {
        manifest.light.file = fileIcons.defaultIcon.name + lightColorFileEnding;
      }
    }

    if (fileIcons.defaultIcon.highContrast) {
      manifest = setIconDefinition(
        manifest,
        fileIcons.defaultIcon.name,
        false,
        highContrastColorFileEnding
      );
      if (manifest.highContrast) {
        manifest.highContrast.file =
          fileIcons.defaultIcon.name + highContrastColorFileEnding;
      }
    }
  }

  return manifest;
};

const disableIconsByPack = (
  fileIcons: LucodearFileIcons,
  activatedIconPack: string
): LucodearFileIcon[] => {
  return fileIcons.icons.filter((icon) => {
    return !icon.enabledFor
      ? true
      : icon.enabledFor.some((p) => p === activatedIconPack);
  });
};

export const setIconDefinition = (
  manifest: Manifest,
  icon: LucodearFileIcon | string,
  isClone: boolean,
  appendix: string = '',
  path = lucodearIconsPath
) => {
  const iconName = typeof icon === 'string' ? icon : icon.name;
  const ext = isClone ? cloneIconExtension : '.svg';
  const key = `${iconName}${appendix}`;
  const theme =
    typeof icon === 'string'
      ? ''
      : icon.theme === undefined
        ? ''
        : `${icon.theme}/`;

  manifest.iconDefinitions ??= {};

  manifest.iconDefinitions![key] = {
    iconPath: `${path}${theme}${iconName}${appendix}${ext}`,
  };

  return manifest;
};
