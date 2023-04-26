//if..else

//se a hora estiver entre 06:00 até 12:00: Bom dia
//Se estiver entre 12:00 até 18:00 : boa tarde
//caso : boa noite

let horas = prompt('Digite o horário: ');

if(horas > 6 && horas < 12){
    console.log('Bom dia!');
}

else if(horas > 12 && horas <= 18){
    console.log('Boa Tarde!');
}

else{
    console.log("Boa noite!");
}