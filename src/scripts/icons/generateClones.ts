import { generateManifest } from '../../@lucodear/core/generators/manifest';
import { applyLucodearOverrides } from '../../@lucodear/core/generators/override';
import {
  lucodearFileIcons,
  lucodearFolderIcons,
} from '../../@lucodear/core/icons';
import {
  type FileIcons,
  type FolderTheme,
  generateConfiguredFileIconClones,
  generateConfiguredFolderIconClones,
  generateConfiguredLanguageIconClones,
  languageIcons,
  merge,
  fileIcons as originalFileIcons,
  folderIcons as originalFolderIcons,
} from '../../core';
import { yellow } from '../helpers/painter';

/**
 * This file is meant to be executed exclusively by npm scripts.
 */
try {
  console.log('> Material Icon Theme:', yellow('Generating icon clones...'));

  // #region 🍭 » lucode (changed with custom generateManifest and overrides)
  const manifest = generateManifest();
  let [fileIcons, folderIcons] = applyLucodearOverrides(
    originalFileIcons,
    originalFolderIcons
  );

  fileIcons = merge(fileIcons, lucodearFileIcons as FileIcons);
  folderIcons = [...folderIcons, ...[lucodearFolderIcons as FolderTheme]];
  // #endregion

  generateConfiguredFileIconClones(fileIcons, manifest);
  generateConfiguredFolderIconClones(folderIcons, manifest);
  generateConfiguredLanguageIconClones(languageIcons, manifest);
} catch (error) {
  console.error(error);
  throw Error('Could not generate clones!');
}
