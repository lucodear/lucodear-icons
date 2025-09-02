import { type FileIcons, parseByPattern } from '../../../core';
import { atomicOverrides } from '../icons/atomic';

/**
 * Defines lucodear's file icons overrides. The content of this object will be merged with the
 * default file icons defined by the upstream extension in:
 *
 * [fileIcons.ts](./../../../core/icons/fileIcons.ts)
 */
export const fileIconsOverrides: Partial<FileIcons> = {
  icons: parseByPattern([
    {
      name: 'tsconfig-base',
      clone: {
        base: 'tsconfig',
        color: 'brown-400',
      },
      fileExtensions: ['base.tsconfig.json', 'tsconfig.base.json'],
      fileNames: ['base.tsconfig.json', 'tsconfig.base.json'],
    },
    {
      name: 'prompt',
      fileExtensions: ['prompt.md', 'prompts.md', 'prompt/md', 'prompts/md'],
    },
    ...atomicOverrides,
  ]),
};
