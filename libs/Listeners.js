'use strict';

// INFO: common modules
const _ = require('lodash');

class Listeners {

  static listening () {
    this.logger.gear(this.constructor.name, 'Listeners#listening', 'fn called');
  }

  static request (request, response) {
    this.logger.gear(this.constructor.name, 'Listeners#request', 'fn called');
    response.end();
  }

  static connect (request, socket, head) {
    this.logger.gear(this.constructor.name, 'Listeners#connect', 'fn called');
  }

  static connection (socket) {
    this.logger.gear(this.constructor.name, 'Listeners#connection', 'fn called');
  }

  static close () {
    this.logger.gear(this.constructor.name, 'Listeners#close', 'fn called');
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
