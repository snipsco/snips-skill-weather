'use strict'

const CustomError = require('./customError.js');
const Moment = require('moment');

class Period {
    constructor() {
        this.start = new Moment();
        this.end = this.start;
    }
    // creates a start and an end from time slots. If many, tries to join them ('wednesday and thursday and friday')
    setFromSlots(timeSlot) {
        return ;
        if (!timeSlot)
        return ;
    }
    // intersects the time range found with the API limit
    intersect(daysLimit) {
        let now, limit;

        now = new Moment();
        limit = new Moment().add(daysLimit, 'days');
        // console.log('start: ', this.start)
        // console.log('end: ', this.end);
        // console.log('now: ', now);
        // console.log('limit: ', limit);
        this.start = this.start.isSameOrAfter(now, 'minute') ? this.start : now; // to fix!!
        this.end = this.end.isSameOrBefore(limit, 'minute') ? this.end : limit;
        // console.log('start: ', this.start)
        // console.log('end: ', this.end);

        if (this.start.isAfter(this.end))
            throw new CustomError('', 'intersection');
    }
}

module.exports = Period;