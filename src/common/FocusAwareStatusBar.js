/* eslint-disable react/prop-types */
import React from 'react';
import {View, StatusBar} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import {colors, theme} from './base';

const Bar = ({
  hidden,
  style = theme.statusBar,
  backgroundColor = colors.black.color,
}) => {
  const isFocused = useIsFocused();
  return isFocused ? (
    <View {...{style}}>
      <StatusBar
        hidden={hidden}
        {...{backgroundColor}}
        barStyle={'light-content'}
      />
    </View>
  ) : null;
};

export default Bar;
