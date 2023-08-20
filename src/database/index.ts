import { Database } from "@nozbe/watermelondb";
import SQLiteAdapter from "@nozbe/watermelondb/adapters/sqlite";

import { Lesson } from "./models/Lesson";
import { Unit } from "./models/Unit";
import { User } from "./models/User";
import schema from "./schema/index";

const adapter = new SQLiteAdapter({
  schema,
  dbName: "TrimathicDb",

  onSetUpError: (error) => {
    console.error("[DB] Database failed to load:", error);
  },
});

export const database = new Database({
  adapter,
  modelClasses: [User, Unit, Lesson],
});
