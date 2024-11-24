import { writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { green, red } from '../../../scripts/helpers/painter';
import { createScreenshot } from '../../../scripts/helpers/screenshots';
import { lucodearFileIcons, lucodearFolderIcons } from '../../core/icons';
import {
  type IconDefinition,
  type Theme,
  getFiles,
  getFolders,
  getThemes,
} from './icon';

export const htmlDoctype = '<!DOCTYPE html>';
const cssFilePath = 'style.css';
export const styling = `<link rel="stylesheet" href="${cssFilePath}">`;

const folderIcons = getFolders([lucodearFolderIcons]);
const filesIcons = getFiles(lucodearFileIcons.icons);
const themes = getThemes(folderIcons, filesIcons);

const lucodearPreview = (size = 5, path = './../../../../icons-lc') => {
  // get argument --dev
  const dev = process.argv.slice(2).includes('--dev');
  // get argument --size 16 (get the number after --size)
  const iconSize =
    process.argv.includes('--size') &&
    !isNaN(parseInt(process.argv[process.argv.indexOf('--size') + 1]))
      ? parseInt(process.argv[process.argv.indexOf('--size') + 1])
      : 32;

  let content = '';
  const fileName = `lucodear-icons`;
  const filePath = join(__dirname, fileName + '.html');

  for (const theme of themes) {
    const themeFolderIcons = folderIcons.filter((i) => i.theme === theme.name);
    const themeFileIcons = filesIcons.filter((i) => i.theme === theme.name);
    const foldersSafeSize =
      themeFolderIcons.length >= size ? size : themeFolderIcons.length;
    const filesSafeSize =
      themeFileIcons.length >= size ? size : themeFileIcons.length;

    content += makeThemeSection(
      theme,
      foldersSafeSize,
      filesSafeSize,
      themeFolderIcons,
      themeFileIcons,
      path,
      iconSize
    );
  }

  content = `
  ${htmlDoctype}
  <html>
  <head>
  <link rel="stylesheet" href="./lucodear-style.css">
  </head>
  <body>
  <main>
  ${content}
  </main>
  </body>
  </html>
  `;

  // save preview
  saveScreenshot(fileName, filePath, content, dev);
};

const makeThemeSection = (
  theme: Theme,
  foldersSize: number,
  filesSize: number,
  folderIcons: IconDefinition[],
  fileIcons: IconDefinition[],
  iconsPath: string,
  iconSize: number
): string => {
  const filesMatrix = getIconDefinitionsMatrix(fileIcons, filesSize);
  const foldersMatrix = getIconDefinitionsMatrix(folderIcons, foldersSize);

  // write the html file with the icon table
  const filesTable = createPreviewTable(
    filesMatrix,
    filesSize,
    iconsPath,
    false,
    iconSize
  );
  const foldersTable = createPreviewTable(
    foldersMatrix,
    foldersSize,
    iconsPath,
    false,
    iconSize
  );

  return `
    <section>
      <h1>🍭 » ${theme.name}</h1>
      ${
        theme.hasFolders
          ? `<div class="icons-table"><span>folders</span>\n${foldersTable}</div>\n`
          : ''
      }
      ${
        theme.hasFiles
          ? `<div class="icons-table"><span>files</span>\n${filesTable}</div>`
          : ''
      }
    </section>
  `;
};

const saveScreenshot = async (
  fileName: string,
  filePath: string,
  content: string,
  dev: boolean = false
) => {
  writeFileSync(filePath, content);

  if (dev) {
    console.log(
      '> 🍭 lucodear-icons:',
      green(`html review available at ${filePath}`)
    );
    return;
  }

  // create the image
  createScreenshot(filePath, fileName)
    .then(() => {
      console.log(
        '> 🍭 lucodear-icons:',
        green(`Successfully created ${fileName} preview image!`)
      );
    })
    .catch(() => {
      throw Error(red(`Error while creating ${fileName} preview image`));
    });
};

export const createPreviewTable = (
  icons: IconDefinition[][],
  size: number,
  iconsPath: string,
  fullPage: boolean = true,
  iconSize: number = 30
) => {
  const table =
    (fullPage ? htmlDoctype : '') +
    (fullPage ? styling : '') +
    createHTMLTable(
      createHTMLTableHeadRow(size),
      createHTMLTableBodyRows(icons, iconsPath, iconSize)
    ) +
    (icons.length === 0 ? noIconsFound : '');
  return table;
};

const noIconsFound = `
  <div class="no-icons">
    Oops, no icons found!
  </div>
`;

const createHTMLTable = (headRow: string, bodyRows: string) => `
    <table>
        ${headRow}
        ${bodyRows}
    </table>
`;

const createHTMLTableBodyRows = (
  items: IconDefinition[][],
  iconsPath: string,
  size: number
) => {
  let rows = '';
  items.forEach((row) => {
    const columns = row
      .map((icon) => {
        const subpath = icon.theme ? `${icon.theme}/` : '';
        const sufix = icon.isClone ? '.clone' : '';

        return `
          <td class="icon">
              <img style="width: ${size.toFixed(
                0
              )}px" src="${iconsPath}/${subpath}${icon.name}${sufix}.svg" alt="${
                icon.label
              }">
          </td>
          <td class="iconName">${icon.label ?? icon.name}</td>
        `;
      })
      .join('');
    const tableRow = `
            <tr>
                ${columns}
            </tr>
        `;
    rows = rows + tableRow;
  });
  return rows;
};

/**
 * Trim the list of icons into the matrix
 * @param iconList List of icons
 * @param size Amount of columns
 * @param trimmableIcons List of icons that can possibly be trimmed
 */
const trimIconListToSize = (
  iconList: IconDefinition[],
  size: number,
  trimmableIcons: string[]
) => {
  if (size === 0) {
    return;
  }

  while (iconList.length % size !== 0) {
    iconList.splice(
      iconList.findIndex(
        (i) => i.name === trimmableIcons[iconList.length % size]
      ),
      1
    );
  }
};

export const getIconDefinitionsMatrix = (
  icons: IconDefinition[],
  size: number,
  excluded: string[] = [],
  sort: boolean = true,
  trim: boolean = false
): IconDefinition[][] => {
  const iconList = sort
    ? icons.sort((a, b) => (a.label ?? a.name).localeCompare(b.label ?? b.name))
    : icons;

  trim && trimIconListToSize(iconList, size, excluded);

  // list for the columns with the icons
  const matrix: IconDefinition[][] = [];

  // calculate the amount of icons per column
  const itemsPerColumn = Math.floor(iconList.length / size);
  const rest = iconList.length % size;
  const restItems = iconList.slice(-rest);

  // create the columns with the icons
  let counter = 0;
  for (let c = 0; c < itemsPerColumn; c++) {
    matrix[c] = [];
  }
  for (let s = 0; s < size; s++) {
    for (let i = 0; i < itemsPerColumn; i++) {
      matrix[i][s] = iconList[counter];
      counter++;
    }
  }

  // add another row with the rest of the icons
  if (rest > 0) {
    matrix.push(restItems);
  }

  return matrix;
};

const createHTMLTableHeadRow = (amount: number) => {
  const pair = `
        <th class="icon">Icon</th>
        <th class="iconName">Name</th>
    `;
  const columns = [...Array(amount > 0 ? amount : 5)].map(() => pair).join('');
  return `
        <tr>
            ${columns}
        </tr>
    `;
};

lucodearPreview();
