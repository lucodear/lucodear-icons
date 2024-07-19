/**
 * Defines icon packs that can be toggled.
 */
export enum IconPack {
  Angular = 'angular',
  Nest = 'nest',
  Ngrx = 'angular_ngrx',
  React = 'react',
  Redux = 'react_redux',
  Qwik = 'qwik',
  Vue = 'vue',
  Vuex = 'vue_vuex',

  // 🍭 » lucode
  Pest = 'pest',
  RustFerris = 'rust_ferris',
  RustFerrisMinimal = 'rust_ferris_minimal',
  RustFerrisFull = 'rust_ferris_full',
}

export function parseIconPack(value?: string) {
  if (!value) {
    return;
  }

  for (const key in IconPack) {
    const val = IconPack[key as keyof typeof IconPack];

    if (val === value) {
      return val;
    }
  }
}

export type IconPackValue = `${IconPack}` | '';
