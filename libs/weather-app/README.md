# weather-app

A self-contained mini-app: a 5-day weather forecast (OpenWeatherMap) with an
amCharts temperature graph. First feature extracted into an Nx library as part
of the incremental Nx migration.

## Usage

```jsx
import WeatherApp from '@my-portfolio/weather-app';
```

Rendered by [pages/weather-app.jsx](../../pages/weather-app.jsx).

## Public API

Only `src/index.ts` is the public surface. Everything under `src/lib/` is
internal — import the package, don't reach into `lib/`.

## Config

Needs `NEXT_PUBLIC_OPENWEATHERMAP_API_KEY` (see [.env.example](../../.env.example)).

## Targets

```bash
pnpm nx lint weather-app
```
