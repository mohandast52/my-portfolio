import Image from 'next/image';
import { Card } from 'antd';
import { getCurrentFromTime } from '../utils';
import { Cards } from '../styles';
import type { WeatherEntry } from '../types';

interface WeatherProps {
  isCelcius?: boolean;
  active?: number;
  list?: Array<[string, WeatherEntry[]]>;
}

const Weather = ({ isCelcius = false, active = 0, list = [] }: WeatherProps) => (
  <Cards>
    {list.map(([key, value], index) => {
      if (![active, active + 1, active + 2].includes(index)) {
        return null;
      }

      // Today only has the slots remaining from now on, so its array is shorter
      // than getCurrentFromTime()'s absolute 0-7 index. Fall back to the last
      // entry when the index is out of range — `>` (not `>=`) so we never read
      // value[value.length], which is undefined.
      const currentTime = getCurrentFromTime();
      const currentWeather = value.length > currentTime
        ? value[currentTime]
        : value[value.length - 1];

      const {
        date,
        temperature,
        fahrenheit,
        weather_main: weatherMain,
        weather_icon: weatherIcon,
        wind_speed: windSpeed,
      } = currentWeather || ({} as WeatherEntry);

      return (
        <Card
          key={key}
          cover={(
            <Image
              alt={weatherMain}
              src={`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
              width={70}
              height={70}
              unoptimized
            />
          )}
          className={index === active ? 'active' : ''}
        >
          <div className="weather-info">
            <div className="main">{weatherMain}</div>
            <div className="temperature">
              {isCelcius ? temperature : fahrenheit}
              <span className="symbol">
                {isCelcius ? '°C' : '°F'}
              </span>
            </div>
            <div className="speed-drop">
              {windSpeed}
              km/h
            </div>
            <div>{`${date} ${index}`}</div>
          </div>
        </Card>
      );
    })}
  </Cards>
);

export default Weather;
