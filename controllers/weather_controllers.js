import { getWeatherByCity } from "../services/weather_services.js";

export function submitWeather(req, res) {
    const result = getWeatherByCity(req.body.city);

  if (result.error) {
    return res.render("index.ejs", { error: result.error });
  }

  res.render("index.ejs", result);
}

export function getWeather(req, res) {
  const result = getWeatherByCity(req.query.city);

  if (result.error) {
    return res.status(404).json({ error: result.error });
  }

  res.json(result);
}