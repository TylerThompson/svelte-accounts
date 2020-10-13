Package.describe({
  name: 'tylerthompson:svelte-accounts',
  version: '0.0.5',
  summary: 'The simplicity of Blaze drop in ui, but in Svelte with the ability to customize further',
  git: 'https://github.com/TylerThompson/svelte-accounts',
  documentation: 'README.md'
});

Package.onUse((api) => {
  api.versionsFrom('1.11.1');
  api.use('ecmascript');
  api.use("svelte:compiler@3.16.4_1");
  api.use("accounts-base@1.6.0");
  api.use("accounts-password@1.6.0");
  api.mainModule('svelte-accounts.js');
});

Package.onTest((api) => {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('tylerthompson:svelte-accounts');
  api.mainModule('svelte-accounts-tests.js');
});
