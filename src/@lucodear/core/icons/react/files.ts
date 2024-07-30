import type { LucodearFileIcon } from '../../models';
import { lucodear } from '../utils';

const react = (
  icon: string,
  names: string[],
  light: boolean = false,
  folderExtensionConfig = true
) => ({
  // create a new object with the icon name and the file names. for each file name we need to add the extensions .ts and .js
  name: `react-${icon}`,
  fileNames: [icon, ...names].flatMap((name) => [`${name}.tsx`, `${name}.jsx`]),
  fileExtensions: [icon, ...names].flatMap((name) =>
    [`${name}.tsx`, `${name}.jsx`].concat(
      folderExtensionConfig ? [`${name}/tsx`, `${name}/jsx`] : []
    )
  ),
  light,
});

export const files = lucodear('react', [
  {
    name: 'react-ts',
    fileExtensions: ['tsx'],
  },
  {
    name: 'react-js',
    fileExtensions: ['jsx'],
    light: true,
  },
  react('app', ['main'], false, false),
  react('component', ['comp', 'cmp', 'components', 'c'], true),
  react('context', ['ctx', 'contexts', 'store', 'stores'], true),
  react('hook', ['hooks', 'hk'], true),
  react('layout', ['template', 'layouts', 'templates', 'tmpl', 'lyt']),
  react('page', ['pages', 'section', 'sections', 'pg', 'pag']),
  react('section', ['sect', 'sections', 'sct']),
] satisfies LucodearFileIcon[]);
