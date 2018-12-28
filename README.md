# skill-weather
Skill for the Snips assistant, En &amp; Fr

## Requirements

1.  Snips Platform
2.  Node js
3.  An Open Weather Map 5 days / 3 hours valid API key

## Usage

### Through sam

`sam install assistant` (asks for the API key)

`sam watch`

On the raspi on another terminal `journaltctl -u snips-skill-server -f`

### Manually (preferred)

Directly clone anywhere on the Raspi.

Create a `config.ini` with `./setup.sh` and add the API key (with double quotes) in the corresponding entry in `config.ini`

Launch: `./action-code.js`

On another terminal: `./test/generate.sh`

for each test: `mosquitto_pub -t hermes/intent/davidsnips:WeatherForecast -f "name of the test file"`

clean: `./test/clean.sh`

tests are written in `tests.sh`
