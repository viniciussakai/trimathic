import React, { useState } from "react";

import { User } from "@/database/models/User";
import AuthService from "@/services/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter, useSegments } from "expo-router";

type AuthValues = {
  signIn: (authUser: User) => void;
  signOut: () => void;
  user?: User;
};

const AuthContext = React.createContext<AuthValues>({} as AuthValues);

export function useAuth() {
  return React.useContext(AuthContext);
}

function useProtectedRoute(user: User) {
  const segments = useSegments();
  const router = useRouter();

  React.useEffect(() => {
    const inAuthGroup = segments[0] === "(auth)";
    const isUserLogged = !!user;
    const isIndex = segments.length === 0;

    if (inAuthGroup || isUserLogged || isIndex) return;

    router.replace("/(auth)/login");
  }, [user, segments]);
}

const checkIfUserIsLogged = async () => {
  try {
    const hasUserId = await AsyncStorage.getItem("trimathic:user.id");

    if (hasUserId) {
      const user = await AuthService.getUserById(hasUserId);

      return {
        id: user.id,
        name: user.name,
        email: user.email,
      };
    }
  } catch (error) {
    console.log(error);
  }
};

const setLocalUser = async (user: User) => {
  try {
    await AsyncStorage.setItem("trimathic:user.id", user.id.toString());
  } catch (error) {
    console.log(error);
  }
};

const removeLocalUser = async () => {
  try {
    await AsyncStorage.removeItem("trimathic:user.id");
  } catch (error) {
    console.log(error);
  }
};

export function AuthProvider(props: { children: React.ReactNode }) {
  const [user, setAuth] = useState<any>(checkIfUserIsLogged());

  useProtectedRoute(user);

  return (
    <AuthContext.Provider
      value={{
        signIn: (authUser) => {
          setAuth(authUser);
          setLocalUser(authUser);
        },
        signOut: () => {
          setAuth(undefined);
          removeLocalUser();
        },
        user,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
