import { loadLucodearFileIconDefinitions } from './file';
import { loadLucodearFolderIconDefinitions } from './folder';

export const lucodearIconsPath: string = './../icons-lc/';

export const definitions = {
  file: loadLucodearFileIconDefinitions,
  folder: loadLucodearFolderIconDefinitions,
};
