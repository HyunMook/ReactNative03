import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import { Provider } from 'react-redux';
import store from './redux/store';

import Weather from './src/components/Weather';
import Vid from './src/components/Video';

const AppNavigator = createStackNavigator(
  {
    Home: Weather,
    Video: Vid,
  },
  {
    initialRouteName: 'Home',
  },
);
const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  componentWillMount = () => {
    console.log('props on App.js:', this.props);
  };

  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
