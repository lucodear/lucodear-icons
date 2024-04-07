import { RequireAtLeastOne } from '../helpers/types';
import {
  DefaultIcon,
  BasicFileIcon,
  FolderIcon,
  FolderTheme,
  IconAssociations,
  IconJsonOptions,
} from '../models';

export interface LucodearOptions {
  enable?: boolean;
  ignoreLookupPaths?: string[];
  files?: {
    regexAssociations?: IconAssociations;
  };
  folders?: {
    regexAssociations?: IconAssociations;
  };
}

export interface ExtendedOptions extends IconJsonOptions {
  lucodear: LucodearOptions;
}

export type LucodearFileIcon = RequireAtLeastOne<
  BasicFileIcon & {
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
