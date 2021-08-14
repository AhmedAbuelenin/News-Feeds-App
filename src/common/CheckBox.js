/* eslint-disable react/prop-types */
import React, {useEffect} from 'react'
import {CheckBox} from 'react-native-elements'
import {AppView, colors, defIcons, defStyles, theme} from './base'

const Checkbox = ({
  cbCtStyle = theme.cbCtStyle,
  checked,
  onPress,
  checkedIcon = defIcons.checkedBx,
  uncheckedIcon = defIcons.uncheckedBx(),
  setFieldValue,
  schKey,
  disabled = false
}) => {
  useEffect(() => {
    if (schKey) {
      setFieldValue(schKey, checked)
    }
  }, [checked])

  return !disabled ? (
    <CheckBox
      containerStyle={cbCtStyle}
      {...{checked}}
      {...{onPress}}
      {...{checkedIcon}}
      {...{uncheckedIcon}}
      checkedColor={colors.secondary.color}
    />
  ) : (
    <AppView style={defStyles['margEnd2.2']}>{uncheckedIcon}</AppView>
  )
}

export default Checkbox
