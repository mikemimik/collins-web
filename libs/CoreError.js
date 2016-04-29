'use strict';

class ExtendableError extends Error {
  constructor (message) {
    super(message);
    this.name = this.constructor.name;
    this.message = message;
    Error.captureStackTrace(this, this.constructor.name);
  }
}

class WebError extends ExtendableError {
  constructor (type, data) {
    super('constructor'); // TODO: is this correct?
    this.data = data || {};
    this.type = type;
    this.message = '\'' + type + '\' error message received';
    let reason = data.details || data.reason;
    if (reason) {
      this.message += ':\n"' + reason + '"\n';
    } else {
      this.message += '. ';
    }
    this.message += 'See \'data\' for details.';
  }
}

module.exports = WebError;
