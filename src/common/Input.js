/* eslint-disable react/prop-types */
import React, {useCallback} from 'react';
import {TouchableOpacity} from 'react-native';
import {Input} from 'react-native-elements';
import {AppView, defStyles, theme} from './base/index';

const TextInput = props => {
  const {
    keyboardType,
    secured,
    ct = defStyles.bot3,
    ctStyle = theme.inputCt,
    inpCtStyle = theme.input,
    inpStyle = theme.tInpStyle,
    icStyle = defStyles.icInpStyle,
    pholderColor = theme.phColor.color,
    pholder,
    labelStyle,
    value,
    icon,
    maxLength,
    multiline,
    onSubmit,
    onChangeText,
    onPress,
  } = props;

  const handleChange = useCallback(
    value => {
      onChangeText(value);
    },
    [onChangeText],
  );

  return (
    <AppView style={ct}>
      <AppView row>
        <Input
          keyboardType={keyboardType}
          secureTextEntry={secured}
          inputStyle={inpStyle}
          containerStyle={ctStyle}
          inputContainerStyle={inpCtStyle}
          placeholder={pholder}
          placeholderTextColor={pholderColor}
          returnKeyType={'search'}
          onSubmitEditing={onSubmit}
          labelStyle={labelStyle}
          textAlign={'left'}
          value={value}
          onChangeText={handleChange}
          maxLength={maxLength}
          multiline={multiline}
        />
        <TouchableOpacity style={icStyle} onPress={onPress}>
          {icon}
        </TouchableOpacity>
      </AppView>
    </AppView>
  );
};

export default TextInput;
