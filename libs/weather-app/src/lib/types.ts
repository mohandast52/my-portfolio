// Domain types for the weather-app lib.

// A single forecast slot derived from the OpenWeatherMap response.
export interface WeatherEntry {
  date: string;
  time: string;
  weather_main: string;
  weather_description: string;
  weather_icon: string;
  wind_speed: number;
  temperature: number;
  fahrenheit: number;
  humidity: number;
}

// Forecast slots grouped by date (YYYY-MM-DD).
export type WeatherList = Record<string, WeatherEntry[]>;

// The slice of the OpenWeatherMap 5-day / 3-hour forecast response we read.
export interface ForecastResponse {
  list?: Array<{
    dt_txt: string;
    main: { temp: number; humidity: number };
    weather: Array<{ main: string; description: string; icon: string }>;
    wind: { speed: number };
  }>;
}
