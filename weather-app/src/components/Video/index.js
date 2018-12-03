import React, { Component } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

class Vid extends Component {
  constructor() {
    super();

    this.state = {};
  }
  render() {
    return (
      <View>
        <Text onPress={() => this.props.navigation.navigate('Home')}>ddd</Text>
      </View>
    );
  }
}

export default Vid;
