# node-rest-api

This project was built with node Js. To learn more, click here: https://nodejs.org/en/about/

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

## Instructions Related to Project
When you start the calling api. all api is working fine `/apiname` but those api call with `/api/apiname` must be set all below point in header.

```
Authorization = "admin"
Authentication = "zyxabc123"
Content-Type = "application/json"
```

