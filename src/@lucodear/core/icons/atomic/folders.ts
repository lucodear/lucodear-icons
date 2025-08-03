import type { LucodearFolderIcon } from '../../models';
import { lucodear } from '../utils';

export const folders = lucodear('atomic-design', [
  {
    name: 'atdes-page',
    folderNames: ['page', 'pages'],
  },
] satisfies LucodearFolderIcon[]);
