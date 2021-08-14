/* eslint-disable react/prop-types */
import React from 'react'
import {
  AppModal,
  AppText,
  AppView,
  defStyles,
  responsiveHeight,
  theme
} from '../common/base/index'

const AlertModal = props => {
  const {
    isVisible,
    title,
    ctStyle = theme.modalCt,
    actTxtStyle1,
    actionText1,
    toggleModal
  } = props

  return (
    <AppModal {...{isVisible}}>
      <AppView style={ctStyle}>
        <AppView style={defStyles.top3}>
          <AppText size={defStyles.size16}>{title}</AppText>
        </AppView>
        <AppView
          colStart
          touchableView
          style={actTxtStyle1}
          onPress={toggleModal}>
          <AppText size={defStyles.size16}>{actionText1}</AppText>
        </AppView>
      </AppView>
    </AppModal>
  )
}

export default AlertModal
