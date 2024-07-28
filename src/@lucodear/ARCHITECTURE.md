<p align="center">
<img src="../../icons-lc/lucodear/file-lucode.svg" alt="@lucodear" width="100" height="100">
</p>

<h1 align="center"><code>@lucodear</code> additions</h1>

---

## What I added

Most of the main additions have already been merged into the [upstream repository](https://github.com/material-extensions/vscode-material-icon-theme) (icon cloning, pixel-perfect icons, etc); so, this repo now only contains the most opinionated icons that I've created for my own use.

## Architecture

### How does this extension plugs into the main one?

This extension adds some icon "packs" that are independent from the main extension. They are located in the `/icons-lc` folder and organized in different subfolders (by language, framework, app, or whatever makes sense).

Currently:

```
icons-lc
  ├── ai         # contains icons related to Artificial Intelligence
  ├── lucodear   # contains icons related to lucodear projects
  ├── misc       # contains miscellaneous icons *
  ├── python     # contains icons related to Python and the lucodear's Pest framework
  ├── react      # contains icons related to React, different from the ones in the main extension
  ├── rust       # contains icons related to Rust, different from the ones in the main extension (including ferris packs)
  └── typescript # contains icons related to TypeScript, different from the ones in the main extension
```

\* The `misc` folder contains:
- icons that don't fit in any of the other categories
- replacements for icons from the main extension
- icons that are not in the main extension but could be in the future

#### Technical details

This extensions adds:

- a new generator called [`lucodearIconGenerator`](./core/generators/index.ts), that adds the icons from the `icons-lc` folder to the manifest.
- a new manifest generator: [`generateManifest`](core/generators/manifest.ts)

The `generateManifest` function is basically a copy of the main extension's `generateManifest` function, but after all the other generators are run, it runs the `lucodearIconGenerator` to add the icons from the `icons-lc` folder.

So, all changes left in the main extensions are basically replacing the original `generateManifest` function with the new one. There should be no other changes left.
