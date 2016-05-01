'use strict';

// INFO: common modules
const _ = require('lodash');

class Listeners {

  static listening () {
    this.logger.gear(this.constructor.name, 'Listeners#listening', 'function called');
  }

  static request (request, response) {
    this.logger.gear(this.constructor.name, 'Listeners#request', 'function called');
    response.end();
  }

  static connect (request, socket, head) {
    this.logger.gear(this.constructor.name, 'Listeners#connect', 'function called');
  }

  static connection (socket) {
    this.logger.gear(this.constructor.name, 'Listeners#connection', 'function called');
  }

  static close () {
    this.logger.gear(this.constructor.name, 'Listeners#close', 'function called');
  }

  static getMethods () {

    // INFO: get all properties of this class (object)
    let methods = Object.getOwnPropertyNames(this);

    // INFO: filter out ones we don't want
    methods = _.filter(methods, (prop) => {
      return prop !== 'name' &&
        prop !== 'length' &&
        prop !== 'prototype' &&
        prop !== 'getMethods';
    });
    return methods;
  }
}

module.exports = Listeners;
