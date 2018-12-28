'use strict'

const { hermes } = require('./utils.js');

class Answer {
    constructor(locale, sessionId, intent, report) {
        this.locale = locale;
        this.report = report;
        this.reply = '';
        this.endpoint = hermes.endSession;
        this.buildSentance();
        this.payload = JSON.stringify({
            sessionId: sessionId,
            text: this.reply,
        });
        console.log(this);
        console.log('---------');
    }
    
    buildSentance() {
        if (this.report.time.future) {
            this.locale.announcement = this.locale.announcement.future;
            this.reply = `${this.report.time.formulation}, ${this.locale.announcement.weatherCondition} ${this.locale.conditions[this.report.condition]}`;
        }
    
    }
}

module.exports = Answer;