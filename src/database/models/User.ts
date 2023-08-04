import { Model } from "@nozbe/watermelondb";
import { date, readonly, text } from "@nozbe/watermelondb/decorators";

export class User extends Model {
  static table = "users";

  @text("email") email!: string;
  @text("name") name!: string;
  @text("password") password!: string;

  @readonly @date("created_at") createdAt!: number;
  @readonly @date("updated_at") updatedAt!: number;
}
