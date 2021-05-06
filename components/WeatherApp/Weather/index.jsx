import React, { Component } from "react";
import { Card } from "antd";
import { getCurrentFromTime } from "../JSON";
import { Cards } from "../styles";

const Weather = ({ isCelcius, active, updatedWeatherList }) => {
  return (
    <Cards>
      {updatedWeatherList.map(([key, value], index) => {
        if (![active, active + 1, active + 2].includes(index)) {
          return null;
        }

        const currentTime = getCurrentFromTime();
        const currentWeather = value.length >= currentTime ? value[currentTime] : value[value.length - 1];
        const {
          date,
          temperature,
          fahrenheit,
          weather_main,
          weather_icon,
          wind_speed,
        } = currentWeather || {};

        return (
          <Card
            key={key}
            cover={
              <img
                alt={weather_main}
                src={`http://openweathermap.org/img/w/${weather_icon}.png`}
              />
            }
            className={index === active ? "active" : ""}
            actions={null}
          >
            <div className="weather-info">
              <div className="main">{weather_main}</div>
              <div className="temperature">
                {isCelcius ? temperature : fahrenheit}
                <span className="symbol">
                  {isCelcius ? "\u00B0C" : "\u00B0F"}
                </span>
              </div>
              <div className="speed-drop">{wind_speed}km/h</div>
              <div>{`${date} ${index}`}</div>
            </div>
          </Card>
        );
      })}
    </Cards>
  );
}

export default Weather;