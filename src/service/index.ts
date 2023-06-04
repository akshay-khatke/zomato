import axios from 'axios';

import { getAuthApi } from './api';
import { URL } from './urls';
import createAxios from './axios';

const { instance: authInstance, ...auth } = createAxios(URL.MAIN);
console.log(URL.MAIN,"main url")

const api = {
  auth: getAuthApi(auth),
};

const getToken = () => {
  return `Bearer ${axios.defaults.headers.common['Authorization']}`;
};

const setToken = (token: string) => {

  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  authInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

const refreshToken = async () => {

//   const user = await getItem(keys.User);

};

export { setToken, getToken, refreshToken };
export default api;
