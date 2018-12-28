'use strict'

const CustomError = require('./customError.js');
const Moment = require('moment');
const axios = require('axios');

class Info {
    constructor() {
        this.url = 'http://api.openweathermap.org/data/2.5/forecast';
    }

    async fetch(config, location) {
        let request, response;

        request = `${this.url}?id=${location.id}&units=metric&APPID=${config.apiKey}`;
        try {
            response = await axios(request);
        } catch (err) {
            if (error.response)
                throw new CustomError(err.message, 'APIReponse');
            else if (error.request)
                throw new CustomError(err.message, 'APIRequest');
            else
                throw new CustomError(err.message, 'API');
        }
        this.data = response.data.list;
        // console.log(this.data);
        
    }

    trim(period) {
        let filtered;

        filtered = this.data.filter((segment) => {
            return (period.start.isSameOrBefore(segment['dt_txt']) && period.end.isSameOrAfter(segment['dt_txt']));
        });
        this.data = filtered.length ? filtered : this.data[0];
    }
}

module.exports = Info;