import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, ReactNode, useEffect, useState } from "react";

export type User = {
  firstName: string;
  lastName: string;
  email: string;
  pref?: Preferences;
};

type Preferences = {
  orderStatus: boolean;
  passwordChange: boolean;
  specialOffer: boolean;
  newsletter: boolean;
};

type AuthContextType = {
  isLoggedIn: boolean;
  user: User | null;
  loading: boolean;
  login: (userData: User, token: string) => Promise<void>;
  logout: () => Promise<void>;
  savePreferences: (preferences: Preferences) => Promise<void>;
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const token = await AsyncStorage.getItem("userToken");
      const userData = await AsyncStorage.getItem("userData");
      if (token && userData) {
        setIsLoggedIn(true);
        setUser(JSON.parse(userData));
      }
      setIsLoading(false);
    };

    checkLoginStatus();
  }, []);

  const login = async (userData: User, token: string) => {
    const defaultPreferences: Preferences = {
      orderStatus: true,
      passwordChange: true,
      specialOffer: false,
      newsletter: false,
    };
    const userWithDefaults: User = {
      ...userData,
      pref: userData.pref || defaultPreferences,
    };

    await AsyncStorage.setItem("userToken", token);
    await AsyncStorage.setItem("userData", JSON.stringify(userWithDefaults));
    setIsLoggedIn(true);
    setUser(userWithDefaults);
  };

  const logout = async () => {
    await AsyncStorage.removeItem("userToken");
    await AsyncStorage.removeItem("userData");
    setIsLoggedIn(false);
    setUser(null);
  };

  const savePreferences = async (preferences: Preferences) => {
    if (!user) {
      throw new Error("User is not logged in");
    }

    const updatedUser: User = {
      ...user,
      pref: preferences,
    };

    await AsyncStorage.setItem("userData", JSON.stringify(updatedUser));

    setUser(updatedUser);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        user,
        loading: isLoading,
        login,
        logout,
        savePreferences,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
