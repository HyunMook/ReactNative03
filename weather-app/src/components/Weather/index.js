import React, { Component } from 'react';
import { Text, View, StatusBar } from 'react-native';
import { LinearGradient } from 'expo';
import PropTypes from 'prop-types';
import CommonStyles, { IndexStyles } from './styles';
import WeatherUpper from './upper';
import WeatherLower from './lower';

const weatherCases = [
  {
    title: 'Thunderstorm',
    minCod: 200,
    maxCod: 299,
    colors: ['#00ecbc', '#007adf'],
    icon: 'weather-lightning',
  },
  {
    title: 'Drizzle',
    minCod: 300,
    maxCod: 399,
    colors: ['#89f7fe', '#66a6ff'],
    icon: 'weather-rainy',
  },
  {
    title: 'Rain',
    minCod: 500,
    maxCod: 599,
    colors: ['#00C6FB', '#005BEA'],
    icon: 'weather-pouring',
  },
  {
    title: 'Snow',
    minCod: 600,
    maxCod: 699,
    colors: ['#7de2fc', '#b9b6e5'],
    icon: 'weather-snowy',
  },
  {
    title: 'Atmosphere',
    minCod: 700,
    maxCod: 799,
    colors: ['#e4e4e4', '#4e4e4e'],
    icon: 'weather-fog',
  },
  {
    title: 'Clear',
    minCod: 800,
    maxCod: 800,
    colors: ['#fef253', '#ff7300'],
    icon: 'weather-sunny',
  },
  {
    title: 'Clouds',
    minCod: 801,
    maxCod: 804,
    colors: ['#00C6FB', '#005BEA'],
    icon: 'weather-cloudy',
  },
];

export default class Weather extends Component {
  static propType = {
    weatherId: PropTypes.number.isRequired,
    weatherTemperature: PropTypes.array.isRequired,
    weatherLocation: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      weatherInfo: {
        location: props.weatherLocation,
        temperature: props.weatherTemperature,
      },
    };
  }

  componentWillMount() {
    //TEST
    // wCase = {
    //   title: 'Clear',
    //   minCod: 800,
    //   maxCod: 800,
    //   colors: ['#fef253', '#ff7300'],
    //   icon: 'weather-sunny',
    // };
    // this.setState({
    //   weatherInfo: { ...this.state.weatherInfo, ...wCase },
    // });
    weatherCases.forEach((wCase) => {
      if (
        wCase.minCod <= this.props.weatherId &&
        wCase.maxCod >= this.props.weatherId
      ) {
        // console.log('wCase(' + this.props.weatherId + ')');
        // console.log(wCase);
        this.setState({
          weatherInfo: { ...this.state.weatherInfo, ...wCase },
        });
      }
    });
  }

  render() {
    console.log(this.state);
    const { title, location, icon, temperature } = this.state.weatherInfo;
    return (
      <LinearGradient
        colors={this.state.weatherInfo.colors}
        style={IndexStyles.container}
      >
        <StatusBar hidden={true} />
        <WeatherUpper
          icon={icon}
          location={location}
          temperature={temperature}
        />
        <WeatherLower title={title} />
      </LinearGradient>
    );
  }
}
