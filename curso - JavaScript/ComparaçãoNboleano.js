//Falsy:
//valores undefined
//null
//0
//false
//''
//NaN - not a number

//Truthy

let corPersonalizada = 'vermelho';
let corPadrão = 'azul';
let corPerfil = corPersonalizada || corPadrão;

console.log(corPerfil);