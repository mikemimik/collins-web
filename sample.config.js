'use strict';

/*
 * Filename: web.config.js
 *
 * Contents:
 * - host (required)
 * - port (required)
 *
 * Inheritables:
 * - logger (required)
 * - debug
 */

/**
 * Sample Config for Web Service Gear
 * @module config
 * @see module:config
 * @example
 */

module.exports = {
  /**
   * Host property
   * @alias module:config.host
   * @property
   * @required
   */
  host: 'localhost',

  /**
   * Port property
   * @alias module:config.port
   * @property
   * @required
   */
  port: 9000,

  /**
   * Logger property
   * @alias module:config.logger
   * @property
   * @required
   */
  logger: 'inherit',

  /**
   * Debug property
   * @alias module:config.debug
   * @property
   */
  debug: 'inherit'
};