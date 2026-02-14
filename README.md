# 🌤️ Weather Report Mock App

A simple Express.js-based web application for retrieving weather information for multiple cities. This mock app uses pre-configured weather data and provides both a web interface and JSON API endpoints.

## Features

- **Web Interface**: User-friendly form to search weather by city name
- **JSON API**: Query weather data programmatically via REST endpoints
- **Error Handling**: Validates user input and provides helpful error messages
- **Multiple Cities**: Pre-loaded weather data for major cities worldwide
- **Weather Details**: Displays temperature, weather condition, humidity, wind speed, and weather description
- **Modular Architecture**: Refactored into routers, controllers, and services for maintainability

## Tech Stack

- **Backend**: Express.js (v5.2.1)
- **Templating**: EJS (v4.0.1)
- **Development**: Nodemon (v3.1.11)
- **Data Storage**: JSON file-based (no database required)

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Steps

1. Clone or download the project:
   ```bash
   cd Weather-report-mock-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Usage

### Web Interface

1. Visit `http://localhost:3000`
2. Enter a city name in the input field
3. Click "Weather Report" to view the weather data
4. The app displays temperature, weather condition, humidity, wind speed, and description

### API Endpoints

#### GET /weather

Retrieve weather data for a specific city as JSON.

**Query Parameters:**
- `city` (required): The city name to search for

**Example:**
```bash
curl "http://localhost:3000/weather?city=lagos"
```

**Success Response (200):**
```json
{
  "capitalizedCity": "Lagos",
  "country": "Nigeria",
  "temperature": "28",
  "condition": "Partly cloudy",
  "humidity": 82,
  "windSpeed": 14,
  "description": "Warm and humid coastal weather with thick moisture in the air and periods of cloud cover throughout the day."
}
```

**Error Response (400 - Missing city parameter):**
```json
{
  "error": "please enter a valid city query parameter"
}
```

**Error Response (404 - City not found):**
```json
{
  "error": "city_name not found"
}
```

## Project Structure

The application has been refactored into a modular layout with clear separation of concerns.

```
Weather-report-mock-app/
├── index.js                 # Main entry point, sets up Express and mounts routes
├── package.json            # Project dependencies and scripts
├── cities_weather.json     # Weather data for all cities
├── routers/                # Route definitions
│   └── weatherRoute.js     # Express router for weather endpoints
├── controllers/            # Request handlers
│   └── weather_controllers.js
├── services/               # Business logic and data access
│   └── weather_services.js
├── utils/                  # Small helper functions
│   ├── capitalize.js      # Utility to capitalize city names
│   └── trim.js            # Utility to trim whitespace
├── views/                  # EJS templates
│   └── index.ejs          # Template for weather display
├── public/
│   ├── index.html         # Form and weather display UI
│   └── styles.css         # Styling
└── README.md              # This file
```

## Supported Cities

The app includes weather data for cities such as:
- Lagos (Nigeria)
- Tokyo (Japan)
- Sydney (Australia)
- Cairo (Egypt)
- And more...

For a complete list, see [cities_weather.json](cities_weather.json).

## How It Works

1. **Form Submission** (`POST /submit`):
   - User submits city name via web form
   - Input is trimmed and converted to lowercase for matching
   - Weather data is retrieved from `cities_weather.json`
   - Results are rendered using EJS template

2. **API Query** (`GET /weather`):
   - Same data retrieval logic as form submission
   - Returns JSON instead of HTML
   - Includes proper HTTP status codes

3. **Data Processing**:
   - Input validation ensures empty submissions are rejected
   - City names are normalized (trimmed and lowercased)
   - Utility functions capitalize city names for display

## Scripts

- `npm start` - Start development server with hot reload (Nodemon)
- `npm test` - Run tests (currently not configured)

## Authors

- Olalekan Olajide
- Goodness Chukwuemeka
- Ogunkanmi Favour Funmilayo
- Oluwatayo Mayowa Stephen
- Ahamad Tijjani
- Adeolu Akinde
- Fasasi Mayokun
- Ezekiel Donkor
- Wisdom Essien

## License

ISC

## Changelog

- **2026-02-14**: Refactored code base into routers/controllers/services and updated project structure.

## Notes

- This is a **mock application** using pre-configured weather data
- Weather data does not reflect real-time conditions
- The app runs on port 3000 by default
- Inputs are case-insensitive and automatically trimmed
