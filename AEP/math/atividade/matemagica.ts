class Matemagica {
    somar(arg0: number, arg1: number): any {
        throw new Error("Method not implemented.");
    }
    adicao(numero1: number, numero2: number): number {
      return numero1 + numero2;
    }
  
    subtracao(numero1: number, numero2: number): number {
      return numero1 - numero2;
    }
  
    divisao(numero1: number, numero2: number): number {
      if (numero2 === 0) {
        throw new Error('Divisão por zero não é permitida.');
      }
      return numero1 / numero2;
    }
  
    multiplicacao(numero1: number, numero2: number): number {
      return numero1 * numero2;
    }
  }
  
  export default Matemagica;