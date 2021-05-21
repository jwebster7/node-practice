const https = require("https");

// don't commit the apiKey
const apiKey = '';

const url =
    `https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&appid=${apiKey}`;

const request = https.request(url, (res) => {
    let data = "";

    // gets data in "chunks"
    res.on("data", (chunk) => {
        data = data + chunk.toString();
    });

    res.on("end", () => {
        console.log(JSON.parse(data));
    });
});

request.on("error", (err) => {
    console.log(`An error occured. Error: ${err}`);
});

request.end();
