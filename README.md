# Calculadora

This project was made to run with Android.

## Installation
- #### Node installation on Windows
Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu
You can install nodejs and npm easily with apt install, just run the following commands.
``` bash
$ sudo apt install nodejs
$ sudo apt install npm
```

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).
If the installation was successful, you should be able to run the following commands.
``` bash
$ node --version
$ npm --version
```
If you need to update `npm`, you can make it using `npm`. After running the following command, just open again the command line and be happy.
``` bash
$ npm install npm -g
```

After the installation of Node.js, you might also need to install [expo](https://docs.expo.dev/get-started/installation/). For that, just run the following command.
``` bash
$ npm install --global expo-cli
```

## Running
- #### Clone this repository  
```bash
    $ git clone https://github.com/thiagofernandes101/projetoMobileCalculadora.git
```
- #### Install dependencies
```bash
    $ npm install
```
- #### Run Application
```bash
    $ expo start
```

## Run on Android
- #### Expo installation on Android cellphone
Go to the play store, download the [expo app](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en&gl=US) and scan the QR Code generated by the command "$ expo start".

- #### Expo installation on Android emulator
Install the apk on your android emulator and copy the link generated by the command "$ expo start". The copied link will automatically show on the expo app screen on the android emulator.