//for-in

const pessoa = {
    nome: 'jhon',
    idade: 25
};

for(let chave in pessoa){
    console.log(chave, pessoa);
}

const cores = ['vermelho', 'azul', 'Blue', 'Green'];

for(let indice in cores){
    console.log(indice, cores[indice])
}