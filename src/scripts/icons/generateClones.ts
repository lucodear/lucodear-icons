import { generateManifest } from '../../@lucodear/core/generators/manifest';
import { fileIcons, folderIcons, generateConfiguredClones } from '../../core';

/**
 * This file is meant to be executed exclusively by npm scripts.
 */
try {
  console.log('Generating icon clones...');
  // #region 🍭 » lucode (changed with custom generateManifest)
  const manifest = generateManifest();
  // #endregion
  generateConfiguredClones(folderIcons, manifest);
  generateConfiguredClones(fileIcons, manifest);
} catch (error) {
  console.error(error);
  throw Error('Could not generate clones!');
}
