const yargs = require("yargs");

if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

const forecast = require("./utils/forecast");
const geocode = require("./utils/geocode");

yargs.command({
    command: "forecast",
    describe: "Gets current forecast from City and State",
    builder: {
        city: {
            describe: "City",
            demandOption: true,
            type: "string"
        },
        state: {
            describe: "State",
            demandOption: true,
            type: "string"
        },
        zipcode: {
            describe: "Zip / Postal Code",
            demandOption: false,
            type: "string"
        }
    },
    handler({ city, state, zipcode }) {
        geocode(
            { city: city, state: state, zipcode: zipcode },
            (error, { latitude, longitude, location } = {}) => {
                if (error) {
                    return console.log(error);
                }

                const coord = {
                    latitude,
                    longitude
                };

                console.log(displayName);

                forecast(coord, (error, data) => {
                    if (error) {
                        return console.log("Error", error);
                    }

                    console.log("Data:\n", data);
                });
            }
        );
    }
});

yargs.parse();
