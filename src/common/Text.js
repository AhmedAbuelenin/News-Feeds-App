/* eslint-disable react/prop-types */
import React from 'react';
import {Text} from 'react-native';
import {colors} from './defaults/colors';
// import AppView from './View'
// import {getColors} from './defaults/colors'
import {defStyles} from './defaults/styles';

const AppText = ({
  tStyle,
  bold,
  stretch,
  colStart,
  colEnd,
  size = defStyles.size14,
  color = colors.black,
  alignStart,
  alignEnd,
  center,
  onTextLayout,
  textDecLine,
  numberOfLines,
  children,
}) => {
  return (
    <Text
      style={[
        defStyles.normal,
        bold ? defStyles.bold : {},
        size,
        color,
        stretch ? defStyles.stretch : null,
        colStart ? defStyles.colStart : null,
        colEnd ? defStyles.colEnd : null,
        alignStart ? defStyles.alignStart : {},
        alignEnd ? defStyles.alignEnd : {},
        center ? defStyles.alignCenter : {},
        textDecLine ? defStyles.textDecLine : {},
        tStyle,
      ]}
      {...{numberOfLines}}
      {...{onTextLayout}}>
      {children}
    </Text>
  );
};

export default AppText;
