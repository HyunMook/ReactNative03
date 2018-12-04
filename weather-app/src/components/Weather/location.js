import React, { Component } from 'react';
import { Text, View, TextInput, Button } from 'react-native';

import { connect } from 'react-redux';
import { changeLocation } from '../../../redux/actions';

class WeatherLocation extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }
  _handleInputChange = (text) => {
    text.replace(/\s/gi, '');
    this.setState({ text });
  };
  _handleApplyLocation = () => {
    var locationData = [];
    locationData = this.state.text.split(',');

    this.props.changeLocation(locationData);
    this.setState({ text: '' });
  };

  render() {
    return (
      <View style={{ padding: 30 }}>
        <TextInput
          style={{ height: 40 }}
          placeholder="Ex) 37.497928, 127.027536"
          onChangeText={this._handleInputChange}
          value={this.state.text}
        />
        <Button
          onPress={this._handleApplyLocation}
          title="Apply location"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}

export default connect(
  null,
  { changeLocation },
)(WeatherLocation);
