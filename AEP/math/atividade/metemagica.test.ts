import Matemagica from "./matemagica";

describe('Matemagica', () => {
  let matemagica: Matemagica;

  beforeEach(() => {
    matemagica = new Matemagica();
  });

  describe('adicao', () => {
    test('retorna a soma de dois números', () => {
      const resultado = matemagica.adicao(2, 3);
      expect(resultado).toBe(5);
    });
  });

  describe('subtracao', () => {
    test('retorna a diferença entre dois números', () => {
      const resultado = matemagica.subtracao(5, 2);
      expect(resultado).toBe(3);
    });
  });

  describe('divisao', () => {
    test('retorna o quociente da divisão entre dois números', () => {
      const resultado = matemagica.divisao(10, 2);
      expect(resultado).toBe(5);
    });

    test('retorna um erro ao dividir por zero', () => {
      expect(() => {
        matemagica.divisao(10, 0);
      }).toThrow('Divisão por zero não é permitida.');
    });
  });

  describe('multiplicacao', () => {
    test('retorna o produto de dois números', () => {
      const resultado = matemagica.multiplicacao(2, 3);
      expect(resultado).toBe(6);
    });
  });
});