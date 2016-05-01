'use strict';

// INFO: service-gear specific modules
const Listeners = require('../libs/Listeners');

// INFO: common modules
const async = require('async');
const _ = require('lodash');

// INFO: npm-service-module
const Http = require('http');

class Loader {
  static initConfig (next) {

    // TODO: validate config
    this.logger.gear(this.constructor.name, 'Loader#initConfig');
    next(null);
  }

  static initGear (next) {
    this.logger.gear(this.constructor.name, 'Loader#initGear');

    // TODO: find another name for this key
    this.Runtime['server'] = Http.createServer();

    next(null);
  }

  static initCogs (next) {
    this.logger.gear(this.constructor.name, 'Loader#initCogs');

    // INFO: cogs will be middleware to use
    // TODO: figure out how to implement this
    next(null);
  }

  static initListeners (next) {
    this.logger.gear(this.constructor.name, 'Loader#initListeners');
    let listeners = Listeners.getMethods();
    async.each(listeners, (listener, each_cb) => {
      let check = this.Runtime['server'].on(listener, _.bind(Listeners[listener], this));
      if (check === this.Runtime['server']) {
        each_cb(null);
      } else {
        each_cb('async.each failed while server.on() was called');
      }
    }, (err) => {
      if (err) {
        this.logger.error(this.constructor.name, 'Loader#initListeners', err);
      }
      this.logger.gear(this.constructor.name, 'Loader#initListeners', 'complete');
      next(err);
    });
  }
}

module.exports = Loader;
