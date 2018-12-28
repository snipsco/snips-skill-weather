'use strict'

const { subscriptions } = require('./utils.js');
const CustomError = require('./customError.js');

class Message {
    constructor(topic, data) {
        this.topic = subscriptions[topic];
        this.data = JSON.parse(data);
        if (this.data.sessionId)
            this.sessionId = this.data.sessionId;
    }

    endNotice() {
        return (this.topic == 'sessionEnded' &&
                    this.data.termination.reason == 'nominal');
    }

    filterErrors() {
        if (this.topic === 'sessionEnded')
            throw new CustomError('', this.data.termination.reason, this.sessionId);
    }

    filterPeriodSlots() {
        return (this.data.slots.filter((slot) => {
            return (slot.slotname === 'forecast_datetime');
        }));
    }

    filterLocationSlots() {
        return (this.data.slots.filter((slot) => {
            return (slot.slotName === 'city' ||
                slot.slotName === 'region' ||
                slot.slotName === 'country');
        }));
    }
}

module.exports = Message;
