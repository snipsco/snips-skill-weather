#!/usr/bin/node
'use strict'

const {
    subscriptions
} = require('./src/utils.js');
const CustomError = require('./src/customError.js');
const Config = require('./src/config.js');
const Locale = require('./src/locale.js');
const Places = require('./src/places.js');
const Message = require('./src/message.js');
const Period = require('./src/period.js');
const Location = require('./src/location.js');
const Info = require('./src/info.js');

const mqtt = require('mqtt');

const FORECAST_DAYS_LIMIT = 5;

const client = mqtt.connect('mqtt://localhost', {
    port: 1883
});

const config = new Config();
const locale = new Locale();
const places = new Places();

// sets up config, locale and locations database
// when encountering an error, gives feedback through tts and exits
client.on('connect', () => {
    try {
        config.parseConfig('./config.ini');
        locale.loadLanguage(config);
        places.loadData(config);
        if (!places.lookUp(config.defaultLocation))
            throw new CustomError('', 'defaultLocation');
        for (let topic in subscriptions) {
            client.subscribe(topic, (err) => {
                if (err)
                    throw new CustomError(err, 'mqtt');
            });
        }
    } catch (err) {        
        err.formulate(locale);
        console.log(err);
        client.publish(err.endpoint, err.payload);
        setTimeout(() => process.exit(1), 50);
    }
});

client.on('message', (topic, data) => {
    handle(topic, data);
});

async function handle(topic, data) {
    let message, period, location, info;

    message = new Message(topic, data);
    if (message.endNotice())
        return;
    try {
        message.filterErrors();
        period = new Period();
        location = new Location(places, config);
        period.setFromSlots(message.filterPeriodSlots());
        period.intersect(FORECAST_DAYS_LIMIT);
        location.setFromSlots(places, message.filterLocationSlots());
        info = new Info();
        await info.fetch(config, location);
        info.trim(period);
        console.log(period);
        console.log(location);
        // console.log(info);
        // console.log(info.data.weather);
    } catch (err) {
        console.log(err);
        err.formulate(locale);
        console.log(err);
        client.publish(err.endpoint, err.payload);
    }
}