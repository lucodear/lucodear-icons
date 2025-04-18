import type { LucodearFileIcon } from '../../models';
import { lucodear } from '../utils';

export const files: LucodearFileIcon[] = lucodear('misc', [
  {
    name: 'idea',
    fileNames: [
      'idea',
      'ideas',
      'idea.md',
      'idea.txt',
      'ideas.md',
      'ideas.txt',
    ],
    fileExtensions: [
      'idea',
      'ideas',
      'idea/md',
      'idea/mdx',
      'idea/txt',
      'idea/html',
      'ideas/md',
      'ideas/mdx',
      'ideas/txt',
      'ideas/html',
      '_idea/md',
      '_idea/mdx',
      '_idea/txt',
      '_idea/html',
      '_ideas/md',
      '_ideas/mdx',
      '_ideas/txt',
      '_ideas/html',
      '.idea/md',
      '.idea/mdx',
      '.idea/txt',
      '.idea/html',
      '.ideas/md',
      '.ideas/mdx',
      '.ideas/txt',
      '.ideas/html',
      '~idea/md',
      '~idea/mdx',
      '~idea/txt',
      '~idea/html',
      '~ideas/md',
      '~ideas/mdx',
      '~ideas/txt',
      '~ideas/html',
      '=idea/md',
      '=idea/mdx',
      '=idea/txt',
      '=idea/html',
      '=ideas/md',
      '=ideas/mdx',
      '=ideas/txt',
      '=ideas/html',
      '@idea/md',
      '@idea/mdx',
      '@idea/txt',
      '@idea/html',
      '@ideas/md',
      '@ideas/mdx',
      '@ideas/txt',
      '@ideas/html',
      '!idea/md',
      '!idea/mdx',
      '!idea/txt',
      '!idea/html',
      '!ideas/md',
      '!ideas/mdx',
      '!ideas/txt',
      '!ideas/html',
      '💡/md',
      '💡/mdx',
      '💡/txt',
      '💡/html',
    ],
    light: true,
  },
  {
    name: 'shadcn',
    fileNames: ['components.json'],
    light: true,
  },
  {
    name: 'package-json',
    fileNames: ['package.json'],
  },
  {
    name: 'package-lock',
    fileNames: ['package-lock.json'],
  },
  {
    name: 'pureref',
    fileExtensions: ['pur'],
    light: true,
  },
  {
    name: 'uv-lock',
    fileNames: ['uv.lock'],
    light: true,
  },
  {
    name: 'workflow',
    fileExtensions: [
      'workflow/yml',
      'workflow/yaml',
      'workflows/yml',
      'workflows/yaml',
    ],
    light: true,
  },
  {
    name: 'wrangler',
    fileNames: ['wrangler.toml'],
    light: true,
  },
] satisfies LucodearFileIcon[]);
