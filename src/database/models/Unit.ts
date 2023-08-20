import { Model } from "@nozbe/watermelondb";
import { children, date, readonly, text } from "@nozbe/watermelondb/decorators";
import { Lesson } from "./Lesson";

export class Unit extends Model {
  static table = "units";
  static associations = {
    lessons: { type: "has_many", foreignKey: "unit_id" },
  } as const;

  @text("name") name!: string;
  @children("lessons") lessons!: Lesson[];

  @readonly @date("created_at") createdAt!: number;
  @readonly @date("updated_at") updatedAt!: number;
}
