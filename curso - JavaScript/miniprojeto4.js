//Velocidade maxima de 70km
//a cada 5km acima do limite vc ganha 1 ponto
//Math.floor()
//caso pontos maior que 12 -> 'Carteira suspendida

verificarVelocidade(80)

function verificarVelocidade(velocidade){
    if(velocidade <= 70){
        console.log('Ok')
    }
    else{
        let pontos = Math.floor((velocidade - 70) / 5);
        if(pontos > 12){
            console.log('Carteira suspensa.')
        }
        else{
            console.log('Pontos:',pontos)
        }
    }
}