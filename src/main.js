export default class App {

    factorial(numero){
        let final = 1;

        for(let i = 1; i <= numero; i = i + 1){
            final = final * i;
        }

      return final;
    }
}

let app = new App();

console.log(app.factorial(6));