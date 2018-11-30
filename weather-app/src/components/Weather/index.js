import React, { Component } from 'react';
import { Text, View, StatusBar } from 'react-native';
import { LinearGradient } from 'expo';
import PropTypes from 'prop-types';
import CommonStyles, { IndexStyles } from './styles';
import WeatherCases from './cases';
import WeatherUpper from './upper';
import WeatherLower from './lower';

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
