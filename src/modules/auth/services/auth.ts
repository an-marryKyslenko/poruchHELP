import API from '../../shared/service/axios';
import { NewUser, UserLogin } from '../types';

const regist = async (userData: NewUser): Promise<unknown> => {
  const { data } = await API.post('/auth/regist', { data: userData });

  return data;
};

const login = async (userData: UserLogin): Promise<unknown> => {
  const { data } = await API.post('/auth/login', { data: userData });

  return data;
};

export const authAPI = {
  regist,
  login,
};
