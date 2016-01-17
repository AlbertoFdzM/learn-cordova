# Learn Cordova!

Just a little try to cordova

## Requirements

- [NodeJS w/ npm](https://nodejs.org/)

## 1. Installation

Just run a npm installation command

```bash
npm install -g cordova
```

## 2. Creating a new Project

Now that you have cordova installed with npm you can create you project with the next command:

```bash
cordova create <project name>
```

## 3. Adding platform to the project

Noew lets define some platform to build our project, you can see the list of available platforms with `cordova platform`.

```bash
cordova platform add <platform name>
```

<small>_**Note:** You can add the platform **browser** that doen't need any SDK and start developing from there dealing later with third parties SDKs._</small>

## 4. First app run

Now it's time to try if we can run our app

```bash
cordova run <platform name>
```

<small>_**Note:** You'll need  yo have the platform SDK installed in you local machine due to run the app in the emulator_</small>
