'use strict';

var express = require('express');

var manager = require('../epm-manager');

var routes = {};

routes.query = require('./query.js');
routes.asset = require('./asset.js');
routes.metadata = require('./metadata.js');
routes.content = require('./content.js');

module.exports = function(){

  var app = express.Router();
  app.cacheContent = {};

  app.post('/query/:repository', routes.query);

  app.get('/asset/:repository/:uid/:type/:name', routes.asset);

  app.get('/metadata/:repository/:uid', routes.metadata);

  // /content/:repository/:uid
  // /files/:repository/:uid
  routes.content(app)

  return app;
};