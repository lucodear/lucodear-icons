import { type FileIcon, IconPack } from '../../../../core';
import type { LucodearFileIcon } from '../../models';
import { lucodear } from '../utils';

const atomicPack = lucodear(
  'atomic-design',
  IconPack.Atomic,
  [] satisfies LucodearFileIcon[]
);

export const atomicOverrides = [
  // atom - blue-500
  {
    name: 'atdes-atom-ts',
    clone: {
      base: 'typescript',
      color: 'blue-500',
    },
    enabledFor: [IconPack.Atomic],
    fileExtensions: ['atom.ts', 'atoms.ts', 'atom/ts', 'atoms/ts'],
  },
  {
    name: 'atdes-atom-tsx',
    clone: {
      base: 'react_ts',
      color: 'blue-500',
    },
    enabledFor: [IconPack.Atomic],
    fileExtensions: ['atom.tsx', 'atoms.tsx', 'atom/tsx', 'atoms/tsx'],
  },
  {
    name: 'atdes-atom-js',
    clone: {
      base: 'javascript',
      color: 'blue-500',
    },
    enabledFor: [IconPack.Atomic],
    fileExtensions: ['atom.js', 'atoms.js', 'atom/js', 'atoms/js'],
  },
  {
    name: 'atdes-atom-jsx',
    clone: {
      base: 'react',
      color: 'blue-500',
    },
    enabledFor: [IconPack.Atomic],
    fileExtensions: ['atom.jsx', 'atoms.jsx', 'atom/jsx', 'atoms/jsx'],
  },
  // molecule - orange-500
  {
    name: 'atdes-molecule-ts',
    clone: {
      base: 'typescript',
      color: 'orange-500',
    },
    enabledFor: [IconPack.Atomic],
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
    enabledFor: [IconPack.Atomic],
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
    enabledFor: [IconPack.Atomic],
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
    enabledFor: [IconPack.Atomic],
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
    enabledFor: [IconPack.Atomic],
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
    enabledFor: [IconPack.Atomic],
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
    enabledFor: [IconPack.Atomic],
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
    enabledFor: [IconPack.Atomic],
    fileExtensions: [
      'organism.jsx',
      'organisms.jsx',
      'organism/jsx',
      'organisms/jsx',
    ],
  },
  // pages - yellow-700
  {
    name: 'atdes-page-ts',
    clone: {
      base: 'typescript',
      color: 'yellow-700',
    },
    enabledFor: [IconPack.Atomic],
    fileExtensions: ['page.ts', 'pages.ts', 'page/ts', 'pages/ts'],
  },
  {
    name: 'atdes-page-tsx',
    clone: {
      base: 'react_ts',
      color: 'yellow-700',
    },
    enabledFor: [IconPack.Atomic],
    fileExtensions: ['page.tsx', 'pages.tsx', 'page/tsx', 'pages/tsx'],
  },
  {
    name: 'atdes-page-js',
    clone: {
      base: 'javascript',
      color: 'yellow-700',
    },
    enabledFor: [IconPack.Atomic],
    fileExtensions: ['page.js', 'pages.js', 'page/js', 'pages/js'],
  },
  {
    name: 'atdes-page-jsx',
    clone: {
      base: 'react',
      color: 'yellow-700',
    },
    enabledFor: [IconPack.Atomic],
    fileExtensions: ['page.jsx', 'pages.jsx', 'page/jsx', 'pages/jsx'],
  },
  // template - brown-400
  {
    name: 'atdes-template-ts',
    clone: {
      base: 'typescript',
      color: 'brown-400',
    },
    enabledFor: [IconPack.Atomic],
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
    enabledFor: [IconPack.Atomic],
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
    enabledFor: [IconPack.Atomic],
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
    enabledFor: [IconPack.Atomic],
    fileExtensions: [
      'template.jsx',
      'templates.jsx',
      'template/jsx',
      'templates/jsx',
    ],
  },
] as FileIcon[];

export const files: LucodearFileIcon[] = [...atomicPack];
