# node-rest-api

This project was built with node Js. To learn more, click here: https://nodejs.org/en/about/

## Instructions
After cloning into repo, cd to project root directory and create a .env file. This file requires a TURBO_APP_ID and SESSION_SECRET keys:

```
TURBO_ENV=dev
SESSION_SECRET=YOUR_SESSION_SECRET
TURBO_APP_ID=123abc
```

## Initialize the application with a package.json file

   Go to the root folder of your application and type `npm init` to initialize your app with a package.json file.

## Install dependencies

   We will need express, mongoose and body-parser modules in our application.
   Let’s install `npm install express body-parser mongoose --save`

Then run npm install from the root directory:

```
$ npm install
```

Then run devserver from project root directory:

```
$ npm start
```

To build for production, run build:

```
$ npm run build
```

