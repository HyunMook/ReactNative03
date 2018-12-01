import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Vid extends Component {
  render() {
    return (
      <View>
        <Text onPress={() => this.props.navigation.navigate('Home')}>ddd</Text>
      </View>
    );
  }
}
