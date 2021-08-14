/* eslint-disable react/prop-types */
import React from 'react'
import AppText from './Text'
import {theme} from './defaults/theme'

const ValidError = props => {
  const {error, tStyle = theme.err, numberOfLines} = props

  return (
    <AppText tStyle={tStyle} {...{numberOfLines}}>
      {error}
    </AppText>
  )
}

export default ValidError
