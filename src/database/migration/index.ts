import { Database } from "@nozbe/watermelondb";
import { Class } from "../models/Class";

export const localLessons = [
  {
    name: "retangulo",
    unit: "Area figuras Planas",
  },
  {
    name: "area_retangulo",
    unit: "Area figuras Planas",
  },
  {
    name: "area_triangulo",
    unit: "Area figuras Planas",
  },
  {
    name: "trapezio",
    unit: "Area figuras Planas",
  },
  {
    name: "triangulo_retangulo",
    unit: "Area figuras Planas",
  },
  {
    name: "triangulo_equilatero",
    unit: "Area figuras Planas",
  },
  {
    name: "circulo",
    unit: "Area figuras Planas",
  },
  {
    name: "relacoes_trigonometricas",
    unit: "Trigonometria e Angulos",
  },
  {
    name: "grau",
    unit: "Trigonometria e Angulos",
  },
  {
    name: "quadrantes",
    unit: "Trigonometria e Angulos",
  },
  {
    name: "sen_cos",
    unit: "Trigonometria e Angulos",
  },
  {
    name: "relacao_sen_cos",
    unit: "Trigonometria e Angulos",
  },
  {
    name: "circulo_trigonometrico",
    unit: "Trigonometria e Angulos",
  },
];

export const migrate = async (database: Database) => {
  await database.write(async (writer) => {
    try {
      const classRepositry = await database.get<Class>("classes");

      for (let i = 0; i < localLessons.length; i++) {
        const { name, unit } = localLessons[i];

        await classRepositry.create((record) => {
          record.name = name;
          record.unit = unit.toString();
          record.is_complete = "false";
        });
      }
    } catch (e) {
      console.error(e);
    }
  });
};
