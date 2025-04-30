import type { LucodearFolderIcon } from '../../models';
import { lucodear } from '../utils';

export const folders = lucodear('lucodear', [
  {
    name: 'coco',
    folderNames: ['coco'],
  },
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
    name: 'oxidoc',
    folderNames: ['oxidoc'],
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
    name: 'satlite',
    folderNames: ['satlite'],
  },
  {
    name: 'singleaction',
    folderNames: ['singleaction', 'single-action', 'sa'],
  },
  {
    name: 'zai',
    looseFolderIcon: true,
  },
  {
    name: 'zai-core',
    looseFolderIcon: true,
  },
  {
    name: 'zai-common',
    looseFolderIcon: true,
  },
] satisfies LucodearFolderIcon[]);
