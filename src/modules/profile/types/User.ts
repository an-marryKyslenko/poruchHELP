export type UserRole = 'ambassador' | 'admin' | 'user';

export interface UserProfile {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  avatarUrl?: string;
  role: UserRole;
  adress?: string;
  bio?: string;
}
