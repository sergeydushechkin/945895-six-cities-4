import axios from "axios";

const SERVER = `https://4.react.pages.academy/six-cities`;
const TIMEOUT = 5000;

export const createAPI = (onError) => {
  const api = axios.create({
    baseURL: SERVER,
    timeout: TIMEOUT,
    withCredentials: true,
  });

  const onSuccess = (response) => {
    return response;
  };

  const onFail = (err) => {
    if (err.response && err.response.config.method === `post`) {
      throw err;
    }

    onError(err);

    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
