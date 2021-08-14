import {StyleSheet} from 'react-native';
import {responsiveHeight, responsiveWidth} from '../utils/responsiveDimensions';
// import {getColors} from './colors'
import {fonts} from './fonts';

export const defStyles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  grow: {
    flexGrow: 1,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerX: {
    alignItems: 'center',
  },
  colStart: {
    alignItems: 'flex-start',
  },
  colEnd: {
    alignItems: 'flex-end',
  },
  centerY: {
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  rowReverse: {
    flexDirection: 'row-reverse',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  spaceAround: {
    justifyContent: 'space-around',
  },
  alignCenter: {
    alignSelf: 'center',
  },
  alignStart: {
    alignSelf: 'flex-start',
  },
  alignEnd: {
    alignSelf: 'flex-end',
  },
  stretch: {
    width: '100%',
  },
  fullHeight: {
    height: '100%',
  },
  rowStart: {
    justifyContent: 'flex-start',
  },
  rowEnd: {
    justifyContent: 'flex-end',
  },
  txtAlgRt: {
    textAlign: 'right',
  },
  bold: {
    fontFamily: fonts.bold,
  },
  normal: {
    fontFamily: fonts.normal,
  },
  size7: {
    fontSize: 7,
  },
  size9: {
    fontSize: 9,
  },
  size10: {
    fontSize: 10,
  },
  size12: {
    fontSize: 12,
  },
  size13: {
    fontSize: 13,
  },
  size14: {
    fontSize: 14,
  },
  size16: {
    fontSize: 16,
  },
  size17: {
    fontSize: 17,
  },
  size18: {
    fontSize: 18,
  },
  size20: {
    fontSize: 20,
  },
  size22: {
    fontSize: 22,
  },
  size32: {
    fontSize: 32,
  },
  bot10: {
    marginBottom: responsiveHeight(2),
  },
  botHalf: {
    marginBottom: responsiveHeight(0.5),
  },
  bot1: {
    marginBottom: responsiveHeight(1),
  },
  bot2: {
    marginBottom: responsiveHeight(2),
  },
  bot3: {
    marginBottom: responsiveHeight(3),
  },
  bot4: {
    marginBottom: responsiveHeight(4),
    backgroundColor: 'pink',
  },
  defBPad: {
    paddingBottom: responsiveHeight(3),
  },
  defTPad: {
    paddingTop: responsiveHeight(3),
  },
  absolute: {
    position: 'absolute',
  },
  margEnd3: {
    marginEnd: responsiveWidth(3),
  },
  'margEnd2.2': {
    marginEnd: responsiveWidth(2.2),
  },
  icInpStyle: {
    position: 'absolute',
    left: '5%',
    top: '25%',
    height: '100%',
  },
  width85: {
    width: '85%',
  },
  width90: {
    width: '90%',
  },
  top2: {
    marginTop: responsiveHeight(2),
  },
  top3: {
    marginTop: responsiveHeight(3),
  },
  top4: {
    marginTop: responsiveHeight(4),
  },
  textDecLine: {
    textDecorationLine: 'underline',
  },
  margstart3: {
    paddingStart: responsiveWidth(10),
  },
  mHorizont3: {
    marginHorizontal: responsiveWidth(3),
  },
});
