// This generator is used to override the configuration from the upstream extension

import { type FileIcons, type FolderTheme, merge } from '../../../../core';
import { fileIconsOverrides } from '../../overrides/file';
import { folderIconsOverrides } from '../../overrides/folder';

/**
 * Apply lucodear's overrides to the file and folder icons.
 *
 * @param fileIcons original file icons
 * @param folderIcons original folder icons
 * @returns overridden file and folder icons
 */
export const applyLucodearOverrides = (
  fileIcons: FileIcons,
  folderIcons: FolderTheme[]
): [FileIcons, FolderTheme[]] => {
  // override file icons cfg with lucodear's overrides
  const overriddenFileIcons = merge(fileIcons, fileIconsOverrides) as FileIcons;

  // override folder icons cfg with lucodear's overrides
  const overridenFolderIcons = folderIcons.map((theme) => {
    if (theme.name === 'specific') {
      return merge(theme, folderIconsOverrides) as FolderTheme;
    }

    return theme;
  });

  return [overriddenFileIcons, overridenFolderIcons];
};
