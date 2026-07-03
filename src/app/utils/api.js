import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
});

let getTokenFn = null;

export function setTokenGetter(fn) {
  getTokenFn = fn;
}

api.interceptors.request.use((config) => {
  const token = getTokenFn ? getTokenFn() : null;

  const isBuscaHome = config.url === "/imoveis" && config.method === "get";

  const publicRoutes = [
    "/login",
    "/locador/cadastro",
  ];

  const isPublicRoute = publicRoutes.some((route) =>
    config.url?.startsWith(route)
  );

  if (token && !isPublicRoute && !isBuscaHome) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;