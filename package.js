Package.describe({
  name: 'quave:reloader',
  version: '2.1.0',
  summary: 'More control over hot code push reloading',
  git: 'https://github.com/quavedev/reloader/',
});

Package.onUse(function(api) {
  api.versionsFrom('2.16');

  api.use(
    ['ecmascript', 'reload', 'reactive-var', 'tracker', 'launch-screen'],
    'client'
  );

  api.use('quave:settings@1.0.0');

  api.mainModule('reloader-client.js', 'client');
  api.mainModule('reloader-cordova.js', 'web.cordova');
});
