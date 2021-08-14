import {StyleSheet} from 'react-native';
import {colors} from './colors';
import {responsiveHeight, responsiveWidth} from '../utils/responsiveDimensions';
import {fonts} from './fonts';
import {defStyles} from './styles';

export const theme = StyleSheet.create({
  btn: {
    backgroundColor: colors.black.color,
    height: responsiveHeight(7),
  },
  bTitle: {
    color: colors.white.color,
    fontSize: 16,
    fontFamily: fonts.normal,
  },
  header: {
    backgroundColor: colors.black.color,
    height: responsiveHeight(8),
    paddingHorizontal: responsiveWidth(5),
  },
  headerTrp: {
    backgroundColor: colors.secondary.color,
    height: responsiveHeight(7),
    paddingHorizontal: responsiveWidth(4),
  },
  defColor: {
    backgroundColor: colors.primary.color,
  },
  defPadding: {
    paddingHorizontal: responsiveWidth(5),
  },
  hTStyle: {
    fontSize: 20,
    color: colors.white.color,
  },
  tInpStyle: {
    color: colors.black.color,
    fontSize: 14,
  },
  pHolderStyle: {
    color: colors.lightGrey.color,
  },
  inputCt: {
    height: responsiveHeight(7),
    paddingHorizontal: 0,
  },
  input: {
    height: responsiveHeight(7),
    backgroundColor: colors.white.color,
    paddingHorizontal: responsiveWidth(5),
    borderWidth: 1,
    borderColor: colors.black.color,
  },
  phColor: {
    color: colors.lightGrey.color,
  },
  picker: {
    height: responsiveHeight(7),
    backgroundColor: colors.white.color,
    borderRadius: 10,
    paddingHorizontal: responsiveWidth(4),
    borderColor: colors.white.color,
    alignItems: 'center',
    justifyContent: 'space-between',
    // marginBottom: responsiveHeight(2)
  },
  err: {
    fontSize: 13,
    color: colors.red.color,
    marginTop: responsiveHeight(1),
  },
  err2: {
    fontSize: 10,
    color: colors.red.color,
    marginTop: responsiveHeight(1),
    width: '45%',
  },
  err3: {
    fontSize: 13,
    color: colors.red.color,
    marginTop: responsiveHeight(1),
    marginBottom: responsiveHeight(3),
  },
  circle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.lightGrey3.color,
    alignItems: 'center',
    justifyContent: 'center',
  },
  outChecked: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.secondary.color,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkedCircle: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: colors.secondary.color,
  },
  cbCtStyle: {
    margin: 0,
    padding: 0,
  },
  uncheckedCb: {
    height: 20,
    width: 20,
    borderWidth: 2,
    borderColor: colors.black.color,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkedCb: {
    height: 10,
    width: 10,
    backgroundColor: colors.secondary.color,
  },
  item: {
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGrey.color,
    backgroundColor: colors.lightGreen.color,
    height: responsiveHeight(8),
    justifyContent: 'flex-end',
    paddingHorizontal: responsiveWidth(6),
  },
  checkRow: {
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGrey.color,
    backgroundColor: colors.lightGreen.color,
    height: responsiveHeight(8),
    justifyContent: 'flex-end',
    paddingHorizontal: responsiveWidth(3),
  },
  card: {
    height: responsiveHeight(7.5),
    borderRadius: 10,
    backgroundColor: colors.white.color,
    width: '100%',
    padding: 0,
    margin: 0,
    elevation: 0,
    shadowOpacity: 0,
    shadowColor: colors.white.color,
  },
  imgCard: {
    height: responsiveHeight(17.3),
    borderRadius: 10,
    backgroundColor: colors.white.color,
    width: responsiveHeight(17.3),
    padding: 0,
    margin: 0,
    elevation: 0,
    shadowColor: 'white',
    shadowOpacity: 0,
  },
  foucsInp: {
    borderWidth: 1,
    borderColor: colors.secondary.color,
    borderRadius: 10,
  },
  mandTStyle: {
    color: colors.lightGrey.color,
    fontSize: 12,
  },
  textW23: {
    width: responsiveWidth(20),
  },
  statusBar: {
    backgroundColor: colors.transp.color,
  },
  loading: {
    height: responsiveHeight(15),
    width: responsiveHeight(15),
    borderRadius: 10,
    backgroundColor: colors.white.color,
    padding: 0,
    margin: 0,
    elevation: 0,
    shadowOpacity: 0,
    shadowColor: colors.white.color,
  },
  modal: {
    margin: 0,
    justifyContent: 'flex-end',
  },
  upModal: {
    margin: 0,
    justifyContent: 'flex-start',
  },
  modalCt: {
    backgroundColor: colors.white.color,
    paddingHorizontal: responsiveWidth(3),
    height: '23%',
  },
  notificatCount: {
    height: responsiveHeight(3.5),
    width: responsiveHeight(3.5),
    borderRadius: responsiveHeight(1.75),
    top: responsiveHeight(1),
    left: responsiveWidth(3),
    backgroundColor: colors.darkYellow.color,
  },
  bellCt: {
    height: responsiveHeight(8),
    width: responsiveWidth(10),
  },
  centerModal: {
    margin: 0,
    justifyContent: 'center',
  },
});
