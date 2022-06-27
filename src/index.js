console.log('hello from index.js');
//import express
const express = require('express');
const mysql2 = require('mysql2/promise');
const routes = require('./routes');
const dbMiddleware = require('./middleware/db');
const init = async () => {
  try {
    // declare a port
    const PORT = process.env.PORT || 4000; //in react, defaults to port 3000. anything apart from 3000.
    //process.env will look into the process object in node.js, within process object, env field. will contain ALL environment variables exposed to node.js during runtime. What heroku will do, assign its own port and put it as environment variable in env. if doesnt exist, defaults to 4000.
    const dbConfig = {
      host: '127.0.0.1',
      user: 'root',
      password: '',
      database: 'weather_journal_db',
    };
    //connect to db before create app instance. import mysql
    const db = await mysql2.createConnection(dbConfig);
    //use promise version of mysql2. instead of having to chain .then methods, can use async/await

    //create an app instance using express
    const app = express();

    const foo = (req, res, next) => {
      //mutate req obj add new key in req obj set value as bar
      // req.foo = 'bar';
      //go next middleware in mw chain, call next() fn, if not call, req will get stuck forever in this mw fn. defualt timeout 30 secs. something is wrong etc.

      // req.token = 'bar'; //auth token example. mw powerful to break down and decouple logic.

      next();
      //can have 100s of mws. can have many mws depending on application.
      //foo is refactored to own external function.
    };

    //what a middleware essentially is, if we have controller functions where main application logic resides, request will come in, will always go through a middlware eventually reach controller and send back response. reason we using json mw, make POST request, we will send a json payload, server dont understand json payload, so we use extra code take payload information from that post request and add to request object. particularly, in request object create key called body and set value that you send as an object. eventually when request go to next mw, reaches to controller, can access that req.body with my payload. if you dont have json mw, controller will not be able to access the json payload in your request. json mw intercepting the request, mutate it, adding something, later on in mw chain, can interact with that payload.
    //learn about authentication, every req comes in, make sure req contains authentication token, such that if there, redirect req to more private areas in your server rather than public areas of your server code. have mw orchestrate that.

    //req/res question - under the hood, node js returns a fn. that fn is built to take req and rsp obj. what express is doing, creating wrapper on the http module of node js. its abstraction layer just like fetch function. layer built on xhr, built in library to make requests.

    //url encoded also does something similar. if have url that does ?city= New York, space between new and york have special character in the space as %20 eg ?city=New%20York. urlencoded mw intercepts this req and decodes it as 'new york' and present info in obj. nicely packaged to be used by the controllers.

    //standard convention to make sure project is json and urlencoded compatible.

    //add middlewares
    app.use(express.json()); //how to add mw, we take app instance we just built. use fn called use, instruct app to use json mw is built in express package. express.json(). fn call will return a middleware for you and connect to app as first mw in chain of mws.
    app.use(express.urlencoded({ extended: true }));
    //pass in option object with extended = true. both standard middlewares in any express project. can add your own custom middleware. its just a function.
    // app.use(foo);
    app.use(dbMiddleware(db));
    app.use(routes);

    //have registered route and controller function. see error cannot GET/ somethign wrong with routes, no route server that request. either forgotten to connect to router.

    //listen for requests/start server
    //34:22
    app.listen(PORT, () => {
      console.log('Server running on http://localhost:${PORT} 🚀');
    });
    //after establish successful connection to designated PORT, will call this function. open port on local machine, browser or client can access. can only make GET requests in url bar, want POST requests use postman.
    //server accepting requests, but no routes at this present. make req to this endpoint do something. register a GET endpoint for /. when req made this endpoint, execute this function. function registered to specific route, is called controller function. this controller function will be triggered when end point reached.

    //to ensure connection to db, every req comes in goes through json mw -> urlencoded mw -> routes mw. before that add db mw. then have routes then controllers last point. how request is gonna traverse through eventually go down to controllers. why we add db here? every req comes in, access db. if needs to connect to db, need connected instance to db. that connected instance will be added to req for every inc req. jsut liek req.body req.db = my db connection. reason we doing this because dont want controller for every single req and establish connection to database, then get data and return that data. not very performant. before app.listen, step 1 connect to db. then take db instance pass into fn, which will return a mw fn we will use. only connect db once, instead of every single req connect to database
    //then get resp. not good. have 1000 users 1000 connections to db. how higher order fns are used here.}
  } catch (err) {
    console.log(`[Error!]: Failed to start server ${err.message}`);
  }
};
init();
