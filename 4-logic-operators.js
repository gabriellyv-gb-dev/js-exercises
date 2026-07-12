// Logic Operators

const age = 18
if(age >= 18 ){
	console.log('Pode Dirigir')
} else {
	console.log('Não pode dirigir')
}

const smartphone = {
    "battery": 50,
    "isOn": true,
    "connectedOnInternet": true
}

if ( smartphone.battery <= 0 || smartphone.isOn == false ){
    console.log( 'Não é possível fazer ligações, o celular está desligado.' )
} else if( smartphone.battery <= 10 ) {
    console.log( 'Não é possível fazer chamadas de vídeo.' )
} else if( smartphone.connectedOnInternet == false ) {
    console.log( 'O celular não está conectado a Internet.' ) 
} else {
    console.log( 'Tudo certo!' )
}