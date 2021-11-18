import axios from "axios";

const $axios = axios.create({
    baseURL: 'http://localhost:1337',
    timeout: 1000,
    headers: {'Content-Type': 'application/json'}
});

$axios.interceptors.request.use(function (config) {
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

$axios.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    return Promise.reject(error);
  });

export default $axios;