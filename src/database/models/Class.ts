import { Model } from "@nozbe/watermelondb";
import { date, readonly, text, writer } from "@nozbe/watermelondb/decorators";

export class Class extends Model {
  static table = "classes";

  @text("name") name!: string;
  @text("unit") unit!: string;
  @text("is_complete") is_complete!: boolean;

  @writer async markAsComplete() {
    await this.update((classes) => {
      classes.is_complete = true;
    });
  }

  @readonly @date("created_at") createdAt!: number;
  @readonly @date("updated_at") updatedAt!: number;
}
