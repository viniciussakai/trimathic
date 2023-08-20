import { database } from "@/database";
import { Lesson } from "@/database/models/Lesson";
import { Unit } from "@/database/models/Unit";
import { groupBy } from "lodash";

const unidades = ["Área de figuras", "Relações triângulo"];
const lessons = [
  { name: "retangulo", unit_id: 1 },
  { name: "triangulo", unit_id: 1 },
  { name: "trapezio", unit_id: 1 },
  { name: "triangulo retangulo", unit_id: 2 },
  { name: "triangulo retangulo", unit_id: 2 },
];

const lessonByUnit = Array.from(
  Object.values(groupBy(lessons, (n: any) => n.unit_id))
);

export const initializeLessons = async () => {
  try {
    await database.write(async () => {
      unidades.map(async (name, index) => {
        const newUnit = await database.collections
          .get<Unit>("units")
          .create((unit) => {
            unit.name = name;
            unit.lessons = [
              ...lessonByUnit[index].map(
                (lesson: any) =>
                  ({
                    name: lesson.name,
                  } as Lesson)
              ),
            ];
          });

        return newUnit.id;
      });
    });

    console.log(lessonByUnit[1]);

    console.log("unidades criadas");

    const units = await database.collections.get<Unit>("units").query().fetch();
    console.log(units[1]);
  } catch {
    console.log("erro ao criar unidades");
  }
};
