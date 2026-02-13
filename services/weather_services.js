import fs from "node:fs/promises";
import {capitalize} from "../utils/capitalize.js"
import safeTrim from  "../utils/trim.js"



// Reading the cities_weather.json file
const citiesWeather = JSON.parse(await fs.readFile("cities_weather.json", "utf-8"));


export function getWeatherByCity(city) {
    if(!city || safeTrim(city) === '') {
        return res.render("index.ejs", {error : `Please enter a city`})
      }
    
      // Triming the submitted values to get rid of empty spaces before or after the input and normalizing to lowercase
      const trimmedCity = safeTrim(city).toLowerCase();
    
      // Isolating each weather object
      const cityWeather = citiesWeather[trimmedCity];
    
      // CONDITIONAL RESPONSES
    
      // Handling an unknown city
      if(!cityWeather) {
        return  {error : `${trimmedCity} not found! Enter a valid city.`};
      }
    
      // Handling a known city
      res.render('index.ejs', {
        capitalizedCity:capitalize(trimmedCity),
        country: cityWeather.country,
        temperature: cityWeather.temperature,
        condition: cityWeather.condition,
        windSpeed: cityWeather.windSpeed,
        humidity: cityWeather.humidity,
        description: cityWeather.description
      }); 
    };