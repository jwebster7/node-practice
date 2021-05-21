const request = require("request");

/**
 *
 * @param {object} coordinates A coordinates object containing "lat" and "lon" fields.
 * @param {function} callback A callback function for handling forecast requests.
 */
const forecast = (coordinates, callback) => {
    const { latitude, longitude } = coordinates;
    const apiKey = process.env.OPEN_WEATHER_API_KEY;
    const url = `http://api.openweathermap.org/data/2.5/onecall?appid=${apiKey}&lat=${encodeURIComponent(
        latitude
    )}&lon=${encodeURIComponent(longitude)}&units=imperial`;

    const options = {
        url,
        json: true,
        headers: { "User-Agent": "request" }
    };

    request(options, (error, { body }) => {
        const { current } = body;
        if (error) {
            callback("Unable to connect to weather services!", undefined);
        } else if (!current) {
            callback(
                "Unable to find current weather data with supplied coordinates. Verify coordinates and try again.",
                undefined
            );
        } else {
            const { temp, feels_like, humidity, wind_speed } = current;
            const forecast = `The temperature is ${temp}\u00B0F. With wind speeds around ${wind_speed}mph \
                            and a humidity of ${humidity}%, it feels more like ${feels_like}\u00B0F.`;

            callback(undefined, forecast);
        }
    });
};

module.exports = forecast;
