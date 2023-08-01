import { Realm } from "@realm/react";

class User extends Realm.Object<User> {
  _id!: string;
  name!: string;
  email!: string;
  password!: string;
  createdAt!: Date;

  static schema = {
    name: "User",

    properties: {
      _id: "string",
      name: "string",
      email: "string",
      password: "string",
      createdAt: "date",
    },

    primaryKey: "_id",
  };
}

export default User;
