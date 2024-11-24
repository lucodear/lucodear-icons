import { FileNamePattern, IconPack } from '../../../../core';
import type { LucodearFileIcon } from '../../models';
import { lucodear } from '../utils';

const p = (
  icon: string,
  names: string[],
  color: string,
  lightColor: string | undefined = undefined,
  folderExtensionConfig = true
) => ({
  name: `payload-${icon}`,
  clone: {
    base: 'file-payload',
    color,
    lightColor,
  },
  fileNames: [icon, ...names].flatMap((name) => [`${name}.tsx`, `${name}.jsx`]),
  fileExtensions: [icon, ...names].flatMap((name) =>
    [`${name}.tsx`, `${name}.jsx`].concat(
      folderExtensionConfig
        ? [`${name}/tsx`, `${name}/jsx`, `(${name})/tsx`, `(${name})/jsx`]
        : []
    )
  ),
  light: lightColor !== undefined,
});

// #region python
const common = lucodear('payload', [
  {
    name: 'payload',
    light: true,
    patterns: {
      'payload.config': FileNamePattern.Ecmascript,
    },
  },
] as LucodearFileIcon[]);
// #endregion

// // #region payload pack
const payloadPack = lucodear('payload', IconPack.Payload, [
  {
    name: 'payload-config',
    light: true,
    patterns: {
      'payload.config': FileNamePattern.Ecmascript,
    },
  },
  {
    name: 'payload-types',
    patterns: {
      'payload.types': FileNamePattern.Ecmascript,
      'payload-types': FileNamePattern.Ecmascript,
    },
  },
  {
    name: 'payload-tsx',
    light: true,
    clone: {
      base: 'file-payload',
      color: 'light-blue-700',
    },
    fileExtensions: ['tsx'],
  },
  {
    name: 'payload-jsx',
    light: true,
    clone: {
      base: 'file-payload',
      color: 'amber-500',
      lightColor: 'amber-800',
    },
    fileExtensions: ['jsx'],
  },
  p('component', ['comp', 'cmp', 'components', 'c'], 'lime-600', 'lime-800'),
  p(
    'context',
    ['ctx', 'contexts', 'provider', 'store', 'stores'],
    'teal-400',
    'teal-600'
  ),
  p('hook', ['hooks', 'hk'], 'deep-purple-A100', 'deep-purple-400'),
  p('layout', ['template', 'layouts', 'templates', 'tmpl', 'lyt'], 'brown-300'),
  p('page', ['pages', 'pg', 'pag'], 'deep-orange-400'),
  p('global', ['globals', 'glb'], 'blue-gray-500', 'blue-gray-700'),
  p('field', ['fields', 'fld'], 'orange-400'),
  p('block', ['blocks', 'blk'], 'red-400'),
  p('collection', ['collections', 'clct'], 'indigo-400'),
] as LucodearFileIcon[]);
// #endregion

// #region exports
export const files: LucodearFileIcon[] = [...common, ...payloadPack];
// #endregion
