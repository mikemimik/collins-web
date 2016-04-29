'use strict';

// INFO: service-gear specific modules
const Listeners = require('../libs/Listeners');
const CoreError = require('../libs/CoreError');

// INFO: common modules
const async = require('async');
const _ = require('lodash');

// INFO: npm-service-module
const Http = require('http');

class Loader {
  static initConfig (next) {
    this.logger.gear('CollinsWeb', 'Loader', 'initConfig', 'this:', this); // TESTING

    // TODO: validate config
    next(null);
  }

  static initGear (next) {

    // TODO: find another name for this key
    this.Runtime['server'] = Http.createServer();

    next(null);
  }

  static initCogs (next) {

    // INFO: cogs will be middleware to use
    // TODO: figure out how to implement this
    next(null);
  }

  static initListeners (next) {
    let listeners = Listeners.getMethods();
    async.each(listeners, (listener, each_cb) => {
      let check = this.Runtime['server'].on(listener, _.bind(Listeners[listener], this));
      if (check === this.Runtime['server']) {
        each_cb(null);
      } else {
        each_cb(true);
      }
    }, (err) => {
      if (err) {
        console.log('async.each failed while server.on() was called');
      }
      next(err);
    });
  }
}

module.exports = Loader;
