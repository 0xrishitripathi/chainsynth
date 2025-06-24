import { generateDefault } from '@polkadot/typegen/generate/default';
import { generateBundle } from '@polkadot/typegen/generate/bundle';
import { WsProvider } from '@polkadot/api';

(async () => {
  const ws = process.env.CHAIN_WS || 'ws://localhost:9944';
  const outDir = 'packages/types';
  const bundleDest = 'packages/types-bundle.js';

  const provider = new WsProvider(ws);

  await generateDefault({ provider, output: outDir, pkg: '@chainsynth/types' });
  await generateBundle({ provider, output: bundleDest, package: '@chainsynth/types-bundle' });

  // eslint-disable-next-line no-console
  console.log('✨ Types and bundle generated');
  process.exit(0);
})();

