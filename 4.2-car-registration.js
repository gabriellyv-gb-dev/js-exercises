const infosCar = {
    "brand": "Toyota",
    "model": "Supra MK4",
    "year": 1993,
    "price": 100000,
    "used": true
};

const currentYear = new Date().getFullYear();
const carAgeCalculation = currentYear - infosCar.year ;

function categorizingPrices( carPrice ) {
    if( carPrice <= 50000 ) return "Esse carro está com um preço econômico";
    if( carPrice <= 100000 ) return "Esse carro está com um preço intermediário";
    if( carPrice > 100000 ) return "O preço desse carro está categorizado como luxuoso";
};

const carRegistration = {
    "brand": infosCar.brand,
    "model": infosCar.model,
    "year": infosCar.year,
    "carAge": carAgeCalculation,
    "price": new Intl.NumberFormat("US", { style: "currency", currency: "USD" }).format( infosCar.price ),
    "priceClassification": categorizingPrices( infosCar.price ),
    "used": infosCar.carIsUsed ? 'Sim' : 'Não'
};
console.log( carRegistration )