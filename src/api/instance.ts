import axios from 'axios';
import useUserStore from '../store/useUserStore';

const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
});

instance.interceptors.request.use(
  (config) => {
    const userId = useUserStore.getState().id;
    if (userId) {
      config.headers['userId'] = userId;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default instance;
