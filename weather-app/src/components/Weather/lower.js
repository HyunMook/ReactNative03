import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import CommonStyles, { LowerStyles } from './styles';

export default function WeatherLower({ title }) {
  return (
    <View style={LowerStyles.lower}>
      <Text style={CommonStyles.title}>{title}</Text>
      {/* <Text style={styles.subtitle}>SubText</Text> */}
    </View>
  );
}

WeatherLower.propTypes = {
  title: PropTypes.string.isRequired,
};
