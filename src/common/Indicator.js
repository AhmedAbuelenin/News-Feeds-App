/* eslint-disable react/prop-types */
import React from 'react';
import {ActivityIndicator} from 'react-native';
import {colors} from '../common/defaults/colors';

const Loading = ({
  loading = false,
  color = colors.black.color,
  size = 'small',
}) => {
  return <ActivityIndicator animating={loading} color={color} size={size} />;
};

export default Loading;
