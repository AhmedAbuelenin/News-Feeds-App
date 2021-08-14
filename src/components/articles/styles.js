import {StyleSheet} from 'react-native';
import {colors, responsiveHeight, responsiveWidth} from '../../common/base';

export const styles = StyleSheet.create({
  card: {
    width: '100%',
    backgroundColor: colors.white.color,
    padding: 0,
    margin: 0,
    elevation: 0,
    shadowOpacity: 0,
    marginBottom: responsiveHeight(2),
  },
  img: {
    height: responsiveHeight(25),
    width: '100%',
  },
  ct: {
    marginVertical: responsiveHeight(1.5),
  },
  author: {
    marginTop: responsiveHeight(1),
  },
  ct2: {
    marginBottom: responsiveHeight(5),
    marginTop: responsiveHeight(3),
  },
  details: {
    marginTop: responsiveHeight(3),
    marginBottom: responsiveHeight(2),
    backgroundColor: colors.white.color,
  },
  authDetails: {
    marginTop: responsiveHeight(1),
    marginBottom: responsiveHeight(2),
  },
  ct3: {
    marginTop: responsiveHeight(2),
    marginBottom: responsiveHeight(3),
  },
  date: {
    right: responsiveWidth(2),
    bottom: responsiveWidth(2),
  },
  btn: {
    marginTop: responsiveHeight(1),
  },
  ct4: {
    marginVertical: responsiveHeight(1),
  },
});
