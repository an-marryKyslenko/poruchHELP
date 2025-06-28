import { User } from '../shared/types/authTypes';

export type NewUser = Omit<User, 'id'>;
export type UserLogin = Partial<User>;
