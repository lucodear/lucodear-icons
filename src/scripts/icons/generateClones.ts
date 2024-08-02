import { generateManifest } from '../../@lucodear/core/generators/manifest';
import { applyLucodearOverrides } from '../../@lucodear/core/generators/override';
import {
  generateConfiguredClones,
  fileIcons as originalFileIcons,
  folderIcons as originalFolderIcons,
} from '../../core';

/**
 * This file is meant to be executed exclusively by npm scripts.
 */
try {
  console.log('Generating icon clones...');
  // #region 🍭 » lucode (changed with custom generateManifest and overrides)
  const manifest = generateManifest();
  const [fileIcons, folderIcons] = applyLucodearOverrides(
    originalFileIcons,
    originalFolderIcons
  );
  // #endregion
  generateConfiguredClones(folderIcons, manifest);
  generateConfiguredClones(fileIcons, manifest);
} catch (error) {
  console.error(error);
  throw Error('Could not generate clones!');
}
