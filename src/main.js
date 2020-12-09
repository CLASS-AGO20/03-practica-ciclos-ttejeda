export default class App {

    factorial(numero){
        let final = 1;

        for(let i = 1; i <= numero; i = i + 1){
            final = final * i;
        }

      return final;
    }

    convertirAString(numero){
        let i = 0;
        let asteriscos = "";

        while(i < numero){
            asteriscos = asteriscos + "*";
            i = i + 1;
        }

      return asteriscos;
    }

    obtenerDivisibles(numero){
        let i = numero;
        let divisible = 0;
        let n = numero;

        do {
            if(n % i == 0){
                divisible = divisible + 1;
            }

            i = i - 1;
        } while (i >= 0);

      return divisible;
    }

    elevar(numero, potencia){
        let resultado = 1;

        for(let i = 1; i <= potencia; i = i +1){
            resultado = resultado * numero;
        }

      return resultado;
    }
}

let app = new App();

console.log(app.factorial(6));

console.log(app.convertirAString(3));

console.log(app.obtenerDivisibles(6));

console.log(app.elevar(3, 3));