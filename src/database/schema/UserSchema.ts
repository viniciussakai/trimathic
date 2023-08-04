import { tableSchema } from "@nozbe/watermelondb";

export const userSchema = tableSchema({
  name: "users",
  columns: [
    { name: "name", type: "string" },
    { name: "email", type: "string", isIndexed: true },
    { name: "password", type: "string" },
    { name: "created_at", type: "number" },
    { name: "updated_at", type: "number" },
  ],
});
