import axios from 'axios';
import * as urls from './urls';

export default () => {
  // Add a request interceptor
  axios.interceptors.request.use(
    config => {
      config.baseURL = urls.APP_BASE_URL;
      return {
        ...config,
        headers: {
          ...config.headers,
          // 'Accept-Language': 'ar',
          // Authorization: store.getState().user.data
          //   ? store.getState().user.data.token
          //   : null,
        },
      };
    },
    error => {
      // TODO custom error interseptor
      return Promise.reject(error);
    },
  );
};
