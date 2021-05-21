const fs = require("fs");

// const book = {
//     title: "Ego is the enemy",
//     author: "Ryan Holliday"
// };

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync("1-json.json", bookJSON);

// const dataBuffer = fs.readFileSync("1-json.json");
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);

// console.log(data.title);

const buffer = fs.readFileSync("1-json.json");
const data = JSON.parse(buffer.toString());
data.name = "Joseph Webster";
data.age = "27";
fs.writeFileSync("1-json.json", JSON.stringify(data));
