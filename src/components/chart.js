import React, { Component } from 'react';
import ChartJS from 'Chart.js';

ChartJS.defaults.global.defaultFontSize = 20;

export class Chart extends Component {
  componentDidMount() {
    this.createChart();
  }
  componentWillUnmount() {
    this.killChart();
  }

  componentDidUpdate() {
    this.killChart();
    this.createChart();
  }

  createChart() {
    const ctx = this.ref['chart'].getContext('2d');
    let {type, data, options} = this.props;

    this.chart = new ChartJS(ctx, {type, data, options});
  }
  killChart() {
    this.chart && this.chart.destroy();
  }
  render() {
    let canvasProps = {
      width: (this.props.width || 400),
      height: (this.props.height || 400)
    };
    return (
      // <div style={{width: 900, height: 300, backgroundColor: 'blue'}}>
      // <div style={{width: 800, height: 250}}>
        <canvas ref="chart" {...canvasProps}></canvas>
      // </div>
    );
  }
}

export default App;
