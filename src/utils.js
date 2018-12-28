const subscriptions = {
    'hermes/dialogueManager/sessionEnded': 'sessionEnded',
    'hermes/intent/davidsnips:WeatherForecast': 'WeatherForecast',
    'hermes/intent/davidsnips:WeatherConditionRequest': 'WeatherConditionRequest',
    'hermes/intent/davidsnips:TemperatureForecast': 'TemperatureForecast',
};

const hermes = {
    tts: 'hermes/tts/say',
    endSession: 'hermes/dialogueManager/endSession',
    siteId: 'default'
};

const errorMessages = {
    english: {
        mqtt: 'Sorry, there was a communication error with the Snips platform',
        config: 'Sorry, there was an error with your config file.',
        locale: 'Sorry, there was an error with your language settings.',
        places: 'Sorry, there was an error with your location data.',
        defaultLocation: 'Sorry, your default location was not found',
        slots: 'Sorry, there was an error with your location specifications',
        place: 'Sorry, the location you asked was not found.',
        country: 'Sorry, the country you asked was not found.',
        abortedByUser: 'Sorry, there was an error.',
        intentNotRecognized: 'Sorry, I did not understand your request.',
        timeout: 'Sorry, your session timed out.',
        intersection: 'Sorry, the time period should be within 5 days from now.',
        APIResponse: 'Sorry, there was an issue with the service provider.',
        APIRequest: 'Sorry, the service provider is unreachable.',
        API: 'Sorry, there was an issue with your data retrieving.',
        localisation: 'Sorry, this localisation is not supported.'
    },
    french: {
        mqtt: 'Désolé, une erreur s\'est produite lors de la communication avec la plateforme Snips',
        config: 'Désolé, une erreur s\'est produite avec votre fichier de configuration.',
        locale: 'Désolé, une erreur s\'est produite avec vos paramètres de localisation.',
        places: 'Désolé, une erreur s\'est produite avec vos données géographiques.',
        defaultLocation: 'Désolé, votre emplacement par défaut n\'a pas été retrouvé',
        slots: 'Désolé, une erreur s\'est produite avec vos paramètres de lieu',
        place: 'Désolé, le lieu demandé n\'a pas été retrouvé',
        country: 'Désolé, le pays demandé n\'a pas été retrouvé',
        abortedByUser: 'Désolé une erreur s\'est produite.',
        intentNotRecognized: 'Désolé, je n\'ai pas compris votre requête.',
        timeout: 'Désolé, la durée maximale de votre session est dépassée.',
        intersection: 'Désolé, la période demandée doit être comprise entre aujourd\'hui et dans 5 jours au plus tard.',
        APIResponse: 'Désolé, une erreur s\'est produite avec le service de météo.',
        APIRequest: 'Désolé, le service de météo est injoignable.',
        API: 'Désolé, une erreur s\'est durant la recherche de vos données.',
        localisation: 'Désolé, cette langue n\'est pas supportée.'
    }
};

const conditions = {
    english: {
        sun: 'sunny',
        rain: 'rainy',
        cold: 'cold',
        warm: 'warm',
    },
    french: {
        sun: 'ensoleillé',
        rain: 'pluvieux',
        cold: 'froid',
        warm: 'chaud',
    }
};

const presentAnnouncement = {
    english: {
        weatherCondition: 'The weather is mostly',
        temperatureForecast: 'Temperature is about'
    },
    french: {
        weatherCondition: 'Le temps est globalement',
        temperatureForecast: 'La température est de'
    }
};

const futureAnnouncement = {
    english: {
        weatherCondition: 'The weather will be mostly',
        temperatureForecast: 'The forecast is'
    },
    french: {
        weatherCondition: 'Le temps sera globalement',
        temperatureForecast: 'La température sera de'
    }
};

const placesData = {
    english: './mappings/en_mappings',
    french: './mappings/fr_mappings'
}

module.exports = {
    subscriptions: subscriptions,
    hermes: hermes,
    errorMessages: errorMessages,
    conditions: conditions,
    presentAnnouncement: presentAnnouncement,
    futureAnnouncement: futureAnnouncement,
    placesData: placesData
};