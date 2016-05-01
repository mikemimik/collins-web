'use strict';

// INFO: service-gear specific modules
const Loader = require('../utils/Loader');

// INFO: common modules
const Emitter = require('events');
const async = require('async');

class CollinsWeb extends Emitter.EventEmitter {
  constructor (config) {
    super();
    this.config = config;
    this.logger = this.config.logger;
    delete this.config.logger;
    this.initialized = false;
    this.cogs = [];
    this.actions = [];
    this.Runtime = require('../utils/Runtime');
  }

  init (next) {
    this.logger.gear(this.constructor.name, 'Core#init');
    async.series([
      Loader.initConfig.bind(this),
      Loader.initGear.bind(this),
      Loader.initCogs.bind(this),
      Loader.initListeners.bind(this)
    ], (err, results) => {
      if (err) {

        // TODO: emit an error up to collins
        this.logger.error(this.constructor.name, 'Core#init', err);
        next(err);
      }

      // INFO: A loader init stage errored
      results.forEach((result) => {
        if (result) {
          this.logger.info(this.constructor.name, 'Core#init', result);
        }
      });
      this.initialized = true;

      // INFO: all the initializations have been complted
      this.logger.gear(this.constructor.name, 'Core#init', 'complete');
      next(err);
    });
  }

  connect (next) {
    this.logger.gear(this.constructor.name, 'Core#connect');
    this.Runtime['server'].listen(this.config.port);
    next(null);
  }

  disconnect (next) {
    this.logger.gear(this.constructor.name, 'Core#disconnect');
    this.Runtime['server'].close();
    next(null);
  }

  log () {

  }
}

module.exports = CollinsWeb;
