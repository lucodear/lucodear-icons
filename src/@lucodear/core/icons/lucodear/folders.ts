import type { LucodearFolderIcon } from '../../models';
import { lucodear } from '../utils';

export const folders = lucodear('lucodear', [
  {
    name: 'kurv',
    folderNames: ['kurv'],
    light: true,
  },
  {
    name: 'lucodear',
    folderNames: ['lucodear', 'lucode', 'lucode.ar'],
  },
  {
    name: 'lucode-template',
    folderNames: [
      '.lucode-template',
      '.template',
      '.lc-tmpl',
      '.lctmpl',
      '.lctemplate',
      '.lc-template',
    ],
  },
  {
    name: 'pest',
    folderNames: ['pest'],
    light: true,
  },
  {
    name: 'rustler',
    folderNames: ['rustler', 'rustlers'],
  },
  {
    name: 'singleaction',
    folderNames: ['singleaction', 'single-action', 'sa'],
  },
] satisfies LucodearFolderIcon[]);
