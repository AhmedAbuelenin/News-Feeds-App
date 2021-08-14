/* eslint-disable react/prop-types */
import React from 'react'
import {theme} from './defaults/theme'
import AppView from './View'

const RadioBtn = ({
  pickedId,
  id,
  unchecked = theme.circle,
  outChecked = theme.outChecked,
  checked = theme.checkedCircle
}) => {
  const _unchecked = pickedId === id ? outChecked : unchecked

  return (
    <AppView style={_unchecked}>
      {pickedId === id ? <AppView style={checked} /> : null}
    </AppView>
  )
}

export default RadioBtn
