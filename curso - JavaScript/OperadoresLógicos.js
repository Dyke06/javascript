//Operador lógico And(&&)

let maiorDeidade = true;
let PossuiCarteira = true;
let podeAplicar = maiorDeidade && PossuiCarteira;

//console.log(podeAplicar)

//operador lógico or(||)
//retorna true se um dos operando forem true

console.log('Pode aplicar: ', podeAplicar);

//operador not(!)
let candidatoRecusado = !podeAplicar;

console.log('Candidato recusado: ', candidatoRecusado)
