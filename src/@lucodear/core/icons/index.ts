import type { FolderTheme } from '../../../core';
import type { LucodearFileIcons, LucodearFolderTheme } from '../models';
import * as ai from './ai';
import * as lucodear from './lucodear';
import * as misc from './misc';
import * as node from './node';
import { folderPatches } from './patches';
import * as payload from './payload';
import * as python from './python';
import * as react from './react';
import * as rust from './rust';

/** Defines file icons */
export const lucodearFileIcons: LucodearFileIcons = {
  icons: [
    ...misc.files,
    ...node.files,
    ...lucodear.files,
    ...python.files,
    ...react.files,
    ...rust.files,
    ...payload.files,
  ],
};

/** Defines folder icons */
export const lucodearFolderIcons: LucodearFolderTheme = {
  name: 'specific',
  defaultIcon: { name: 'folder' },
  rootFolder: { name: 'folder-root' },
  icons: [
    ...misc.folders,
    ...lucodear.folders,
    ...python.folders,
    ...ai.folders,
    ...rust.folders,
    ...payload.folders,
  ],
};

// #region patcher
/** patches the folder icons adding prefixes */
export const patchFolders = (folders: FolderTheme[]) => {
  const theme = folders.find((f) => f.name === 'specific');
  if (!theme) {
    return folders;
  }

  for (const patch of folderPatches) {
    const existing = theme.icons?.find((i) => i.name === patch.name);
    if (existing) {
      const folderNames = !patch.skipExtend
        ? patch.folderNames?.reduce((acc, folderName) => {
            if (
              folderName.startsWith('~') ||
              folderName.startsWith('@') ||
              folderName.startsWith('=') ||
              folderName.startsWith('.') ||
              folderName.startsWith('_')
            ) {
              // if already prefixed, don't add the prefixes
              return acc.concat(folderName);
            }

            return acc.concat([
              folderName,
              `@${folderName}`,
              `=${folderName}`,
              `~${folderName}`,
            ]);
          }, [] as string[])
        : patch.folderNames;

      existing.folderNames.push(...(folderNames || []));

      // make unique
      existing.folderNames = Array.from(new Set(existing.folderNames));
      console.log(`Patched folder icon '${patch.name}'`);
    }
  }

  return folders;
};

// #endregion
