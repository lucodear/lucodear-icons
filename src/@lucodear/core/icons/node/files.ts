import { IconPack } from '../../../../core';
import type { LucodearFileIcon } from '../../models';
import { lucodear } from '../utils';

/** name + extensions */
const namext = (names: string[], asFolder = false) => ({
  fileNames: names.flatMap((name) => `${name}.ts`),
  fileExtensions: names.flatMap((name) => [
    `${name}.ts`,
    ...(asFolder ? [`${name}/ts`] : []),
  ]),
});

const script = (
  ext: 'js' | 'ts',
  xfixes: string[],
  name?: string[]
): {
  fileNames: string[];
  fileExtensions: string[];
} => {
  const exts = ext === 'js' ? ['js', 'mjs', 'cjs'] : ['ts', 'mts', 'cts'];
  return {
    fileNames: xfixes.flatMap(
      (xfix) =>
        exts
          .flatMap((ext) => {
            if (name && name.length) {
              return name.flatMap((n) => [
                `${n}.${xfix}.${ext}`,
                `${xfix}/${n}.${ext}`,
              ]);
            }
            return [`${xfix}.${ext}`];
          })
          .filter(Boolean) as string[]
    ),
    fileExtensions: xfixes.flatMap(
      (xfix) =>
        exts
          .flatMap((ext) => {
            if (name && name.length) {
              return name.flatMap((n) => [`${n}.${xfix}.${ext}`]);
            }
            return [`${xfix}/${ext}`, `${xfix}.${ext}`];
          })
          .filter(Boolean) as string[]
    ),
  };
};
/** Defines the icons that are only available by default. */
export const typescript = lucodear('node', [
  {
    name: 'ts-abstract',
    ...namext(['abstract', 'abs', 'abstracts']),
  },
  {
    name: 'ts-app',
    ...namext(['app', 'apps', 'application', 'applications']),
  },
  {
    name: 'ts-common',
    ...namext(['common', 'shared', 'commons'], true),
  },
  {
    name: 'ts-constants',
    ...namext(['constants', 'const', 'constant']),
  },
  {
    name: 'ts-dto',
    ...namext(['dto', 'dtos'], true),
  },
  {
    name: 'ts-factory',
    ...namext(['factory', 'fact']),
  },
  {
    name: 'ts-index',
    fileNames: ['index'],
  },
  {
    name: 'ts-interface',
    ...namext(['interface', 'interfaces'], true),
  },
  {
    name: 'ts-main',
    ...namext(['main']),
  },
  {
    name: 'ts-model',
    ...namext(['model', 'models', 'entity', 'entities'], true),
  },
  {
    name: 'ts-service',
    ...namext(
      ['service', 'services', 'provider', 'providers', 'svc', 'svcs'],
      true
    ),
  },
  {
    name: 'ts-types',
    ...namext(['types', 'type'], true),
  },
  {
    name: 'ts-utils',
    light: true,
    ...namext(['util', 'utils', 'helper', 'helpers'], true),
  },
] satisfies LucodearFileIcon[]);

/** Defines the icons that are only available if the `IconPack.CloudFlare` is enabled. */
export const cloudflare = lucodear('node', IconPack.CloudFlare, [
  {
    name: 'ts-cloudflare-function',
    fileExtensions: ['api/ts', 'functions/ts'],
  },
  {
    name: 'js-cloudflare-function',
    fileExtensions: ['api/js', 'functions/js'],
  },
] satisfies LucodearFileIcon[]);

export const scripts = lucodear('node', [
  {
    name: 'js-script',
    ...script('js', ['script', 'scripts']),
  },
  {
    name: 'ts-script',
    ...script('ts', ['script', 'scripts']),
  },
  {
    name: 'js-script-build',
    ...script('js', ['script', 'scripts'], ['build', 'compile', 'bundle']),
  },
  {
    name: 'ts-script-build',
    ...script('ts', ['script', 'scripts'], ['build', 'compile', 'bundle']),
  },
  {
    name: 'js-script-dev',
    ...script('js', ['script', 'scripts'], ['dev', 'development', 'serve']),
  },
  {
    name: 'ts-script-dev',
    ...script('ts', ['script', 'scripts'], ['dev', 'development', 'serve']),
  },
  {
    name: 'js-script-preview',
    ...script('js', ['script', 'scripts'], ['preview']),
  },
  {
    name: 'ts-script-preview',
    ...script('ts', ['script', 'scripts'], ['preview']),
  },
  {
    name: 'js-script-release',
    ...script(
      'js',
      ['script', 'scripts'],
      ['release', 'publish', 'version-bump']
    ),
  },
  {
    name: 'ts-script-release',
    ...script(
      'ts',
      ['script', 'scripts'],
      ['release', 'publish', 'version-bump']
    ),
  },
  {
    name: 'js-script-changelog',
    ...script('js', ['script', 'scripts'], ['changelog', 'chg-log']),
  },
  {
    name: 'ts-script-changelog',
    ...script('ts', ['script', 'scripts'], ['changelog', 'chg-log']),
  },
]);

/** Defines all the file icons from the node lucodear pack */
export const files: LucodearFileIcon[] = [
  ...typescript,
  ...cloudflare,
  ...scripts,
];
