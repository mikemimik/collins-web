'use strict';

// INFO: service-gear specific modules
const Listeners = require('../libs/Listeners');

// INFO: common modules
const async = require('async');
const _ = require('lodash');

class Loader {
  static initConfig(next) {
    next(null);
  }
  static initGear(next) {
    next(null);
  }
  static initCogs(next) {
    next(null);
  }
  static initListeners(next) {
    next(null);
  }
}

module.exprots = Loader;