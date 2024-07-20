import { join } from 'node:path';

export const resolvePath = (path: string): string => {
  // #region 🍭 » lucode
  if (__dirname.includes('@lucodear')) {
    return join(__dirname, '..', '..', '..', path);
  }
  // #endregion

  return join(__dirname, '..', '..', path);
};
