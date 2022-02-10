# Changelog

## 2.0.3 - 2022-02-10

Prevent errors on resume if splashscreen is not defined.

## 2.0.2 - 2020-10-19
### New feature
You can control from your app code when your app should update.

### Clean up
We removed options that we don't believe are necessary, read more details [here](./README.md)

## 1.6.0 - 2020-06-12
### Config using Meteor.settings
- Config now is set using `Meteor.settings.public.packages.reloader` object

## past (before quave fork)
## [1.5.0] - 2019-02-08
### Config using Meteor.settings
- Config now is set using `Meteor.settings.public.reloader` object
- Added more logs if `Meteor.settings.public.reloader.debug` is true

## [1.4.0] - 2018-10-03
### Independency from Blaze
- Removed Blaze dependency
- Removed underscore dependency

## [1.3.0] - 2017-11-13
### Updated

- `cordova-plugin-splashscreen` from `4.0.0` to `4.1.0`

## [1.2.2] - 2016-10-05
### Fixed

- Fix reloading when url contains a hash ([#10](https://github.com/jamielob/reloader/issues/10))

## [1.2.0] - 2016-04-26
### Added
- `launchScreenDelay` option
- tests
