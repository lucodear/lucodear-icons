import { IconPack } from '../../../../core';
import type { LucodearFileIcon } from '../../models';
import { lucodear } from '../utils';

/** name + extensions */
const namext = (names: string[]) => ({
  fileNames: names,
  fileExtensions: names,
});

/** Defines the icons that are only available by default. */
export const typescript = lucodear('node', [
  {
    name: 'ts-abstract',
    ...namext(['abstract.ts', 'abs.ts', 'abstracts.ts']),
  },
  {
    name: 'ts-app',
    ...namext(['app.ts', 'apps.ts', 'application.ts', 'applications.ts']),
  },
  {
    name: 'ts-common',
    ...namext(['common.ts', 'shared.ts', 'commons.ts']),
  },
  {
    name: 'ts-constants',
    ...namext(['constants.ts', 'const.ts', 'constant.ts']),
  },
  {
    name: 'ts-dto',
    ...namext(['dto.ts', 'dtos.ts']),
  },
  {
    name: 'ts-factory',
    ...namext(['factory.ts', 'fact.ts']),
  },
  {
    name: 'ts-index',
    fileNames: ['index.ts'],
  },
  {
    name: 'ts-interface',
    ...namext(['interface.ts', 'interfaces.ts']),
  },
  {
    name: 'ts-main',
    ...namext(['main.ts']),
  },
  {
    name: 'ts-model',
    ...namext(['model.ts', 'models.ts', 'entity.ts', 'entities.ts']),
  },
  {
    name: 'ts-service',
    ...namext([
      'service.ts',
      'services.ts',
      'provider.ts',
      'providers.ts',
      'svc.ts',
      'svcs.ts',
    ]),
  },
  {
    name: 'ts-types',
    ...namext(['types.ts', 'type.ts']),
  },
  {
    name: 'ts-utils',
    light: true,
    ...namext(['util.ts', 'utils.ts', 'helper.ts', 'helpers.ts']),
  },
] satisfies LucodearFileIcon[]);

/** Defines the icons that are only available if the `IconPack.CloudFlare` is enabled. */
export const cloudflare = lucodear('node', IconPack.CloudFlare, [
  {
    name: 'ts-cloudflare-function',
    fileExtensions: ['api/ts', 'functions/ts'],
  },
  {
    name: 'js-cloudflare-function',
    fileExtensions: ['api/js', 'functions/js'],
  },
] satisfies LucodearFileIcon[]);

/** Defines all the file icons from the node lucodear pack */
export const files: LucodearFileIcon[] = [...typescript, ...cloudflare];
