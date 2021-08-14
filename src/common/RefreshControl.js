/* eslint-disable react/prop-types */
import React from 'react'
import {RefreshControl} from 'react-native'
import {colors} from './base/index'

const Refresh = props => {
  const {refreshing, onRefresh, indictColor = colors.secondary.color} = props

  return (
    <RefreshControl
      tintColor={indictColor}
      refreshing={refreshing}
      onRefresh={onRefresh}
    />
  )
}

export default Refresh
