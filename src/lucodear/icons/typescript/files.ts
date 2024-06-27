import type { LucodearFileIcon } from '../../model';
import { lucodear } from '../utils';

/** name + extensions */
const namext = (names: string[]) => ({
  fileNames: names,
  fileExtensions: names,
});

export const files = lucodear('typescript', [
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
] as LucodearFileIcon[]);
