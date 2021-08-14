/* eslint-disable react/prop-types */
import React from 'react';
import {Rating} from 'react-native-elements';
import {colors, defStyles, moderateScale} from './base/index';

const AppRating = props => {
  const {
    readonly = true,
    rating,
    rateColor = colors.yellow.color,
    rateTextColor = colors.darkGrey.color,
    rateCount = 5,
    minRating = 1,
    imgSize = moderateScale(6),
    colEnd,
    style,
    rateBgColor,
  } = props;

  const _style = [colEnd ? defStyles.colEnd : {}, style];

  return (
    <Rating
      style={_style}
      type="custom"
      readonly={readonly}
      startingValue={rating}
      minValue={minRating}
      ratingColor={rateColor}
      ratingTextColor={rateTextColor}
      ratingCount={rateCount}
      imageSize={imgSize}
      onStartRating={() => {}}
      onFinishRating={() => {}}
      ratingBackgroundColor={rateBgColor}
    />
  );
};

export default AppRating;
