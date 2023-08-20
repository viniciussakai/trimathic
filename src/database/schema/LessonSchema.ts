import { tableSchema } from "@nozbe/watermelondb";

export const LessonSchema = tableSchema({
  name: "lessons",
  columns: [
    { name: "unit_id", type: "string", isIndexed: true },
    { name: "name", type: "string" },
    // { name: "screens", type: "string" },
    { name: "is_completed", type: "boolean" },
    { name: "created_at", type: "number" },
    { name: "updated_at", type: "number" },
  ],
});
