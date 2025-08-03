import { type FileIcon } from '../../../../core';
import type { LucodearFileIcon } from '../../models';
import { lucodear } from '../utils';

const atomicPack = lucodear('atomic-design', [] satisfies LucodearFileIcon[]);

export const atomicOverrides = [
  // atom - blue-500
  {
    name: 'atdes-atom-ts',
    clone: {
      base: 'typescript',
      color: 'blue-500',
    },
    fileExtensions: ['atom.ts', 'atoms.ts', 'atom/ts', 'atoms/ts'],
  },
  {
    name: 'atdes-atom-tsx',
    clone: {
      base: 'react_ts',
      color: 'blue-500',
    },
    fileExtensions: ['atom.tsx', 'atoms.tsx', 'atom/tsx', 'atoms/tsx'],
  },
  {
    name: 'atdes-atom-js',
    clone: {
      base: 'javascript',
      color: 'blue-500',
    },
    fileExtensions: ['atom.js', 'atoms.js', 'atom/js', 'atoms/js'],
  },
  {
    name: 'atdes-atom-jsx',
    clone: {
      base: 'react',
      color: 'blue-500',
    },
    fileExtensions: ['atom.jsx', 'atoms.jsx', 'atom/jsx', 'atoms/jsx'],
  },
  // molecule - orange-500
  {
    name: 'atdes-molecule-ts',
    clone: {
      base: 'typescript',
      color: 'orange-500',
    },
    fileExtensions: [
      'molecule.ts',
      'molecules.ts',
      'molecule/ts',
      'molecules/ts',
    ],
  },
  {
    name: 'atdes-molecule-tsx',
    clone: {
      base: 'react_ts',
      color: 'orange-500',
    },
    fileExtensions: [
      'molecule.tsx',
      'molecules.tsx',
      'molecule/tsx',
      'molecules/tsx',
    ],
  },
  {
    name: 'atdes-molecule-js',
    clone: {
      base: 'javascript',
      color: 'orange-500',
    },
    fileExtensions: [
      'molecule.js',
      'molecules.js',
      'molecule/js',
      'molecules/js',
    ],
  },
  {
    name: 'atdes-molecule-jsx',
    clone: {
      base: 'react',
      color: 'orange-500',
    },
    fileExtensions: [
      'molecule.jsx',
      'molecules.jsx',
      'molecule/jsx',
      'molecules/jsx',
    ],
  },
  // organism - teal-500
  {
    name: 'atdes-organism-ts',
    clone: {
      base: 'typescript',
      color: 'teal-500',
    },
    fileExtensions: [
      'organism.ts',
      'organisms.ts',
      'organism/ts',
      'organisms/ts',
    ],
  },
  {
    name: 'atdes-organism-tsx',
    clone: {
      base: 'react_ts',
      color: 'teal-500',
    },
    fileExtensions: [
      'organism.tsx',
      'organisms.tsx',
      'organism/tsx',
      'organisms/tsx',
    ],
  },
  {
    name: 'atdes-organism-js',
    clone: {
      base: 'javascript',
      color: 'teal-500',
    },
    fileExtensions: [
      'organism.js',
      'organisms.js',
      'organism/js',
      'organisms/js',
    ],
  },
  {
    name: 'atdes-organism-jsx',
    clone: {
      base: 'react',
      color: 'teal-500',
    },
    fileExtensions: [
      'organism.jsx',
      'organisms.jsx',
      'organism/jsx',
      'organisms/jsx',
    ],
  },
  // pages - deep-orange-400
  {
    name: 'atdes-page-ts',
    clone: {
      base: 'typescript',
      color: 'deep-orange-400',
    },
    fileExtensions: ['page.ts', 'pages.ts', 'page/ts', 'pages/ts'],
  },
  {
    name: 'atdes-page-tsx',
    clone: {
      base: 'react_ts',
      color: 'deep-orange-400',
    },
    fileExtensions: ['page.tsx', 'pages.tsx', 'page/tsx', 'pages/tsx'],
  },
  {
    name: 'atdes-page-js',
    clone: {
      base: 'javascript',
      color: 'deep-orange-400',
    },
    fileExtensions: ['page.js', 'pages.js', 'page/js', 'pages/js'],
  },
  {
    name: 'atdes-page-jsx',
    clone: {
      base: 'react',
      color: 'deep-orange-400',
    },
    fileExtensions: ['page.jsx', 'pages.jsx', 'page/jsx', 'pages/jsx'],
  },
  // template - brown-400
  {
    name: 'atdes-template-ts',
    clone: {
      base: 'typescript',
      color: 'brown-400',
    },
    fileExtensions: [
      'template.ts',
      'templates.ts',
      'template/ts',
      'templates/ts',
    ],
  },
  {
    name: 'atdes-template-tsx',
    clone: {
      base: 'react_ts',
      color: 'brown-400',
    },
    fileExtensions: [
      'template.tsx',
      'templates.tsx',
      'template/tsx',
      'templates/tsx',
    ],
  },
  {
    name: 'atdes-template-js',
    clone: {
      base: 'javascript',
      color: 'brown-400',
    },
    fileExtensions: [
      'template.js',
      'templates.js',
      'template/js',
      'templates/js',
    ],
  },
  {
    name: 'atdes-template-jsx',
    clone: {
      base: 'react',
      color: 'brown-400',
    },
    fileExtensions: [
      'template.jsx',
      'templates.jsx',
      'template/jsx',
      'templates/jsx',
    ],
  },
] as FileIcon[];

export const files: LucodearFileIcon[] = [...atomicPack];
