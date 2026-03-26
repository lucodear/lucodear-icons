import { type FileIcon } from '../../../../core';
import type { LucodearFileIcon } from '../../models';
import { lucodear } from '../utils';

const astroPack = lucodear('astro', [] satisfies LucodearFileIcon[]);

export const astroOverrides = [
  // atom - blue-500
  {
    name: 'atdes-atom-astro',
    clone: {
      base: 'astro',
      color: 'blue-500',
    },
    fileExtensions: ['atom.astro', 'atoms.astro', 'atom/astro', 'atoms/astro'],
  },
  // molecule - orange-500
  {
    name: 'atdes-molecule-astro',
    clone: {
      base: 'astro',
      color: 'orange-500',
    },
    fileExtensions: [
      'molecule.astro',
      'molecules.astro',
      'molecule/astro',
      'molecules/astro',
    ],
  },
  // organism - teal-500
  {
    name: 'atdes-organism-astro',
    clone: {
      base: 'astro',
      color: 'teal-500',
    },
    fileExtensions: [
      'organism.astro',
      'organisms.astro',
      'organism/astro',
      'organisms/astro',
    ],
  },
  // pages - deep-orange-400
  {
    name: 'atdes-page-astro',
    clone: {
      base: 'astro',
      color: 'deep-orange-400',
    },
    fileExtensions: ['page.astro', 'pages.astro', 'page/astro', 'pages/astro'],
  },
  // template - brown-400
  {
    name: 'atdes-template-astro',
    clone: {
      base: 'astro',
      color: 'brown-400',
    },
    fileExtensions: [
      'template.astro',
      'templates.astro',
      'template/astro',
      'templates/astro',
    ],
  },
] as FileIcon[];

export const files: LucodearFileIcon[] = [...astroPack];
