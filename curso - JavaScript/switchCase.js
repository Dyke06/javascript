let permissao; //comum, gerente ou diretor
permissao = 'diretor';
number = 2;

switch(permissao){
    case 'comum':
        console.log('usuario comum');
        break;

    case 'gerente':
        console.log('usuario gerente');
        break;
    
    case 'diretor':
        console.log('usuario Diretor');
        break;
    
    default:
        console.log('Usuário não reconhecido.')
}