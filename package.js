Package.describe({
  name: 'tylerthompson:svelte-accounts',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'The simplicity of Blaze drop in ui, but in Svelte with the ability to customize further',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
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
