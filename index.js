// Imports
import fs from "node:fs/promises";

// Reading the cities_weather.json file
const citiesWeather = JSON.parse(await fs.readFile("cities_weather.json", "utf-8"));
console.log(citiesWeather);





