/* eslint-disable react/prop-types */
import React from 'react';
import {theme} from '../common/base/index';
import Modal from 'react-native-modal';

const AppModal = props => {
  const {
    style,
    children,
    isVisible,
    onBackBtnPress,
    onBackdropPress,
    onSwipeComplete,
    swipeDirection = 'down',
  } = props;
  return (
    <Modal
      isVisible={isVisible}
      onBackButtonPress={onBackBtnPress}
      onBackdropPress={onBackdropPress}
      onSwipeMove={onSwipeComplete}
      swipeDirection={swipeDirection}
      hideModalContentWhileAnimating={true}
      useNativeDriver={true}
      style={style}>
      {children}
    </Modal>
  );
};

export default AppModal;
