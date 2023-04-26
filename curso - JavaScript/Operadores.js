//Operadores aritimeticos
//operadores de atribuição
//operadores de comparação
//operadores lógicos
//operadores bitwise

//let salario = parseInt(prompt('Qual o valor do salário: '));
//let porcentual = parseFloat(prompt('Qual o valor do reajuste: '));

//let aumento = (porcentual) * salario/100;
//let resultado = salario + aumento;
//alert(resultado);

//et totalVendas =parseInt (prompt('Escreva o total de vendas: '));
//let carrosVendidos = parseInt(prompt('Escreva quantos carros foram vendidos: '));
//let valorPorcarro = parseInt(prompt('Escreva o valor que vc receb por cada carro: '));
//let salarioFixo = parseInt(prompt('Digite seu sálario fixo: '));

//let resultado = salarioFixo + (carrosVendidos * valorPorcarro) + (totalVendas * 5/100);

//alert(resultado)

//let nota1 = parseInt(prompt('nota 1: '))
//let nota2 = parseInt(prompt('nota 2: '))
// nota3 = parseInt(prompt('nota 3: '))
//let resultado = (nota1 * 2 + nota2 * 3 + nota3 * 5) / 10;
//alert('Sua nota final: ' + resultado)

//let qmax = parseInt(prompt('Digite a quantidade max: '));
//let qmin = parseInt(prompt('Quantidade mínima: '));
//let qatual = parseInt(prompt('Digite a quantidade atual: '))

//let media = (qmax + qmin)/2;

//if(qatual >= media){
    //alert('Não efetuar a compra: ');
//}
//else{
   // alert('Efetuar a compra: ');
//}

//let n1 = parseInt(prompt('Digite um valor: '))
//let n2 = parseInt(prompt('Digite um valor: '))
//let n3 = parseInt(prompt('Digite um valor: '))

//if(n1 > n2  && n1 > n3){
    //alert('O maior valor é: ' + n1)
//}
//else if(n2 > n1 && n2 > n3){
   // alert('O maior valor é: ' + n2)
//}
//else if(n3 > n1 && n3 > n2){
   // alert("O maior valor é: " + n3)
//}



let n1 = parseInt(prompt('Digite um valor: '))
let n2 = parseInt(prompt('Digite um valor: '))
let n3 = parseInt(prompt('Digite um valor: '))

if(n1 > n2 & n2 > n3){
    alert('A ordem é: '+ n1 + ' ' + n2 + ' ' + n3)
}