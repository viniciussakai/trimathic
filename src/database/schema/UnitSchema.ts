import { tableSchema } from "@nozbe/watermelondb";

export const UnitSchema = tableSchema({
  name: "units",
  columns: [
    { name: "name", type: "string" },
    { name: "created_at", type: "number" },
    { name: "updated_at", type: "number" },
  ],
});
