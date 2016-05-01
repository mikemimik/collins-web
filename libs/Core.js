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
    async.series([
      Loader.initConfig.bind(this),
      Loader.initGear.bind(this),
      Loader.initCogs.bind(this),
      Loader.initListeners.bind(this)
    ], (err, results) => {
      if (err) {

        // INFO: there was an error processing the config
        // TODO: emit an error up to collins
        next(err);
      }
      results.forEach((result) => {
        if (result) {
          // INFO: loader returned error data
        }
      });

      this.initialized = true;

      // INFO: all the initializations have been complted
      this.logger.gear('TESTING', this.constructor.name, 'finished init', 'RESULT:', results);
      next(err);
    });
  }

  connect (next) {
    this.Runtime['server'].listen(this.config.port);
    next(null);
  }

  disconnect (next) {
    this.Runtime['server'].close();
    next(null);
  }

  log () {

  }
}

module.exports = CollinsWeb;
