import { lucodearIconGenerator } from '.';
import {
  type ManifestConfig,
  fileIcons,
  folderIcons,
  languageIcons,
} from '../../../core';
import { padWithDefaultConfig } from '../../../core/generator/config/defaultConfig';
import { loadFileIconDefinitions } from '../../../core/generator/fileGenerator';
import { loadFolderIconDefinitions } from '../../../core/generator/folderGenerator';
import { loadLanguageIconDefinitions } from '../../../core/generator/languageGenerator';
import { merge } from '../../../core/helpers/object';
import {
  type Manifest,
  createEmptyManifest,
} from '../../../core/models/manifest';

/**
 * Generate the manifest that will be written as JSON file.
 */
export const generateManifest = (config?: ManifestConfig): Manifest => {
  const refinedConfig = padWithDefaultConfig(config);
  const manifest = createEmptyManifest();
  const languageIconDefinitions = loadLanguageIconDefinitions(
    languageIcons,
    refinedConfig,
    manifest
  );
  const fileIconDefinitions = loadFileIconDefinitions(
    fileIcons,
    refinedConfig,
    manifest
  );
  const folderIconDefinitions = loadFolderIconDefinitions(
    folderIcons,
    refinedConfig,
    manifest
  );

  // #region 🍭 » lucode
  const lucodearIconDefinitions = lucodearIconGenerator(
    manifest,
    refinedConfig,
    {
      file: fileIcons,
      folder: folderIcons,
    }
  );
  // #endregion

  return merge<Manifest>(
    languageIconDefinitions,
    fileIconDefinitions,
    folderIconDefinitions,
    lucodearIconDefinitions
  );
};
