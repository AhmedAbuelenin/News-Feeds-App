import {StyleSheet} from 'react-native';
import {responsiveHeight, responsiveWidth, colors} from '../../common/base';

export const styles = StyleSheet.create({
  avatar: {
    height: responsiveHeight(9),
    width: responsiveHeight(9),
    borderRadius: responsiveHeight(4.5),
  },
  arrow: {
    height: responsiveHeight(3),
    width: responsiveHeight(3),
  },
  info: {
    marginTop: responsiveHeight(3),
    marginBottom: responsiveHeight(5),
    // marginStart: responsiveWidth(6),
  },
  drawerLabel: {
    marginStart: responsiveWidth(-5),
    color: colors.black.color,
  },
  drawerItemStyle: {
    marginStart: responsiveWidth(-2),
  },
  ct: {
    width: '45%',
    marginStart: responsiveWidth(2),
  },
  arrowCt: {
    width: '20%',
  },
});
