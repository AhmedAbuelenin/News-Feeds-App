/* eslint-disable react/prop-types */
import React from 'react'
import {Card} from 'react-native-elements'

const AppCard = props => {
  const {cardStyle, children} = props

  return <Card containerStyle={cardStyle}>{children}</Card>
}

export default AppCard
