import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

const accessToken = localStorage.getItem('accessToken') || '';

API.interceptors.request.use(config => {
  const newConfig = {...config};

  if (accessToken) {
    newConfig.headers.Authorization = `Bearer ${accessToken}`;
  }

  return newConfig;
});

API.interceptors.response.use(
  res => res,
  async error => {
    // const originalRequest = error.config;

    // if(error.response?.status === 401 && !originalRequest._retry) {
    //   originalRequest._retry = true;

    //   try {
    //     const res = await API.post('/auth/refresh', {
    //       withCredentials: true
    //     });

    //     accessToken = res.data.accessToken;
    //     localStorage.setItem('accessToken', accessToken);

    //     originalRequest.headers.Authorization = `Bearer ${accessToken}`;

    //     return API(originalRequest);
    //   } catch (err) {
    //     // window.location. href = '/login';
    //     console.error('Refresh token failed', error);
    //     return Promise.reject(err)
    //   }
    // }

    return Promise.reject(error);
  },
);

export default API;
