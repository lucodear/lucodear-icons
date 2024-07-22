import { IconPack } from '../../../../core';
import type { LucodearFileIcon } from '../../models';
import { lucodear } from '../utils';

const rustDefault = lucodear('rust', [
  {
    name: 'rust',
    fileExtensions: ['rs'],
  },
  {
    name: 'rust-build',
    fileNames: ['build.rs'],
    light: true,
  },
  {
    name: 'rust-cargo',
    fileNames: ['Cargo.toml', 'cargo.toml'],
    light: true,
  },
  {
    name: 'rust-format',
    fileNames: ['rustfmt.toml'],
  },
  {
    name: 'rust-lib',
    fileNames: ['lib.rs'],
    light: true,
  },
  {
    name: 'rust-main',
    fileNames: ['main.rs'],
    light: true,
  },
  {
    name: 'rust-mod',
    fileNames: ['mod.rs'],
    light: true,
  },
  {
    name: 'rust-release',
    fileNames: ['release.toml', 'Release.toml'],
  },
  {
    name: 'rust-test',
    fileExtensions: ['test/rs', 'tests/rs'],
    light: true,
  },
] satisfies LucodearFileIcon[]);

/** Uses Ferris the crab for special rust files (main.rs, lib.rs, mod.rs) */
const rustFerris = lucodear('rust', IconPack.RustFerris, [
  {
    name: 'rust-ferris',
    fileExtensions: ['rs'],
  },
  {
    name: 'rust-ferris-main',
    fileNames: ['main.rs'],
  },
  {
    name: 'rust-ferris-lib',
    fileNames: ['lib.rs'],
    light: true,
  },
  {
    name: 'rust-ferris-mod',
    fileNames: ['mod.rs'],
    light: true,
  },
] satisfies LucodearFileIcon[]);

/** Uses Ferris the crab just for main and lib (`main.rs` and `lib.rs`) files. */
const rustFerrisMinimal = lucodear('rust', IconPack.RustFerrisMinimal, [
  {
    name: 'rust-ferris-main',
    fileNames: ['main.rs'],
  },
  {
    name: 'rust-ferris-lib',
    fileNames: ['lib.rs'],
    light: true,
  },
  {
    name: 'rust-ferris-mod',
    fileNames: ['mod.rs'],
    light: true,
  },
] satisfies LucodearFileIcon[]);

export const files: LucodearFileIcon[] = [
  ...rustDefault,
  ...rustFerrisMinimal,
  ...rustFerris,
];
