// BMI calculator


// Input
const personInfo = {
    "name": "Andreas",
    "weight": 43,
    "height": 1.51
};

// Utils
function validateString( value ){
    const isInvalid = 
        value === undefined
        || value === true
        || value == false
        || value === null
        || value === ''
        || typeof(value) != 'string'
        || value.length <= 0;
    
    if( isInvalid ) { 
        return true
    } else {
        return false
    }
};

function validateNumber( value ){
    const isInvalidNumber = 
        isNaN(value)
        || value === true
        || value === false
        || value <= 0
        || value === undefined
        || value === null;

    if( isInvalidNumber ){
        return true
    } else {
        return false
    }
};

// Validating
const invalidName = validateString(personInfo.name);
if ( invalidName ) return console.error('Nome de usuário inválido');

const invalidWeigth = validateNumber(personInfo.weight);
if ( invalidWeigth ) return console.error('Peso inválido');

const invalidHeight = validateNumber(personInfo.height);
if ( invalidHeight ) return console.error('Altura inválida');

// Calculating
const heightCalc = personInfo.height * personInfo.height;
const calculatedBMI = (personInfo.weight / heightCalc).toFixed(2);

// Return message
function bmiBasedReturnMessage() {
    if( calculatedBMI < 18.5  ) return `${personInfo.name}, você está abaixo do peso`;
    if( calculatedBMI <= 24.9 ) return `${personInfo.name}, você está com um peso normal`; 
    if( calculatedBMI <= 29.9 ) return `${personInfo.name}, você está com sobrepeso`;
    if( calculatedBMI <= 34.9 ) return `${personInfo.name}, você está com obesidade grau 1`; 
    if( calculatedBMI >= 35 ) return `${personInfo.name}, você está com obesidade grau 2`; 
};
const returnMessage = bmiBasedReturnMessage();
console.log( returnMessage );
console.log(`Seu IMC é: ${calculatedBMI}`);