Package.describe({
  name: 'quave:reloader',
  version: '2.0.3',
  summary: 'More control over hot code push reloading',
  git: 'https://github.com/quavedev/reloader/',
});

Cordova.depends({
  'cordova-plugin-splashscreen': '5.0.3',
});

Package.onUse(function(api) {
  api.versionsFrom('1.10.2');

  api.use(
    ['ecmascript', 'reload', 'reactive-var', 'tracker', 'launch-screen'],
    'client'
  );

  api.use('quave:settings@1.0.0');

  api.mainModule('reloader-client.js', 'client');
  api.mainModule('reloader-cordova.js', 'web.cordova');
});
