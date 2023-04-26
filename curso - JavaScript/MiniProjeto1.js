//Escreva um função que usa 2 número e retorna o maior entre eles.
let n1 = prompt('digite 1 número');
let n2 = prompt('digite um número: ');

let valorMaior = max(n1, n2);

console.log(valorMaior);

function max(v1, v2){
    if(v1 > v2){
       return v1;
    }
    else if(v1 === v2){
        return console.log('Não  números iguais viado.')
    }
    else{
       return v2;
    }
}


