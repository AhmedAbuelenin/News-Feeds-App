import Snackbar from 'react-native-snackbar'
// import store from '../../store/store'
import I18n from 'i18n-js'
import {colors} from '../defaults/colors'

export const showInfo = (message, rtl) => {
  Snackbar.show({
    text: message,
    textColor: colors.black.color,
    duration: Snackbar.LENGTH_SHORT,
    backgroundColor: colors.warning.color,
    // rtl: store.getState().lang.rtl,
    action: {
      text: I18n.t('ui-close'),
      textColor: colors.black.color
    }
  })
}

export const showSuccess = (message, duration) => {
  Snackbar.show({
    text: message,
    textColor: colors.white.color,
    duration: duration || Snackbar.LENGTH_SHORT,
    backgroundColor: colors.success.color,
    // rtl: store.getState().lang.rtl,
    action: {
      text: I18n.t('ui-close'),
      textColor: colors.black.color
    }
  })
}

export const showError = (message, rtl) => {
  Snackbar.show({
    text: message,
    duration: Snackbar.LENGTH_LONG,
    backgroundColor: colors.error.color,
    // rtl: store.getState().lang.rtl,
    action: {
      text: I18n.t('ui-close'),
      textColor: colors.black.color
    }
  })
}
