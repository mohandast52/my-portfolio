import PropTypes from 'prop-types';
import { Card } from 'antd';
import { getCurrentFromTime } from '../utils';
import { Cards } from '../styles';

/*
export const CardWrapper = ({ isActive, children }) => {
  if (!isActive) {
    return <>{children}</>;
  }

  return (
    <Badge.Ribbon text="啦啦啦啦" color="#2db7f5" placement="start">
      {children}
    </Badge.Ribbon>
  );
}
*/
const Weather = ({ isCelcius, active, list }) => (
  <Cards>
    {list.map(([key, value], index) => {
      if (![active, active + 1, active + 2].includes(index)) {
        return null;
      }

      const currentTime = getCurrentFromTime();
      const currentWeather = value.length >= currentTime
        ? value[currentTime]
        : value[value.length - 1];

      const {
        date,
        temperature,
        fahrenheit,
        weather_main: weatherMain,
        weather_icon: weatherIcon,
        wind_speed: windSpeed,
      } = currentWeather || {};

      return (
        <Card
          key={key}
          cover={(
            <img
              alt={weatherMain}
              src={`http://openweathermap.org/img/w/${weatherIcon}.png`}
            />
          )}
          className={index === active ? 'active' : ''}
          actions={null}
        >
          <div className="weather-info">
            <div className="main">{weatherMain}</div>
            <div className="temperature">
              {isCelcius ? temperature : fahrenheit}
              <span className="symbol">
                {isCelcius ? '\u00B0C' : '\u00B0F'}
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

Weather.propTypes = {
  isCelcius: PropTypes.bool,
  active: PropTypes.number,
  list: PropTypes.shape([]),
};

Weather.defaultProps = {
  isCelcius: false,
  active: 0,
  list: [],
};

export default Weather;
