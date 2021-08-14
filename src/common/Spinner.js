/* eslint-disable react/prop-types */
import React from 'react'
import {Overlay} from 'react-native-elements'
import {AppIndicator, AppView, theme} from './base/index'

const Spinner = ({loading}) => {
  return (
    <Overlay overlayStyle={theme.loading} isVisible={loading}>
      <AppView stretch fullHeight center>
        <AppIndicator {...{loading}} />
      </AppView>
    </Overlay>
  )
}

export default Spinner
