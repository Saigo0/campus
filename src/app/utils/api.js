import axios from "axios";

const api = axios.create({
  baseURL: "/api",
});

let getTokenFn = null;

export function setTokenGetter(fn) {
  getTokenFn = fn;
}

api.interceptors.request.use((config) => {
  const token = getTokenFn ? getTokenFn() : null;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;