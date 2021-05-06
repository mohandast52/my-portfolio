import React, { Component } from "react";
import { Spin } from "antd";
import { transformedWeather } from "./utils";
import { Container, LoaderContainer } from "./styles";
import Weather from './Weather';
import Graph from "./Graph";
import { Header, Footer } from './Weather/helpers'

const API_URL = "http://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=75f972b80e26f14fe6c920aa6a85ad57&cnt=40";

export default class WeatherApp extends Component {
  state = {
    isLoading: true,
    isCelcius: false,
    active: 0,
    weatherList: {},
  };

  componentDidMount() {
    fetch(API_URL)
      .then(response => response.json())
      .then(json => {
        this.setState({
          isLoading: false,
          weatherList: transformedWeather(json),
        });
      })
      .catch(error => {
        console.log('Request Failed', error);
        this.setState({ isLoading: false });
      });
  }

  onTempChange = (e) => {
    this.setState((prev) => ({ isCelcius: !prev.isCelcius }));
  };

  leftClick = () => {
    this.setState((prev) => {
      const temp = prev.active - 1;
      return {
        ...prev,
        active: temp >= 0 ? temp : 0,
      };
    });
  };

  rightClick = () => {
    this.setState((prev) => {
      const temp = prev.active + 1;
      const length = Object.keys(prev.weatherList).length;
      return {
        ...prev,
        active: temp > length - 1 ? prev.active : temp,
      };
    });
  };

  render() {
    const { isLoading, isCelcius, active, weatherList } = this.state;
    const updatedWeatherList = Object.entries(weatherList);
    const currentWeather = updatedWeatherList.find((_weather, index) => index === active);
    const [_, todaysWeather] = currentWeather || [];

    if (isLoading) {
      return (
        <LoaderContainer>
          <Spin tip="Loading..."></Spin>
        </LoaderContainer>
      );
    }

    return (
      <Container>
        <Header
          isCelcius={isCelcius}
          onTempChange={this.onTempChange}
        />

        <Weather
          isCelcius={isCelcius}
          active={active}
          list={updatedWeatherList}
        />

        <Footer
          isLeftDisabled={active === 0}
          onLeftClick={this.leftClick}
          isRightDisabled={active === updatedWeatherList.length - 1}
          onRightClick={this.rightClick}
        />

        <Graph data={todaysWeather} isCelcius={isCelcius} />
      </Container>
    );
  }
}
