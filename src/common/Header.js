/* eslint-disable curly */
/* eslint-disable react/prop-types */
import {useNavigation} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {
  AppIcon,
  AppText,
  AppView,
  colors,
  defStyles,
  iconsType,
  theme,
} from './base/index';
import {moderateScale} from './utils/responsiveDimensions';

const LeftComp = ({
  backBtn,
  navigation,
  menu,
  onBackPress,
  leftIcColor = colors.white.color,
}) => {
  const handlePress = useCallback(() => {
    if (onBackPress) onBackPress();
    else navigation.goBack();
  }, [navigation, onBackPress]);

  const toggleDrawer = useCallback(
    () => navigation.toggleDrawer(),
    [navigation],
  );

  if (backBtn) {
    return (
      <AppView touchableView onPress={handlePress}>
        <AppIcon type={iconsType.ant} name={'arrowleft'} color={leftIcColor} />
      </AppView>
    );
  } else if (menu) {
    return (
      <AppView touchableView onPress={toggleDrawer}>
        <AppIcon type={iconsType.feather} name={'menu'} color={leftIcColor} />
      </AppView>
    );
  }
  return null;
};

const CenterComp = ({
  tCtStyle = defStyles.margstart3,
  hTitle,
  hTStyle = theme.hTStyle,
}) => {
  return hTitle ? (
    <AppView grow style={tCtStyle}>
      <AppText tStyle={hTStyle}>{hTitle}</AppText>
    </AppView>
  ) : null;
};

const RightComp = ({
  search,
  onRightIcPress,
  rightIcColor = colors.white.color,
}) => {
  return search ? (
    <AppView touchableView onPress={onRightIcPress}>
      <AppIcon
        type={iconsType.ant}
        name={'search1'}
        color={rightIcColor}
        size={moderateScale(8)}
      />
    </AppView>
  ) : null;
};

const AppHeader = props => {
  const navigation = useNavigation();

  const {
    ctStyle,
    tCtStyle,
    hTitle,
    hTStyle = theme.hTStyle,
    backBtn,
    rightIcColor,
    leftIcColor,
    menu,
    search,
    onBackPress,
    onLeftIcPress,
    onRightIcPress,
    ...rest
  } = props;

  const contStyle = [theme.header, ctStyle];

  return (
    <AppView {...{...rest}} style={contStyle}>
      <LeftComp
        {...{leftIcColor}}
        {...{menu}}
        {...{backBtn}}
        {...{onBackPress}}
        {...{navigation}}
      />
      <CenterComp {...{tCtStyle}} {...{hTStyle}} {...{hTitle}} />
      <RightComp {...{rightIcColor}} {...{search}} {...{onRightIcPress}} />
    </AppView>
  );
};

export default AppHeader;
