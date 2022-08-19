const express = require("express");
const cors = require("cors");



const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require('./controller')
const { getFortune } = require('./controller')
const { getWeather } = require('./controller')
const { getBirthday } = require('./controller')

app.get("/api/fortune", getFortune);
app.get("/api/compliment", getCompliment);
app.get("/api/weather", getWeather);
app.get("/api/birthday", getBirthday);

console.log("Still Functioning!")
app.listen(4000, () => console.log("Server running on 4000"));
