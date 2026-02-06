// Imports
import fs from "node:fs";

// Reading the cities_weather.json file
fs.readFile("cities_weather.json", "utf-8", (err, data) => {
    if (err) throw new Error(err);

    const citiesWeather = JSON.parse(data);
});