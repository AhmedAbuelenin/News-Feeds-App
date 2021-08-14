/* eslint-disable react/prop-types */
import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {defStyles} from './defaults/styles';
import {theme} from './defaults/theme';

const NativeView = ({touchableView, children, onPress, style, ...rest}) => {
  const {
    flex,
    center,
    centerX,
    centerY,
    grow,
    row,
    colStart,
    colEnd,
    rowReverse,
    spaceBetween,
    spaceAround,
    spAround,
    alignEnd,
    alignCenter,
    stretch,
    fullHeight,
    rowStart,
    rowEnd,
    bgrdColor,
    disabled,
    defHPad,
    defBPad,
    defTPad,
    absolute,
    opacity = 0,
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
    spaceAround ? defStyles.spaceAround : {},
    spAround ? defStyles.spaceAround : {},
    alignEnd ? defStyles.alignEnd : {},
    alignCenter ? defStyles.alignCenter : {},
    stretch ? defStyles.stretch : {},
    fullHeight ? defStyles.fullHeight : {},
    rowStart ? defStyles.rowStart : {},
    rowEnd ? defStyles.rowEnd : {},
    colStart ? defStyles.colStart : {},
    colEnd ? defStyles.colEnd : {},
    bgrdColor ? bgrdColor : {},
    defHPad ? theme.defPadding : {},
    defBPad ? defStyles.defBPad : {},
    defTPad ? defStyles.defTPad : {},
    absolute ? defStyles.absolute : {},
    style,
  ];

  const Container = touchableView ? TouchableOpacity : View;

  return (
    <Container
      style={_style}
      {...{onPress}}
      {...{disabled}}
      activeOpacity={opacity}>
      {children}
    </Container>
  );
};

export default NativeView;
