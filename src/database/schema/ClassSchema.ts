import { tableSchema } from "@nozbe/watermelondb";

export const classSchema = tableSchema({
  name: "classes",
  columns: [
    { name: "name", type: "string" },
    { name: "unit", type: "string" },
    { name: "is_complete", type: "boolean" },

    { name: "created_at", type: "number" },
    { name: "updated_at", type: "number" },
  ],
});
