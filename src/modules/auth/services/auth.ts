import API from '../../shared/service/axios';
import { NewUser, UserLogin } from '../types';

const regist = async (userData: NewUser): Promise<unknown> => {
  const { data } = await API.post('/auth/registration', userData );

  return data;
};

const login = async (userData: UserLogin): Promise<{token: string}> => {
  const { data } = await API.post('/auth/login', userData);

  return data;
};

export const authAPI = {
  regist,
  login,
};
