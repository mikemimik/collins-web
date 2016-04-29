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

    // TODO: pass config options to express()
    this.Runtime['client'] = Http.createServer();

    next(null);
  }

  static initCogs (next) {

    // TODO: config cogs which will be middleware for express
    next(null);
  }

  static initListeners (next) {
    let listeners = Listeners.getMethods();
    async.each(listeners, (listener, each_cb) => {

    });
    next(null);
  }
}

module.exports = Loader;
