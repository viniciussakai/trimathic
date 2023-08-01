import User from "./models/User";

import { createRealmContext } from "@realm/react";

export const RealmContext = createRealmContext({
  schema: [User],
});

export const { RealmProvider, useObject, useQuery, useRealm } = RealmContext;
