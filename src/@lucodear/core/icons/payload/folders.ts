import { IconPack } from '../../../../core';
import type { LucodearFolderIcon } from '../../models';
import { lucodear } from '../utils';

const format = (...x: string[]) => x.flatMap((x) => [x, `(${x})`]);
const p = (icon: string, names: string[]) => ({
  name: `${icon}`,
  folderNames: format(...names),
});

export const common = lucodear('payload', [
  p('payload', ['payload']),
] as LucodearFolderIcon[]);

export const payloadPack = lucodear(
  'payload',
  [IconPack.Payload, IconPack.Keystatic],
  [
    p('payload-block', ['block', 'blocks']),
    p('payload-collection', ['collection', 'collections']),
    p('payload-field', ['field', 'fields']),
    p('payload-global', ['global', 'globals']),
  ] as LucodearFolderIcon[]
);

export const folders: LucodearFolderIcon[] = [...common, ...payloadPack];
