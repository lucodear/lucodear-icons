import type { LucodearFolderIcon } from '../../models';
import { lucodear } from '../utils';

const format = (...x: string[]) => x.flatMap((x) => [x, `(${x})`]);
const k = (icon: string, names: string[]) => ({
  name: `${icon}`,
  folderNames: format(...names),
});

export const common = lucodear('keystatic', [
  k('keystatic', ['keystatic']),
] as LucodearFolderIcon[]);

export const folders: LucodearFolderIcon[] = [...common];
