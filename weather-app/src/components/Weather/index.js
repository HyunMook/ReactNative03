import React, { Component } from 'react';
import { Text, View, StatusBar } from 'react-native';
import { LinearGradient } from 'expo';
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
    console.log('_getGeolocation');
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
  _getWeather = async () => {
    console.log('_getWeather1');
    await this._getGeolocation();
    console.log('_getWeather2');
    const { lat, long } = this.state.geolocation;
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${long}&APPID=${OWM_API_KEY}`,
    )
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
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

  _getWeatherView = async () => {
    console.log('_getWeatherView1');
    await this._getWeather();
    console.log('_getWeatherView2');
    weatherCases.forEach((wCase) => {
      const wInfo = this.state.weather;
      if (wCase.minCod <= wInfo.id && wCase.maxCod >= wInfo.id) {
        this.setState({ view: wCase });
      }
    });
    t;
  };

  componentWillMount() {
    console.log('componentWillMount');
    this._getWeatherView();
  }

  render() {
    console.log(this.state);

    const geoData = this.state.geolocation;
    const weatherData = this.state.weather;
    const viewData = this.state.view || false;

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
            <WeatherLower title={viewData.title} />
          </LinearGradient>
        ) : (
          <View style={CommonStyles.loading}>
            <Text style={CommonStyles.loadingText}>Getting weather...</Text>
            {geoData.err && (
              <Text style={CommonStyles.errorText}>{geoData.err}</Text>
            )}
          </View>
        )}
      </View>
    );
  }
}
