import React from "react";

import { useAuthStore } from "@/context/auth";
import AuthService from "@/services/auth";
import { localstorage } from "@/services/localstorage";
import { useRouter, useSegments } from "expo-router";

const hasUserId = () => {
  const localUserId = localstorage.getString("trimathic:user.id");
  if (!localUserId) return false;
  return localUserId;
};

export function useProtectedRoute() {
  const segments = useSegments();
  const router = useRouter();
  const { signIn, user } = useAuthStore();

  React.useEffect(() => {
    const inAuthGroup = segments[0] === "(auth)";
    const hasId = hasUserId();
    const isIndex = segments.length === 0;

    if (hasId && user.id !== hasId) {
      AuthService.getUserById(hasId).then((user) => signIn(user));
    }

    if (inAuthGroup || hasId || isIndex) return;

    router.replace("/(auth)/login");
  }, [user, segments]);
}
