import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './components/map';
import Chart from './components/chart';
import rawData from '../data/data.csv';
import a2c from './utils/a2chart';


// const data = {
//   type: 'bar',
//   data: {
//     labels: ['Bah', 'James', 'Marry', 'Sam', 'Gloria'],
//     datasets: [
//       {
//         label: 'Fun',
//         data: [80, 40, 21, 44, 94],
//         backgroundColor: 'rgba(255, 0, 0, .2)',
//         borderWidth: 1
//       }, {
//         label: 'Smart',
//         data: [90, 30, 90, 90, 100],
//         backgroundColor: 'rgba(255, 0, 0, .2)',
//         borderColor: 'rgba(255, 0, 0, .4)',
//         borderWidth: 1
//       }
//     ]
//   },
//   options: {

//   }
// };

const data = {
  type: 'bar', // horizontalBar, line, 
  data: a2c(rawData),
  options: {
    responsive: true,
    title: {
      display: true,
      text: 'People that are in Charts!',
    },
    hover: {
      mode: 'label',
    },
    tooltips: {
      mode: 'label' // single
    }
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Chart {...data} width="400" height="400"/>
        <Map />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
