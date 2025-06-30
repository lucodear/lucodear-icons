import { IconPack } from '../../../../core';
import type { LucodearFolderIcon } from '../../models';
import { lucodear } from '../utils';

export const folders = lucodear('atomic-design', IconPack.Atomic, [
  {
    name: 'atdes-atom',
    folderNames: ['atom', 'atoms'],
  },
  {
    name: 'atdes-molecule',
    folderNames: ['molecule', 'molecules'],
  },
  {
    name: 'atdes-organism',
    folderNames: ['organism', 'organisms'],
  },
  {
    name: 'atdes-page',
    folderNames: ['page', 'pages'],
  },
] satisfies LucodearFolderIcon[]);
