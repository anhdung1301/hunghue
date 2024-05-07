import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR, AUTH_CHECK } from 'react-admin';
import axios from 'axios';

const API_URL = 'http://localhost:8000/api'; // Your Laravel API URL

export default async (type, params) => {
  switch (type) {
    case AUTH_LOGIN:
      try {
        const { data } = await axios.post(`${API_URL}/login`, params);
        localStorage.setItem('token', data.token);
        return Promise.resolve();
      } catch (error) {
        showNotification('Error: comment not approved', 'warning')
        return Promise.reject(error);
      }
    case AUTH_LOGOUT:
      localStorage.removeItem('token');
      return Promise.resolve();
    case AUTH_ERROR:
      // Handle authentication errors
      return Promise.resolve();
    case AUTH_CHECK:
      return localStorage.getItem('token') ? Promise.resolve() : Promise.reject();
    default:
      return Promise.reject('Unknown method');
  }
};