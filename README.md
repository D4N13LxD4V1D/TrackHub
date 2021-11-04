# TrackHub Mobile App

This repository implements a React Native _client application_ for Apple/Google's [Exposure
Notification](https://www.apple.com/covid19/contacttracing) framework, informed by the [guidance provided by Canada's Privacy Commissioners](https://priv.gc.ca/en/opc-news/speeches/2020/s-d_20200507/). For more information on how this all works, read through the [TrackHub Rationale](https://github.com/D4N13LxD4V1D/TrackHub/tree/main/rationale).

- [Overview](#overview)
- [User experience](#user-experience)
- [Local development](#local-development)
- [Customization](#customization)
- [Localization](#localization)

## Overview

This app is built using React Native and designed to work well with patterns on Android devices. It works alongside the server to be derived from [COVID Shield Diagnosis Server](https://github.com/CovidShield/backend) (yet to be implemented).

## User Experience

### Aurora Design System

TrackHub follows design and content guidelines from the [Aurora Design System](https://design.gccollab.ca/) published by the Government of Canada's Digital Enablement Service.

#### Typeface

The Aurora Design System recommends Nunito for the app's main typeface. You can [download this font from Google Fonts](https://fonts.google.com/specimen/Nunito) or access it directly using the Google Fonts integration in Figma.

### Design References

- Our [wired Figma prototype](https://www.figma.com/proto/b76OYDhkTKJCaqDfVQybQY/Open-Source-COVID-Shield?node-id=324%3A3825&viewport=387%2C570%2C0.125&scaling=scale-down) reference
- Our [design working files on Figma](https://www.figma.com/file/b76OYDhkTKJCaqDfVQybQY/Open-Source-COVID-Shield?node-id=1%3A18) reference
- Our [illustration and animation assets](design/)

### Content

Our [glossary of terms](https://github.com/D4N13LxD4V1D/Trackhub/blob/main/rationale/GLOSSARY.md).

## Local development

### Prerequisites

Follow the steps outlined in [React Native Development Environment Setup](https://reactnative.dev/docs/environment-setup) to make sure you have the proper tools installed.

#### Node

- [Node 12 LTS](https://nodejs.org/en/download/)

#### Android

- Android device with the ability to run the latest version of Google Play Services or Google Play Services Beta. Sign up for beta program here https://developers.google.com/android/guides/beta-program.
- You also need a whitelisted APPLICATION_ID that will be used to publish to Google Play. You could use APPLICATION_ID from [Google Sample App](https://github.com/google/exposure-notifications-android) for testing purposes `"com.google.android.apps.exposurenotification"`. Go to [Environment config](https://github.com/D4N13LxD4V1D/TrackHub#3-environment-config) to see how to change APPLICATION_ID.

#### 1. Check out the repository

```bash
git clone https://github.com/D4N13LxD4V1D/Trackhub.git
```

#### 2. Install dependencies

```bash
yarn install
```

#### 3. Environment config

Check `.env` and adjust configuration if necessary. See [react-native-config](https://www.npmjs.com/package/react-native-config#different-environments) for more information.

Ex:

```bash
ENVFILE=.env.production yarn run-android
```

#### 4. Start app in development mode

You can now launch the app using the following commands for both iOS and Android.

```bash
yarn run-android
```

You can also build the app with native development tool:

- For Android, using Android Studio by opening `android` folder.

### Development mode

When the app is running development mode, you can tap on the TrackHub logo at the top of the app to open the Test menu. This menu enables you to:

- Put the app into test mode to bypass the Exposure Notification API check
- Change the system status
- Change the exposure status
- Send a sample notification
- Reset the app to onboarding state

Note that: Test menu is enabled if the environment config file (`.env*`) has `TEST_MODE=true`. To disable test mode UI on production build, simply set it to false in the environment config file `TEST_MODE=false`.

## Customization

You can customize the look and feel of the app largely by editing values found in the [Theme File](https://github.com/D4N13LxD4V1D/Trackhub/blob/main/src/shared/theme/default.ts)

## Localization

The TrackHub app is available in Filipino and English. Fully localized content can be modified by editing translations files found in the [translations directory](https://github.com/D4N13LxD4V1D/TrackHub/tree/master/src/locale/translations). More translations can be added by using the same mechanism as French and English.

After modifying the content you must run the `generate-translations` command in order for the app to reflect your changes.

```bash
yarn generate-translations
```

### Add new translation

1. Create a new i18n file in [src/locale/translations/](./src/locale/translations/).
2. Add the new option `opt` in [translations.js](./scripts/translations.js).
3. Regenerate the translations `yarn generate-translations`.
4. Add the new option in [src/components/LanguageToggle.tsx](./src/components/LanguageToggle.tsx).
5. Add the new option in [src/screens/language/Language.tsx](./src/screens/language/Language.tsx).

## Test plan

See [Test Plan](./TEST_PLAN.md)

## Who built TrackHub?

We are senior high school students who want to help to slow the spread of COVID-19 by offering our
skills and experience developing scalable, easy to use applications.

## Troubleshooting

### [Android] Problem with debug.keystore during run Android version

Logs

```bash
FAILURE: Build failed with an exception.

* What went wrong:
Execution failed for task ':app:packageDebug'.
> A failure occurred while executing com.android.build.gradle.internal.tasks.Workers$ActionFacade
   > com.android.ide.common.signing.KeytoolException: Failed to read key AndroidDebugKey from store "/Users/YOUR_USER/.android/debug.keystore": keystore password was incorrect
```

Generate a new `debug.keystore`:

```bash
cd android/app
keytool -genkey -v -keystore debug.keystore -storepass android -alias androiddebugkey -keypass android -keyalg RSA -keysize 2048 -validity 10000
```

Copy your debug.keystore to `~/.android/debug.keystore`:

```bash
cd android/app
cp debug.keystore ~/.android/debug.keystore
```

Now you can run `yarn run-android` in your root folder.
