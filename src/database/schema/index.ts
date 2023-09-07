import { appSchema } from "@nozbe/watermelondb";

import { userSchema } from "./UserSchema";

export default appSchema({
  version: 1,
  tables: [userSchema],
});
