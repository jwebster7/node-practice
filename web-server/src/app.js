// core modules
const path = require("path");

// npm modules
const express = require("express");
const hbs = require("hbs");

if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

// custom modules
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const app = express();
const port = 3001;

// paths for express config
const publicPath = path.join(__dirname, "../public");
const partialsPath = path.join(__dirname, "../templates/partials");
const viewsPath = path.join(__dirname, "../templates/views");

// setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// setup public directory to serve static assets
app.use(express.static(publicPath));

app.get("", (req, res) => {
    res.render("index", { title: "Weather forcast", name: "Joseph Webster" });
});

app.get("/about", (req, res) => {
    res.render("about", {
        title: "About Me",
        message: "If you're wondering, yes I am a robot.",
        name: "Joseph Webster"
    });
});

app.get("/weather", (req, res) => {
    const { city, state, zipcode } = req.query;

    if (!city || !state) {
        return res.send({
            error: "Enter a valid address!"
        });
    }

    geocode(
        { city, state, zipcode },
        (error, { latitude, longitude, location } = {}) => {
            if (error) {
                return res.send({ error });
            }

            const coord = {
                latitude,
                longitude
            };

            forecast(coord, (error, data) => {
                if (error) {
                    return res.send({ error });
                }

                res.send({ coord, location, forecast: data });
            });
        }
    );
});

app.get("/help", (req, res) => {
    res.render("help", {
        title: "Help",
        name: "Webster",
        message:
            "Something broken? Try refreshing your browser or clearing you browser's cache."
    });
});

app.get("/help/*", (req, res) => {
    res.render("404", {
        title: "404",
        name: "Webster",
        message: "Help article not found!"
    });
});

app.get("*", (req, res) => {
    res.render("404", {
        title: "404",
        name: "Webster",
        message: "Page not found!"
    });
});

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});
