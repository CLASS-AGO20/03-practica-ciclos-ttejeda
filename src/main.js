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
        let i = 1;
        let divisible = 0;

        do {
            if(numero % i == 0){
                divisible = divisible + 1;
            }

            i = i + 1;  
        } while (i <= numero)

      return divisible;
    }
}

let app = new App();

console.log(app.factorial(6));

console.log(app.convertirAString(3));

console.log(app.obtenerDivisibles(6));