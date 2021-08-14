/* eslint-disable react/prop-types */
import React from 'react';
import {SafeAreaView} from 'react-native';
import {defStyles, theme} from './base/index';

const SafeArea = ({children, ...rest}) => {
  const {
    flex,
    center,
    centerX,
    centerY,
    grow,
    row,
    rowReverse,
    spaceBetween,
    alignCenter,
    stretch,
    fullHeight,
    rowStart,
    rowEnd,
    viewColor,
    style,
  } = rest;

  const _style = [
    flex ? defStyles.flex : {},
    grow ? defStyles.grow : {},
    center ? defStyles.center : {},
    centerX ? defStyles.centerX : {},
    centerY ? defStyles.centerY : {},
    row ? defStyles.row : {},
    rowReverse ? defStyles.rowReverse : {},
    spaceBetween ? defStyles.spaceBetween : {},
    alignCenter ? defStyles.alignCenter : {},
    stretch ? defStyles.stretch : {},
    fullHeight ? defStyles.fullHeight : {},
    rowStart ? defStyles.rowStart : {},
    rowEnd ? defStyles.rowEnd : {},
    theme.defColor,
    viewColor ? {backgroundColor: viewColor.color} : {},
    style,
  ];

  return <SafeAreaView style={_style}>{children}</SafeAreaView>;
};

export default SafeArea;
