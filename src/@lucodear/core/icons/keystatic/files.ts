import { FileNamePattern, IconPack } from '../../../../core';
import type { LucodearFileIcon } from '../../models';
import { lucodear } from '../utils';

const k = (
  icon: string,
  names: string[],
  color: string,
  lightColor: string | undefined = undefined,
  folderExtensionConfig = true
) => ({
  name: `keystatic-${icon}`,
  clone: {
    base: 'file-keystatic',
    color,
    lightColor,
  },
  fileNames: [icon, ...names].flatMap((name) => [
    `${name}.tsx`,
    `${name}.ts`,
    `${name}.jsx`,
    `${name}.js`,
  ]),
  fileExtensions: [icon, ...names].flatMap((name) =>
    [`${name}.tsx`, `${name}.jsx`, `${name}.ts`, `${name}.js`].concat(
      folderExtensionConfig
        ? [
            `${name}/tsx`,
            `${name}/ts`,
            `${name}/jsx`,
            `${name}/js`,
            `(${name})/tsx`,
            `(${name})/ts`,
            `(${name})/jsx`,
            `(${name})/js`,
          ]
        : []
    )
  ),
  light: lightColor !== undefined,
});

// #region python
const common = lucodear('keystatic', [
  {
    name: 'keystatic',
    light: true,
    patterns: {
      'keystatic.config': FileNamePattern.React,
    },
  },
] as LucodearFileIcon[]);
// #endregion

// // #region keystatic pack
const keystaticPack = lucodear('keystatic', IconPack.Keystatic, [
  // k('component', ['comp', 'cmp', 'components', 'c'], 'lime-600', 'lime-800'),
  // k(
  //   'context',
  //   ['ctx', 'contexts', 'provider', 'store', 'stores'],
  //   'teal-400',
  //   'teal-600'
  // ),
  // k('hook', ['hooks', 'hk'], 'deep-purple-A100', 'deep-purple-400'),
  // k('layout', ['template', 'layouts', 'templates', 'tmpl', 'lyt'], 'brown-300'),
  // k('page', ['pages', 'pg', 'pag'], 'deep-orange-400'),
  k('global', ['globals', 'glb'], 'blue-gray-500', 'blue-gray-700'),
  k('field', ['fields', 'fld'], 'orange-400'),
  k('block', ['blocks', 'blk'], 'red-400'),
  k('collection', ['collections', 'clct'], 'indigo-400'),
] as LucodearFileIcon[]);
// #endregion

// #region exports
export const files: LucodearFileIcon[] = [...common, ...keystaticPack];
// #endregion
