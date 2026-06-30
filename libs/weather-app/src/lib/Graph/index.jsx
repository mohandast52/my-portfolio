/* eslint-disable react/prop-types */
/* global am4charts am4core */
import React, { Component } from 'react';
import { Divider } from 'antd';
import { ChartContainer } from '../styles';

class Graph extends Component {
  componentDidMount() {
    this.chart();
  }

  componentDidUpdate(prevProp) {
    const { isCelcius, data } = this.props;
    if (prevProp.data !== data || prevProp.isCelcius !== isCelcius) {
      this.chart();
    }
  }

  chart = () => {
    const { isCelcius, data } = this.props;
    const chart = am4core.create('chartdiv', am4charts.XYChart);

    // Add data
    chart.data = data;

    // axes
    const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = 'time';
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;
    categoryAxis.title.text = 'Time';

    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.title.text = isCelcius ? 'Celcius' : 'Fahrenheit';

    /* series */
    const series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = isCelcius ? 'temperature' : 'fahrenheit';
    series.dataFields.categoryX = 'time';
    series.name = 'Visits';
    series.columns.template.tooltipText = '[bold]{valueY}[/]: {categoryX}';
    series.fill = am4core.color('#1890ff');
    series.stroke = am4core.color('#1890ff');
    series.columns.template.fillOpacity = 0.5;

    const columnTemplate = series.columns.template;
    columnTemplate.strokeWidth = 2;
    columnTemplate.strokeOpacity = 1;
  };

  render() {
    return (
      <>
        <Divider>Today&apos;s weather W.R.T time</Divider>
        <ChartContainer id="chartdiv" />
      </>
    );
  }
}

export default Graph;
