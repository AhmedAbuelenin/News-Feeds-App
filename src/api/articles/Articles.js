import axios from 'axios';
import I18n from 'i18n-js';
import {CONNECTION_ERROR, GENERAL_ERROR} from '../errorTypes';

export const getArticlesPart1 = async () => {
  try {
    const response = await axios.get(
      'articles?source=the-next-web&apiKey=1c0f731cca954a13875e6965f9c7e9de',
    );
    return response.data;
  } catch (error) {
    if (!error.response) {
      throw {
        type: CONNECTION_ERROR,
        message: I18n.t('ui-networkConnectionError'),
      };
    } else {
      throw {
        type: GENERAL_ERROR,
        message: error.response.data.msg,
      };
    }
  }
};

export const getArticlesPart2 = async () => {
  try {
    const response = await axios.get(
      'articles?source=associated-press&apiKey=1c0f731cca954a13875e6965f9c7e9de',
    );
    return response.data;
  } catch (error) {
    if (!error.response) {
      throw {
        type: CONNECTION_ERROR,
        message: I18n.t('ui-networkConnectionError'),
      };
    } else {
      throw {
        type: GENERAL_ERROR,
        message: error.response.data.msg,
      };
    }
  }
};
