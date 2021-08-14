/* eslint-disable react/prop-types */
import React from 'react';
import {Button} from 'react-native-elements';
import {defStyles, theme} from './base/index';

const AppButton = props => {
  const {
    title,
    ctStyle,
    bStyle = theme.btn,
    tStyle = defStyles.size16,
    icRight,
    icon,
    onPress,
    disabled,
    stretch,
    loading,
  } = props;

  const btnStyle = [stretch ? defStyles.stretch : {}, bStyle];

  return (
    <Button
      title={title}
      containerStyle={ctStyle}
      buttonStyle={btnStyle}
      titleStyle={tStyle}
      iconRight={icRight}
      icon={icon}
      onPress={onPress}
      disabled={disabled}
      loading={loading}
    />
  );
};

export default AppButton;
