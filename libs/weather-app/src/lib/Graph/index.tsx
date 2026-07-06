import React, { Component } from 'react';
import { Divider } from 'antd';
import { ChartContainer } from '../styles';
import type { WeatherEntry } from '../types';

// amCharts v5 is loaded as global CDN scripts in _document (index.js + xy.js +
// the Animated theme), so there are no npm types here — the globals are `any`.
declare const am5: any;
declare const am5xy: any;
declare const am5themes_Animated: any;

interface GraphProps {
  data: WeatherEntry[];
  isCelcius: boolean;
}

class Graph extends Component<GraphProps> {
  // v5 hands back a Root that must be disposed before the div is reused.
  private root: any = null;

  componentDidMount() {
    this.chart();
  }

  componentDidUpdate(prevProp: GraphProps) {
    const { isCelcius, data } = this.props;
    if (prevProp.data !== data || prevProp.isCelcius !== isCelcius) {
      this.chart();
    }
  }

  componentWillUnmount() {
    if (this.root) this.root.dispose();
  }

  chart = () => {
    const { isCelcius, data } = this.props;

    // Rebuild from scratch: dispose the previous Root so the div is clean.
    if (this.root) this.root.dispose();

    const root = am5.Root.new('chartdiv');
    this.root = root;
    root.setThemes([am5themes_Animated.new(root)]);

    const chart = root.container.children.push(
      am5xy.XYChart.new(root, { panX: false, panY: false }),
    );

    // X axis — category (time)
    const xRenderer = am5xy.AxisRendererX.new(root, { minGridDistance: 30 });
    xRenderer.grid.template.setAll({ location: 0 });
    const xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, { categoryField: 'time', renderer: xRenderer }),
    );
    xAxis.children.push(am5.Label.new(root, { text: 'Time', x: am5.p50, centerX: am5.p50 }));
    xAxis.data.setAll(data);

    // Y axis — value (temperature / fahrenheit)
    const yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, { renderer: am5xy.AxisRendererY.new(root, {}) }),
    );
    yAxis.children.unshift(
      am5.Label.new(root, {
        text: isCelcius ? 'Celcius' : 'Fahrenheit',
        rotation: -90,
        y: am5.p50,
        centerX: am5.p50,
      }),
    );

    // Column series
    const series = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        name: 'Visits',
        xAxis,
        yAxis,
        valueYField: isCelcius ? 'temperature' : 'fahrenheit',
        categoryXField: 'time',
        fill: am5.color('#1890ff'),
        stroke: am5.color('#1890ff'),
        tooltip: am5.Tooltip.new(root, { labelText: '[bold]{valueY}[/]: {categoryX}' }),
      }),
    );
    series.columns.template.setAll({ fillOpacity: 0.5, strokeWidth: 2, strokeOpacity: 1 });
    series.data.setAll(data);
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
