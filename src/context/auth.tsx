import { useRouter, useSegments } from "expo-router";
import React, { useState } from "react";

import { User } from "@/database/models/User";

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

export function AuthProvider(props: { children: React.ReactNode }) {
  const [user, setAuth] = useState<User>();

  useProtectedRoute(user as User);

  return (
    <AuthContext.Provider
      value={{
        signIn: (authUser) => {
          setAuth(authUser);
        },
        signOut: () => setAuth(undefined),
        user,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
