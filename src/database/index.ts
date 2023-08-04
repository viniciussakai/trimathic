import { Platform } from "react-native";
import { Database } from "@nozbe/watermelondb";
import SQLiteAdapter from "@nozbe/watermelondb/adapters/sqlite";

import schema from "./schema/index";
import { User } from "./models/User";

// First, create the adapter to the underlying database:
const adapter = new SQLiteAdapter({
  schema,
  // jsi: true,
  dbName: "TrimathicDb",

  onSetUpError: (error) => {
    console.error("[DB] Database failed to load:", error);
  },
});

export const database = new Database({
  adapter,
  modelClasses: [User],
});
