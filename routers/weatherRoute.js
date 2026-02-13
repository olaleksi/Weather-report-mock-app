import express from "express";
import { submitWeather, getWeather } from "../controllers/weather_controllers.js";

const router = express.Router();

router.post("/submit", submitWeather);
router.get("/weather", getWeather);

export default router;
