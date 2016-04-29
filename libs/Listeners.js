'use strict';

// INFO: common modules
const _ = require('lodash');

module.exports = Listeners;

class Listeners {

  static request (request, response) {
    console.log('request handler (listener) called'); // TESTING
  }

  static connect (request, socket, head) {
    console.log('connect handler (listener) called'); // TESTING
  }

  static connection (socket) {
    console.log('connection handler (listener) called'); // TESTING
  }

  static close () {
    console.log('close handler (listener) called'); // TESTING
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
