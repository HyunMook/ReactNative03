import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Weather from './src/components/Weather';
import CommonStyles from './src/styles/common';

const OWM_API_KEY = '5634c8194969006374f4ce44e7339577';
/**
 * <Tips on how to use OpenWeatherMap API effectively>
 * 1. We recommend making calls to the API no more than one time every 10 minutes for one location (city / coordinates / zip-code). This is due to the fact that weather data in our system is updated no more than one time every 10 minutes.
 * 2. The server name is api.openweathermap.org. Please, never use the IP address of the server.
 * 3. Better call API by city ID instead of a city name, city coordinates or zip code to get a precise result. The list of cities' IDs is here.
 * 4. Please, mind that Free and Startup accounts have limited data availability. If you do not receive a response from the API, please, wait at least for 10 min and then repeat your request. We also recommend you to store your previous request.
 *
 * Limit of calls: 60/minute (Free tier)
 * Error Code(over the limit of calls): {cod: '429'}
 */

export default class App extends Component {
  state = {
    isLoaded: false,
    geolocationError: null,
    weatherId: 0,
    weatherLocation: '',
    weatherTemperature: [],
  };

  componentWillMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this._getWeather(position.coords.latitude, position.coords.longitude);
        // this._getWeather(37.497901, 127.02752);
        console.log(position);
      },
      (err) => {
        this.setState({ geolocationError: err });
      },
    );
  }
  _getWeather = (lat, long) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${long}&APPID=${OWM_API_KEY}`,
    )
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        this.setState({
          weatherId: json.weather[0].id,
          weatherLocation: json.name,
          weatherTemperature: [
            json.main.temp,
            json.main.temp_min,
            json.main.temp_max,
          ],
          isLoaded: true,
        });
      })
      .catch((err) => console.log(err));
  };
  render() {
    const {
      isLoaded,
      geolocationError,
      weatherId,
      weatherLocation,
      weatherTemperature,
    } = this.state;
    // console.log(this.state);

    return (
      <View style={CommonStyles.container}>
        {isLoaded ? (
          <Weather
            weatherId={weatherId}
            weatherTemperature={weatherTemperature}
            weatherLocation={weatherLocation}
          />
        ) : (
          <View style={CommonStyles.loading}>
            <Text style={CommonStyles.loadingText}>Getting weather...</Text>
            {geolocationError ? (
              <Text style={CommonStyles.errorText}>{geolocationError}</Text>
            ) : null}
          </View>
        )}
      </View>
    );
  }
}
