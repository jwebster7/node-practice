const request = require("request");

/**
 *
 * @param {object} address An object containing city, state, and postalcode/zipcode.
 * @param {function} callback A callback function for handling geocode requests.
 */
const geocode = (address, callback) => {
    const { city, state, zipcode } = address;
    const url = `https://nominatim.openstreetmap.org/search?city=${encodeURIComponent(
        city
    )}&state=${encodeURIComponent(state)}&postalcode=${encodeURIComponent(
        zipcode
    )}}&format=jsonv2`;

    const options = {
        url,
        json: true,
        headers: { "User-Agent": "request" }
    };

    request(options, (error, { body }) => {
        if (error) {
            callback("Unable to connect to location services!", undefined);
        } else if (body.length === 0) {
            callback("Unable to find location. Try another search.", undefined);
        } else {
            const { lat, lon, display_name } = body[0];
            const data = {
                latitude: lat,
                longitude: lon,
                displayName: display_name
            };
            callback(undefined, data);
        }
    });
};

module.exports = geocode;
