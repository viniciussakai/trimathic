import { appSchema } from "@nozbe/watermelondb";
import { LessonSchema } from "./LessonSchema";
import { UnitSchema } from "./UnitSchema";
import { userSchema } from "./UserSchema";

export default appSchema({
  version: 1,
  tables: [userSchema, UnitSchema, LessonSchema],
});
