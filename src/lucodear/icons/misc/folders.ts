import type { LucodearFolderIcon } from '../../model';
import { lucodear } from '../utils';

export const folders = lucodear('misc', [
  {
    name: 'aggregate',
    folderNames: ['aggregate', 'aggregates', 'aggs', 'agg'],
  },
  {
    name: 'azure',
    folderNames: ['azure', 'az'],
  },
  {
    name: 'bin',
    folderNames: ['bin', 'binary', 'binaries', 'bins'],
  },
  {
    name: 'calendar',
    folderNames: [
      'calendar',
      'calendars',
      'agenda',
      'schedule',
      'schedules',
      'sched',
    ],
  },
  {
    name: 'binance',
    looseFolderIcon: true,
  },
  {
    name: 'cocos-cap',
    looseFolderIcon: true,
  },
  {
    name: 'controller',
    folderNames: ['controller', 'controllers', 'ctrl'],
  },
  {
    name: 'conversion',
    folderNames: ['conversion', 'convert', 'conversions'],
  },
  {
    name: 'decorator',
    folderNames: ['decorator', 'decorators'],
  },
  {
    name: 'di',
    folderNames: [
      'di',
      'ioc',
      'injection',
      'injector',
      'injections',
      'container',
    ],
  },
  {
    name: 'dto',
    folderNames: ['dto', 'dtos'],
  },
  {
    name: 'exceptions',
    folderNames: [
      'exceptions',
      'exception',
      'errors',
      'error',
      'faults',
      'fault',
      'failures',
      'failure',
    ],
  },
  {
    name: 'factory',
    folderNames: ['factory', 'factories'],
  },
  {
    name: 'gh-issue-template',
    folderNames: ['.github/ISSUE_TEMPLATE'],
  },
  {
    name: 'grpc',
    folderNames: [
      'grpc',
      'rpc',
      'gRPC',
      'gRPCs',
      'grpc-api',
      'grpc-server',
      'grpc_api',
      'grpc_server',
    ],
  },
  {
    name: 'handshake',
    folderNames: [
      'handshake',
      'handshakes',
      'handshaking',
      'p2p',
      'peer-to-peer',
    ],
  },
  {
    name: 'help',
    folderNames: ['help', 'question', 'questions', 'faq', 'faqs'],
  },
  {
    name: 'idea',
    folderNames: ['idea', 'ideas', '.idea', '.ideas', '💡'],
  },
  {
    name: 'metadata',
    folderNames: ['metadata', 'meta', 'data', 'tags', 'tag'],
  },
  {
    name: 'middleware',
    folderNames: ['middleware', 'middlewares', 'mdw'],
  },
  {
    name: 'migration',
    folderNames: ['migration', 'migrations', 'mig'],
  },
  {
    name: 'model',
    folderNames: ['model', 'models', 'entities', 'entity'],
  },
  {
    name: 'module',
    folderNames: ['module', 'modules', 'mod', 'domain', 'domains'],
  },
  {
    name: 'oracle',
    folderNames: ['oracle', 'osb', 'soa'],
  },
  {
    name: 'orm',
    folderNames: ['orm', 'orms'],
  },
  {
    name: 'provider',
    folderNames: [
      'provider',
      'providers',
      'infra',
      'infrastructure',
      'infrastructures',
    ],
  },
  {
    name: 'repo',
    folderNames: ['repo', 'repos', 'repository', 'repositories', 'branches'],
  },
  {
    name: 'result',
    folderNames: ['result', 'results', 'res'],
  },
  {
    name: 'runtime',
    folderNames: ['runtime', 'runtimes', 'rt', 'realtime', 'real-time'],
  },
  {
    name: 'service',
    folderNames: ['service', 'services', 'srv', 'svc'],
  },
  {
    name: 'socket',
    folderNames: ['socket', 'sockets', 'gateway', 'gateways'],
  },
  {
    name: 'stream',
    folderNames: [
      'stream',
      'streams',
      'streaming',
      'event-stream',
      'event-streams',
      'broadcast',
      'broadcasts',
      'multicast',
    ],
  },
  {
    name: 'subcommand',
    folderNames: [
      'subcommand',
      'subcommands',
      'subcmd',
      'subcmds',
      'sub-cmd',
      'sub-cmds',
    ],
    light: true,
  },
  {
    name: 'subprogram',
    folderNames: [
      'subprogram',
      'subprograms',
      'subprog',
      'subprogs',
      'sub-prog',
      'sub-progs',
    ],
  },
  {
    name: 'tasks',
    folderNames: ['tasks', 'task', 'todo', 'todos'],
  },
  {
    name: 'thread',
    folderNames: [
      'thread',
      'threads',
      'threading',
      'concurrency',
      'parallel',
      'multithreading',
      'multithread',
      'threadpool',
      'thread-pool',
    ],
  },
  {
    name: 'ticker',
    looseFolderIcon: true,
  },
  {
    name: 'transformation',
    folderNames: [
      'transformations',
      'transformation',
      'transformer',
      'transformers',
      'trx',
      'convert',
      'conversion',
    ],
  },
  {
    name: 'tui',
    folderNames: ['tui', 'terminal-ui', 'terminalui', 'terminal-ui'],
  },
  {
    name: 'version',
    folderNames: ['version', 'versions', 'vx'],
  },
  {
    name: 'workflow',
    folderNames: ['workflow', 'workflows', 'flow', 'flows'],
  },
  {
    name: 'xrate',
    looseFolderIcon: true,
  },
  {
    name: 'yahoo',
    looseFolderIcon: true,
  },
] satisfies LucodearFolderIcon[]);
