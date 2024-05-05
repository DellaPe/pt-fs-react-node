import { ROUTES_API } from "./api/api.router";

const BASE_URL_API = '/api';
export const API = {
  BASE: BASE_URL_API,
  FILES: `${BASE_URL_API}/${ROUTES_API.FILES}`,
  USERS: `${BASE_URL_API}/${ROUTES_API.USERS}`,
} as const