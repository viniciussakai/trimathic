import { Database } from "@nozbe/watermelondb";
import { Class } from "../models/Class";

const lessons = [
  {
    name: "retangulo",
    unit: 1,
  },
  {
    name: "triangulo",
    unit: 1,
  },
  {
    name: "trapezio",
    unit: 1,
  },
  {
    name: "triangulo retangulo",
    unit: 2,
  },
  {
    name: "triangulo retangulo",
    unit: 2,
  },
];

export const migrate = async (database: Database) => {
  await database.write(async (writer) => {
    try {
      const classRepositry = await database.get<Class>("classes");

      for (let i = 0; i < lessons.length; i++) {
        const { name, unit } = lessons[i];

        await classRepositry.create((record) => {
          record.name = name;
          record.unit = unit.toString();
        });
      }
    } catch (e) {
      console.error(e);
    }
  });
};
