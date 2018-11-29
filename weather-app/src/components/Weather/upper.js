import React from 'react';
import { Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import CommonStyles, { UpperStyles } from './styles';

export default function WeatherUpper({ icon, location, temperature }) {
  return (
    <View style={UpperStyles.upper}>
      <Text style={CommonStyles.subtitle}>{location}</Text>
      <MaterialCommunityIcons color="white" size={144} name={icon} />
      <Text style={CommonStyles.title}>
        {Math.round(temperature[0] * 10) / 10}º
      </Text>
      <Text style={CommonStyles.subtitle}>
        ({Math.round(temperature[1] * 10) / 10}º ~{' '}
        {Math.round(temperature[2] * 10) / 10}º)
      </Text>
    </View>
  );
}

WeatherUpper.propTypes = {
  icon: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  temperature: PropTypes.array.isRequired,
};
