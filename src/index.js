console.log('hello from index.js');
//import express
const express = require('express');
// declare a port
const PORT = process.env.PORT || 4000; //in react, defaults to port 3000. anything apart from 3000.
//process.env will look into the process object in node.js, within process object, env field. will contain ALL environment variables exposed to node.js during runtime. What heroku will do, assign its own port and put it as environment variable in env. if doesnt exist, defaults to 4000.
//create an app instance using express
const app = express();

const foo = (req, res, next) => {
  //mutate req obj add new key in req obj set value as bar
  req.foo = 'bar';
  //go next middleware in mw chain, call next() fn, if not call, req will get stuck forever in this mw fn. defualt timeout 30 secs. something is wrong etc.
  next();
  //can have 100s of mws. can have many mws depending on application.
  //foo is refactored to own external function.
};

//what a middleware essentially is, if we have controller functions where main application logic resides, request will come in, will always go through a middlware eventually reach controller and send back response. reason we using json mw, make POST request, we will send a json payload, server dont understand json payload, so we use extra code take payload information from that post request and add to request object. particularly, in request object create key called body and set value that you send as an object. eventually when request go to next mw, reaches to controller, can access that req.body with my payload. if you dont have json mw, controller will not be able to access the json payload in your request. json mw intercepting the request, mutate it, adding something, later on in mw chain, can interact with that payload.
//learn about authentication, every req comes in, make sure req contains authentication token, such that if there, redirect req to more private areas in your server rather than public areas of your server code. have mw orchestrate that.

//req/res question - under the hood, node js returns a fn. that fn is built to take req and rsp obj. what express is doing, creating wrapper on the http module of node js. its abstraction layer just like fetch function. layer built on xhr, built in library to make requests.

//url encoded also does something similar. if have url that does ?city= New York, space between new and york have special character in the space as %20 eg ?city=New%20York. urlencoded mw intercepts this req and decodes it as 'new york' and present info in obj. nicely packaged to be used by the controllers.

//standard convention to make sure json and urlencoded compatible.

//add middlewares
app.use(express.json()); //how to add mw, we take app instance we just built. use fn called use, instruct app to use json mw is built in express package. express.json(). fn call will return a middleware for you and connect to app as first mw in chain of mws.
app.use(express.urlencoded({ extended: true }));
//pass in option object with extended = true. both standard middlewares in any express project. can add your own custom middleware. its just a function.
app.use(foo);
//listen for requests/start server
//34:22
