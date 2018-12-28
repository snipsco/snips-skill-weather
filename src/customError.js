'use strict'

const { hermes } = require('./utils.js');

class CustomError extends Error {
    constructor(message, reason, sessionId) {
        super();
        this.message = message;
        this.reason = reason;
        this.endpoint = sessionId ? hermes.endSession : hermes.tts;
        this.payload = {
            siteId: hermes.siteId,
            sessionId: sessionId
        };
    }

    formulate(locale) {
        this.payload.text = locale.errorMessages[this.reason];
        this.payload = JSON.stringify(this.payload);
    }
}

module.exports = CustomError;