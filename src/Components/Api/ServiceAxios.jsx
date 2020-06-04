import * as axios from "axios";
axios.defaults.baseURL = 'http://ryanliang.test/api/';

axios.interceptors.request.use(
  config => {
    if (!config.headers.Authorization) {
      const token = JSON.parse(localStorage.getItem("usertoken")).access_token;

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    return config;
  },
  error => Promise.reject(error)
);