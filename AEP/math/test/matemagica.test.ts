import  Matemagica  from "../atividade/matemagica"
import { describe, test, expect } from "@jest/globals";

describe("Somatória de dois valores numéricos", () => {
  test("Deve retornar a somatória de dois valores", () => {
    const matemagica = new Matemagica();

    expect(matemagica.somar(1, 2)).toBe(3);
  });

  test("Deve retornar um erro ao somar uma string com um número", () => {
    const matemagica = new Matemagica();

    expect(matemagica.somar("aaa" as any, 2)).toBe(
      "Não é possivel somar string com número"
    );
  });
});
