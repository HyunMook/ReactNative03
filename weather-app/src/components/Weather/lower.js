import React from 'react';
import { Text, View, Button } from 'react-native';
import { Foundation } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import CommonStyles, { LowerStyles } from './styles';

export default function WeatherLower({ title, propNavi }) {
  return (
    <View style={LowerStyles.lower}>
      <Text style={CommonStyles.title}>{title}</Text>
      <Foundation
        color="white"
        size={144}
        name="play-video"
        onPress={() => propNavi.navigate('Video')}
      />
    </View>
  );
}

WeatherLower.propTypes = {
  title: PropTypes.string.isRequired,
};
