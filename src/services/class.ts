import { database } from "@/database";
import { Class } from "@/database/models/Class";

class ClassService {
  async getClassById(id: string) {
    try {
      const user = await database.get<Class>("classes").find(id);

      if (!user) {
        throw new Error("Aula não encontrado");
      }

      return user;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async update(id: string) {
    try {
      return await database.write(async () => {
        const classUpdated = await this.getClassById(id);

        if (!classUpdated) {
          throw new Error("Aula não encontrado");
        }

        await classUpdated.update((classUpdated) => {
          classUpdated.name = classUpdated.name;
          classUpdated.unit = classUpdated.unit;
          classUpdated.is_complete = "verdadeiro";
        });

        console.log(classUpdated);

        return classUpdated;
      });
    } catch (error: any) {
      // throw new Error(error);
    }
  }
}

export default new ClassService();
