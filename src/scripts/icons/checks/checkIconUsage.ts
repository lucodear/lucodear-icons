import { readdir } from 'node:fs';
import { join, parse } from 'node:path';

import { applyLucodearOverrides } from '../../../@lucodear/core/generators/override';
import {
  lucodearFileIcons,
  lucodearFolderIcons,
} from '../../../@lucodear/core/icons';
import {
  type DefaultIcon,
  type FileIcons,
  type FolderIcon,
  type FolderTheme,
  highContrastColorFileEnding,
  languageIcons,
  lightColorFileEnding,
  merge,
  openedFolder,
  fileIcons as originalFileIcons,
  folderIcons as originalFolderIcons,
} from '../../../core';
import { green, red } from '../../helpers/painter';

// #region 🍭 » lucode (take overrides into account)
const [fileIcons, folderIcons] = applyLucodearOverrides(
  merge(originalFileIcons, lucodearFileIcons as FileIcons),
  [...originalFolderIcons, lucodearFolderIcons] as FolderTheme[]
);
// #endregion

/**
 * Defines the folder where all icon files are located.
 */
const folderPath = join('icons');

/**
 * Defines an array with all icons that can be found in the file system.
 */
const availableIcons: { [s: string]: string } = {};

/**
 * Get all icon file names from the file system.
 */
const fsReadAllIconFiles = (
  error: NodeJS.ErrnoException | null,
  files: string[]
) => {
  if (error) {
    throw Error(error.message);
  }

  files.forEach((file) => {
    const fileName = file;
    const iconName = parse(file).name.replace('.clone', '');
    availableIcons[iconName] = fileName;
  });

  checkUsageOfAllIcons();
  handleErrors();
};

const checkUsageOfAllIcons = () => {
  const usedFileIcons: string[] = getAllUsedFileIcons();
  const usedFolderIcons: string[] = getAllUsedFolderIcons();
  const usedLanguageIcons: string[] = getAllUsedLanguageIcons();

  [...usedFileIcons, ...usedFolderIcons, ...usedLanguageIcons].forEach(
    (icon) => {
      delete availableIcons[icon];
    }
  );
};

const handleErrors = () => {
  const amountOfUnusedIcons = Object.keys(availableIcons).length;
  if (amountOfUnusedIcons === 0) {
    console.log('> Material Icon Theme:', green('Passed icon usage checks!'));
  } else {
    console.log(
      '> Material Icon Theme: ' + red(`${amountOfUnusedIcons} unused icon(s):`)
    );
    Object.keys(availableIcons).forEach((icon) => {
      console.log(red(`- ${availableIcons[icon]}`));
    });
    throw new Error('Found unused icon files!');
  }
};

// read from the file system
export const check = () => readdir(folderPath, fsReadAllIconFiles);

const getAllUsedFileIcons = (): string[] => {
  return [
    fileIcons.defaultIcon.name,
    fileIcons.defaultIcon.light
      ? fileIcons.defaultIcon.name + lightColorFileEnding
      : '',
    fileIcons.defaultIcon.highContrast
      ? fileIcons.defaultIcon.name + highContrastColorFileEnding
      : '',
    ...fileIcons.icons.map((icon) => icon.name),
    ...fileIcons.icons
      .filter((icon) => icon.light)
      .map((icon) => icon.name + lightColorFileEnding),
    ...fileIcons.icons
      .filter((icon) => icon.highContrast)
      .map((icon) => icon.name + highContrastColorFileEnding),
  ].filter((f) => f !== '');
};

const getAllUsedFolderIcons = (): string[] => {
  const icons = folderIcons
    .map((theme) => (theme.name === 'none' ? [] : getAllFolderIcons(theme)))
    .reduce((a, b) => a.concat(b));
  return icons
    .map((icon) => {
      return [
        icon.name,
        icon.name + openedFolder,
        icon.light ? icon.name + lightColorFileEnding : '',
        icon.light ? icon.name + openedFolder + lightColorFileEnding : '',
        icon.highContrast ? icon.name + highContrastColorFileEnding : '',
        icon.highContrast
          ? icon.name + openedFolder + highContrastColorFileEnding
          : '',
      ];
    })
    .filter((icon) => icon !== undefined)
    .reduce((a, b) => a.concat(b));
};

const getAllFolderIcons = (
  theme: FolderTheme
): (FolderIcon | DefaultIcon)[] => {
  const icons = theme.icons || [];
  const allFolderIcons = [theme.defaultIcon, ...icons];
  if (theme.rootFolder) {
    allFolderIcons.push(theme.rootFolder);
  }
  return allFolderIcons;
};

const getAllUsedLanguageIcons = (): string[] => [
  ...languageIcons.map((icon) => icon.name),
  ...languageIcons
    .filter((icon) => icon.light)
    .map((icon) => icon.name + lightColorFileEnding),
  ...languageIcons
    .filter((icon) => icon.highContrast)
    .map((icon) => icon.name + highContrastColorFileEnding),
];
