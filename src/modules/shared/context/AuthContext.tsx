import { createContext, ReactNode, useContext, useState } from 'react';
import { User } from '../types/authTypes';

type AuthContextType = {
  user: User | null;
  isAuth: boolean;
  saveUser: (user: User) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuth, setIsAuth] = useState(false);

  const logout = () => {
    setUser(null);
    setIsAuth(false);
  };

  const saveUser = (userData: User) => {
    setUser(userData);
    setIsAuth(true);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuth,
        logout,
        saveUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }

  return context;
};
