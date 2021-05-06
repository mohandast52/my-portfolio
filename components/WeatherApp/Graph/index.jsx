import React, { Component } from "react";
import { ChartContainer } from '../styles'

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
    console.log(data)
    const chart = am4core.create("chartdiv", am4charts.XYChart);

    // Add data
    chart.data = data;

    // axes
    const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "time";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;
    categoryAxis.title.text = "Time";

    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.title.text = isCelcius ? "Celcius" : "Fahrenheit";

    /* series */
    const series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = isCelcius ? "temperature" : "fahrenheit";
    series.dataFields.categoryX = "time";
    series.name = "Visits";
    series.columns.template.tooltipText = "[bold]{valueY}[/]: {categoryX}";
    series.columns.template.fillOpacity = .8;

    const columnTemplate = series.columns.template;
    columnTemplate.strokeWidth = 2;
    columnTemplate.strokeOpacity = 1;
  }

  render() {
    return <ChartContainer id="chartdiv"></ChartContainer>;
  }
}

export default Graph;
