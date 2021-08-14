/* eslint-disable react/prop-types */
import React from 'react'
import {KeyboardAvoidingView, Platform} from 'react-native'
import {defStyles} from './defaults/styles'

const KBAvoidView = props => {
  const {flex = defStyles.flex, style, children} = props

  const _style = [flex, style]

  return (
    <KeyboardAvoidingView
      style={_style}
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
      {children}
    </KeyboardAvoidingView>
  )
}

export default KBAvoidView
