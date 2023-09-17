import { database } from "@/database";
import { User } from "@/database/models/User";
import { Q } from "@nozbe/watermelondb";
import * as Crypto from "expo-crypto";

type LoginData = {
  email: string;
  password: string;
};

class AuthService {
  async login(data: LoginData) {
    try {
      const hashPassword = await Crypto.digestStringAsync(
        Crypto.CryptoDigestAlgorithm.SHA256,
        data.password
      );

      const userExists = await database
        .get<User>("users")
        .query(
          Q.where("email", data.email),

          Q.where("password", hashPassword)
        )
        .fetch();

      if (userExists.length === 0) {
        throw new Error("Usuário não encontrado");
      }

      return userExists[0];
    } catch (e: any) {
      throw new Error(e);
    }
  }

  async register(user: User) {
    try {
      const hashPassword = await Crypto.digestStringAsync(
        Crypto.CryptoDigestAlgorithm.SHA256,
        user.password
      );

      await database.write(async () => {
        const newUser = await database.get<User>("users").create((newUser) => {
          newUser.name = user.name;
          newUser.email = user.email;
          newUser.password = hashPassword;
        });
        return newUser;
      });
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async getUserById(id: string) {
    try {
      const user = await database.get<User>("users").find(id);

      if (!user) {
        throw new Error("Usuário não encontrado");
      }

      return user;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async update(id: string, user: User) {
    try {
      return await database.write(async () => {
        const userUpdated = await this.getUserById(id);

        if (!userUpdated) {
          throw new Error("Usuário não encontrado");
        }

        await userUpdated.update((userUpdated) => {
          userUpdated.name = user.name || userUpdated.name;
          userUpdated.email = user.email || userUpdated.email;
          user.password = user.password || userUpdated.password;
        });

        return userUpdated;
      });
    } catch (error: any) {
      // throw new Error(error);
    }
  }
}

export default new AuthService();
