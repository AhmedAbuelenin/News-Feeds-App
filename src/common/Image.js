/* eslint-disable react/prop-types */
import React, {useEffect} from 'react';
import {Alert} from 'react-native';
import {ActivityIndicator} from 'react-native';
import {Image} from 'react-native-elements';
import {AppIndicator, AppView} from './base';
import {defStyles} from './defaults/styles';
import ValidError from './ValidError';

const AppImage = props => {
  const {
    ctStyle,
    imgStyle,
    source,
    loading,
    pHolderStyle,
    onPress,
    resizeMode,
    stretch,
    fullHeight,
    alignCr,
  } = props;

  const _ctStyle = [
    alignCr ? defStyles.alignCenter : {},
    stretch ? defStyles.stretch : {},
    fullHeight ? defStyles.fullHeight : {},
    ctStyle,
  ];

  return (
    <AppView>
      {loading ? (
        <AppView grow center style={_ctStyle}>
          <AppIndicator {...{loading}} />
        </AppView>
      ) : (
        <Image
          containerStyle={_ctStyle}
          style={imgStyle}
          source={source}
          placeholderStyle={pHolderStyle}
          resizeMode={resizeMode}
          onPress={onPress}
        />
      )}
    </AppView>
  );
};

export default AppImage;
