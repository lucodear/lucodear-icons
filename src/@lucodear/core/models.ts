import type { DefaultIcon, FolderIcon, FolderTheme } from '../../core';
import type { FileIcon } from '../../core/models/icons/files/fileIcon';
import type { RequireAtLeastOne } from '../../core/types/requiredAtLeastOne';

export type LucodearFileIcon = RequireAtLeastOne<
  FileIcon & {
    looseFileIcon?: true;
    theme?: string;
  },
  'fileExtensions' | 'fileNames' | 'looseFileIcon'
>;

export interface LucodearFileIcons {
  defaultIcon?: DefaultIcon;
  icons: LucodearFileIcon[];
}

export type LucodearFolderIcon = RequireAtLeastOne<
  Omit<FolderIcon, 'folderNames'> & {
    theme?: string;
    looseFolderIcon?: true;
    /**
     * Define the folder names that should apply the icon.
     * E.g. ['src', 'source']
     */
    folderNames?: string[];
  },
  'looseFolderIcon' | 'folderNames'
>;

export interface LucodearFolderTheme extends Omit<FolderTheme, 'icons'> {
  icons: LucodearFolderIcon[];
}
