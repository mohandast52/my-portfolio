export const transformedWeather = (weather_json) => {
  const weatherList = {};

  (weather_json.list || []).forEach((e) => {
    const { dt_txt, main, weather, wind } = e;
    const [date, time] = dt_txt.split(" ");

    const tempWeather = {
      date: date,
      time: time.slice(0, -3),
      weather_main: weather[0].main,
      weather_description: weather[0].description,
      weather_icon: weather[0].icon,
      wind_speed: wind.speed,
      temperature: main.temp,
      fahrenheit: ((parseFloat(main.temp) - 32) / 1.8).toFixed(2),
      humidity: main.humidity,
    };

    if (weatherList[date]) {
      weatherList[date].push(tempWeather);
    } else {
      weatherList[date] = [tempWeather];
    }
  });

  return weatherList;
};

export const getCurrentFromTime = () => {
  const date = new Date();
  const currentHour = date.getHours();

  if (currentHour >= 0 && currentHour <= 3) return 0;
  if (currentHour > 3 && currentHour <= 6) return 1;
  if (currentHour > 6 && currentHour <= 9) return 2;
  if (currentHour > 9 && currentHour <= 12) return 3;
  if (currentHour > 12 && currentHour <= 15) return 4;
  if (currentHour > 15 && currentHour <= 18) return 5;
  if (currentHour > 18 && currentHour <= 21) return 6;
  return 7;
};
