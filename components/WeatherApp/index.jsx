import React, { Component } from "react";
import { Spin, Switch, Button } from "antd";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import WEATHER_JSON, { transformedWeather } from "./JSON";
import { Container, Header, Footer, LoaderContainer } from "./styles";
import Weather from './Weather';
import Graph from "./Graph";

export default class WeatherApp extends Component {
  state = {
    isLoading: false,
    isCelcius: false,
    active: 0,
    weatherList: transformedWeather(WEATHER_JSON),
  };

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
      console.log(temp, length);
      return {
        ...prev,
        active: temp > length - 1 ? prev.active : temp,
      };
    });
  };

  render() {
    const { isLoading, isCelcius, active, weatherList } = this.state;
    console.log(active);
    const updatedWeatherList = Object.entries(weatherList);
    const todaysWeather = updatedWeatherList.find((_weather, index) => index === active)[1];
    console.log(todaysWeather);

    if (isLoading) {
      return (
        <LoaderContainer>
          <Spin tip="Loading..."></Spin>
        </LoaderContainer>
      );
    }

    return (
      <Container>
        <Header>
          <Switch
            checkedChildren="F"
            unCheckedChildren="C"
            checked={!isCelcius}
            onChange={this.onTempChange}
          />
        </Header>

        <Weather isCelcius={isCelcius} active={active} updatedWeatherList={updatedWeatherList} />
 
        <Footer>
          <Button
            type="primary"
            size="large"
            shape="round"
            disabled={active === 0}
            icon={<ArrowLeftOutlined />}
            onClick={this.leftClick}
          />

          <Button
            type="primary"
            size="large"
            shape="round"
            disabled={active === Object.keys(weatherList).length - 1}
            icon={<ArrowRightOutlined />}
            onClick={this.rightClick}
          />
        </Footer>

        <Graph data={todaysWeather} isCelcius={isCelcius} />
      </Container>
    );
  }
}
