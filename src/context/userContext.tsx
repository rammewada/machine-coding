import { createContext, useContext, useState, type ReactNode } from "react";

type User = {
  id: number;
  name: string;
  email: string;
};

type AuthContextType = {
  user: User;
  login: (user: User) => void;
  logout: () => void;
};

type UserProviderType = {
  children: ReactNode;
};

const UserContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: UserProviderType) {
  const [user, setUser] = useState<User>({
    id: 23,
    name: "Ram",
    email: "ram@gmail.com",
  });

  const login = (user: User) => {
    return null;
  };

  const logout = () => {
    return null;
  };

  return (
    <UserContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

const useAuth = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useAuth should we use inside AuthProvider");
  }
  return context;
};

export default useAuth;
