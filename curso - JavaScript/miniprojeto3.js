//Divisivel por 3 => Fizz
//Divisivel por 5 => Buzz
//Divisivel por 3 e 5 => FizzBuzz
//Não divisivek por 3 e 5 => entrada
//

const resultado = FizzBuzz();

console.log(resultado);

function FizzBuzz(entrada){

    if(typeof entrada !== 'number'){
        return 'Não é um numero';
    }

    else if(entrada % 3 === 0 && entrada % 5 === 0){
        return 'FizzBuzz';
    }

    else if(entrada % 3 === 0){
        return 'Fizz';
    }

    else if(entrada % 5 === 0){
        return 'Buzz';
    }
    else{
        return entrada;
    }

    

    
}