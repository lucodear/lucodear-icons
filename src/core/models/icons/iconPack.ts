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

  // #region 🍭 » lucodear
  Pest = 'pest',
  RustFerris = 'rust_ferris',
  RustFerrisMinimal = 'rust_ferris_minimal',
  CloudFlare = 'cloudflare',
  // #endregion
}

export type IconPackValue = `${IconPack}` | '';
