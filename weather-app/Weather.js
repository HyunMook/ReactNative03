import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { LinearGradient } from 'expo';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

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
        temperature: this.props.weatherTemperature[0],
        temperatureMin: this.props.weatherTemperature[1],
        temperatureMax: this.props.weatherTemperature[2],
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
        console.log('wCase(' + this.props.weatherId + ')');
        console.log(wCase);
        this.setState({
          weatherInfo: { ...this.state.weatherInfo, ...wCase },
        });
      }
    });
  }

  render() {
    console.log(this.state);
    return (
      <LinearGradient
        colors={this.state.weatherInfo.colors}
        style={styles.container}
      >
        <StatusBar hidden={true} />
        <View style={styles.upper}>
          <Text style={styles.subtitle}>{this.props.weatherLocation}</Text>
          <MaterialCommunityIcons
            color="white"
            size={144}
            name={this.state.weatherInfo.icon}
          />
          <Text style={styles.title}>
            {Math.round(this.state.weatherInfo.temperature * 10) / 10}º
          </Text>
          <Text style={styles.subtitle}>
            ({Math.round(this.state.weatherInfo.temperatureMin * 10) / 10}º ~{' '}
            {Math.round(this.state.weatherInfo.temperatureMax * 10) / 10}º)
          </Text>
        </View>
        <View style={styles.lower}>
          <Text style={styles.title}>{this.state.weatherInfo.title}</Text>
          {/* <Text style={styles.subtitle}>SubText</Text> */}
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  fontIcon: {
    fontSize: 80,
    color: 'white',
  },
  lower: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'transparent',
  },
  title: {
    fontSize: 38,
    color: 'white',
    marginBottom: 14,
  },
  subtitle: {
    fontSize: 24,
    color: 'white',
    marginBottom: 24,
  },
});
