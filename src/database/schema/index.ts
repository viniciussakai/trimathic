import { appSchema } from "@nozbe/watermelondb";

import { classSchema } from "./ClassSchema";
import { userSchema } from "./UserSchema";

export default appSchema({
  version: 1,
  tables: [userSchema, classSchema],
});
