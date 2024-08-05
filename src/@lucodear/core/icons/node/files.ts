import { IconPack } from '../../../../core';
import type { LucodearFileIcon } from '../../models';
import { lucodear } from '../utils';

/** name + extensions */
const namext = (names: string[]) => ({
  fileNames: names,
  fileExtensions: names,
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
    ...namext(['abstract.ts', 'abs.ts', 'abstracts.ts']),
  },
  {
    name: 'ts-app',
    ...namext(['app.ts', 'apps.ts', 'application.ts', 'applications.ts']),
  },
  {
    name: 'ts-common',
    ...namext(['common.ts', 'shared.ts', 'commons.ts']),
  },
  {
    name: 'ts-constants',
    ...namext(['constants.ts', 'const.ts', 'constant.ts']),
  },
  {
    name: 'ts-dto',
    ...namext(['dto.ts', 'dtos.ts']),
  },
  {
    name: 'ts-factory',
    ...namext(['factory.ts', 'fact.ts']),
  },
  {
    name: 'ts-index',
    fileNames: ['index.ts'],
  },
  {
    name: 'ts-interface',
    ...namext(['interface.ts', 'interfaces.ts']),
  },
  {
    name: 'ts-main',
    ...namext(['main.ts']),
  },
  {
    name: 'ts-model',
    ...namext(['model.ts', 'models.ts', 'entity.ts', 'entities.ts']),
  },
  {
    name: 'ts-service',
    ...namext([
      'service.ts',
      'services.ts',
      'provider.ts',
      'providers.ts',
      'svc.ts',
      'svcs.ts',
    ]),
  },
  {
    name: 'ts-types',
    ...namext(['types.ts', 'type.ts']),
  },
  {
    name: 'ts-utils',
    light: true,
    ...namext(['util.ts', 'utils.ts', 'helper.ts', 'helpers.ts']),
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
