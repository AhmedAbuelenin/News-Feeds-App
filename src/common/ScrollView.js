/* eslint-disable react/prop-types */
import React from 'react';
import {ScrollView} from 'react-native';
import {theme} from './base';
import {defStyles} from './defaults/styles';

const AppScrollView = ({children, ...rest}) => {
  const {
    flex,
    center,
    centerX,
    centerY,
    grow,
    alignCenter,
    stretch,
    fullHeight,
    bgrdColor,
    defHPad,
    defBPad,
    ctStyle,
    horizontal,
    showHorInd,
  } = rest;

  const _style = [
    flex ? defStyles.flex : {},
    grow ? defStyles.grow : {},
    center ? defStyles.center : {},
    centerX ? defStyles.centerX : {},
    centerY ? defStyles.centerY : {},
    alignCenter ? defStyles.alignCenter : {},
    stretch ? defStyles.stretch : {},
    fullHeight ? defStyles.fullHeight : {},
    bgrdColor ? bgrdColor : {},
    defHPad ? theme.defPadding : {},
    defBPad ? defStyles.defBPad : {},
    ctStyle,
  ];
  return (
    <ScrollView
      contentContainerStyle={_style}
      {...{horizontal}}
      showsHorizontalScrollIndicator={showHorInd}>
      {children}
    </ScrollView>
  );
};

export default AppScrollView;
