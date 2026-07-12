const input1 = 10;
console.log( input1.toFixed(2) ) // 10.00

const input2 = 13.2
console.log( Math.pow(7, 3) ) // 343

const input3 = 12.2
console.log( Math.floor(input3) ) // 12
console.log( Math.ceil(input3) ) // 13

const marketList = [
    'Maçã',
    'Banana',
    'Laranja',
    'Leite',
    'Fígado',
    'Mamão',
    'Manga',
    'Uva',
    'Paçoca'
];

for( let i = 0; i < marketList.length; i++ ){
    console.log( marketList[i] )
};