import { User } from "@/database/models/User";
import { localstorage } from "@/services/localstorage";
import { create } from "zustand";

interface AuthState {
  user: User;
  signIn: (user: User) => void;
  signOut: () => void;
}

const setLocalUser = (user: User) => {
  localstorage.set("trimathic:user.id", user.id.toString());
};

const removeLocalUser = () => {
  localstorage.delete("trimathic:user.id");
};

export const useAuthStore = create<AuthState>()((set) => ({
  user: {} as User,

  signIn: (user) =>
    set((state) => {
      setLocalUser(user);
      return { user };
    }),

  signOut: () =>
    set((state) => {
      removeLocalUser();
      return { user: {} as User };
    }),
}));
