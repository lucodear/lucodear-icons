'use strict';

import {
  type ExtensionContext,
  window as codeWindow,
  env,
  workspace,
} from 'vscode';
import { initTranslations, logger } from '../../core';
import { disableLogObserver, observeLogs } from '../logging/logger';
import { detectConfigChanges } from '../tools/changeDetection';
import { registered } from '../tools/registered';

/**
 * This method is called when the extension is activated.
 * It initializes the core functionality of the extension.
 */
export const activate = async (context: ExtensionContext) => {
  try {
    observeLogs();

    await initTranslations(env.language);

    // Subscribe to the extension commands
    context.subscriptions.push(...registered);

    // Initially trigger the config change detection
    await detectConfigChanges(undefined, context);

    // Observe changes in the config
    context.subscriptions.push(
      workspace.onDidChangeConfiguration(
        async (event) => await detectConfigChanges(event, context)
      )
    );

    // #region 🍭 » lucode Observe if the window got focused to trigger config changes
    context.subscriptions.push(
      codeWindow.onDidChangeWindowState(async (state) => {
        if (state.focused) {
          await detectConfigChanges(undefined, context);
        }
      })
    );
    // #endregion

    logger.info('Extension activated!');
  } catch (error) {
    logger.error(error);
  }
};

/** This method is called when the extension is deactivated */
export const deactivate = () => {
  disableLogObserver();
};
