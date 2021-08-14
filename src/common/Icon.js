/* eslint-disable react/prop-types */
import React from 'react'
import {colors} from './defaults/colors'

const Icon = props => {
  const {
    type: IconType,
    name,
    color = colors.darkGrey2.color,
    size = 25,
    style
  } = props

  return <IconType name={name} color={color} style={style} size={size} />
}

export default Icon
