import { existsSync } from 'node:fs';
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname } from 'node:path';
import { logger } from '../logging/logger';

/**
 * Write content to a file.
 *
 * @param filePath File path to write to
 * @param data Content to write to the file
 */
export const writeToFile = async (
  filePath: string,
  data: string,
  encoding?: BufferEncoding
) => {
  if (!filePath || !data || data.trim().length === 0) {
    logger.error('Invalid file path or data to write! File path: ' + filePath);
    return;
  }

  // #region 🍭 » lucode create intermediate directories if they don't exist
  const dir = dirname(filePath);
  if (!existsSync(dir) && dir.includes('icons-lc')) {
    await mkdir(dir, { recursive: true });
  }
  // #endregion

  logger.debug('Writing to file: ' + filePath);
  await writeFile(filePath, data, encoding);
};
