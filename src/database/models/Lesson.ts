import { Model } from "@nozbe/watermelondb";
import {
  date,
  field,
  readonly,
  relation,
  text,
} from "@nozbe/watermelondb/decorators";

const sanitizeReactions = (json: any) => json;

export class Lesson extends Model {
  static table = "lessons";
  static associations = {
    unit: { type: "belongs_to", key: "unit_id" },
  } as const;

  @text("name") name!: string;
  @field("is_completed") isCompleted!: boolean;
  @relation("units", "unit_id") unit!: any;
  // @json("screens", sanitizeReactions) screens!: string;

  @readonly @date("created_at") createdAt!: number;
  @readonly @date("updated_at") updatedAt!: number;
}
