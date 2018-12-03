import React, { Component } from 'react';
import { Text, View, StatusBar, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo';
import PropTypes from 'prop-types';

import CommonStyles, { IndexStyles } from './styles';
import OWM_API_KEY from './api_key';
import WeatherCases from './cases';
import WeatherUpper from './upper';
import WeatherLower from './lower';

export default class Weather extends Component {
  constructor() {
    super();
    this.state = {
      geolocation: {
        lat: 0,
        long: 0,
        err: false,
      },
      weather: {
        id: '',
        location: '',
        temperature: [],
      },
    };
  }

  _getGeolocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          geolocation: {
            lat: position.coords.latitude,
            long: position.coords.longitude,
          },
        });
        // console.log(position);
      },
      (err) => {
        this.setState({ geolocation: { err } });
      },
    );
  };
  _getWeather = () => {
    const { lat, long } = this.state.geolocation;
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${long}&APPID=${OWM_API_KEY}`,
    )
      .then((res) => res.json())
      .then((json) => {
        // console.log(json);
        this.setState({
          weather: {
            id: json.weather[0].id,
            location: json.name,
            temperature: [
              json.main.temp,
              json.main.temp_min,
              json.main.temp_max,
            ],
          },
        });
      })
      .catch((err) => console.log(err));
  };

  _getWeatherView = () => {
    const wInfo = this.state.weather;
    weatherCases.forEach((wCase) => {
      if (wCase.minCod <= wInfo.id && wCase.maxCod >= wInfo.id) {
        this.setState({ view: wCase });
        return false;
      }
    });
  };

  componentWillMount() {
    this._getGeolocation();
  }
  componentDidMount() {}

  componentWillUpdate() {}
  componentDidUpdate() {
    if (
      this.state.weather.id == '' &&
      this.state.geolocation.lat !== 0 &&
      this.state.geolocation.long !== 0
    ) {
      // console.log(this.state.geolocation);
      this._getWeather();
    } else if (!this.state.view) {
      // console.log(this.state.weather);
      this._getWeatherView();
    } else {
      // console.log('nothing');
    }
  }

  render() {
    let geoData = this.state.geolocation;
    let weatherData = this.state.weather;
    let viewData = this.state.view || false;

    return (
      <View style={CommonStyles.container}>
        {viewData ? (
          <LinearGradient
            colors={viewData.colors}
            style={IndexStyles.container}
          >
            <StatusBar hidden={true} />
            <WeatherUpper
              icon={viewData.icon}
              location={weatherData.location}
              temperature={weatherData.temperature}
            />
            <WeatherLower
              title={viewData.title}
              propNavi={this.props.navigation}
            />
          </LinearGradient>
        ) : (
          <View style={CommonStyles.container}>
            <View style={CommonStyles.loadingUpper}>
              <ActivityIndicator size="large" color="#0000ff" />
            </View>
            <View style={CommonStyles.loadingLower}>
              <Text style={CommonStyles.loadingText}>Getting weather...</Text>
              {geoData.err && (
                <Text style={CommonStyles.errorText}>{geoData.err}</Text>
              )}
            </View>
          </View>
        )}
      </View>
    );
  }
}

Weather.propTypes = {
  navigation: PropTypes.object.isRequired,
};
