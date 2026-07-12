// Arrays

const marketList1 = [
    'Abobora',
    'Arroz',
    'Amora',
    'Abacate'
];

console.log( 'Lista de compras 1:' );
console.log( marketList1[0] );
console.log( marketList1[1] );
console.log( marketList1[2] );
console.log( marketList1[3] );
console.log( '-----------------------' )

const marketList2 = [
    {
        "name": 'Abacate',
        "price": 3
    },

    {
        "name": 'Arroz',
        "price": 25
    },

    {
        "name": 'feijão',
        "price": 5
    }
]

console.log( marketList2 )
console.log( '-----------------------' )

const bidimensionalVector = [
    [ 2, 5, 8 ],
    [ 3, 7, 9 ],
    [ 4, 2, 4 ]
]

const sumLefthDiagonal = bidimensionalVector[0][0] + bidimensionalVector[1][1] + bidimensionalVector[2][2];
const sumRightDiagonal = bidimensionalVector[0][2] + bidimensionalVector[1][1] + bidimensionalVector[2][0];

const absoluteDifference = sumLefthDiagonal - sumRightDiagonal;

console.log( `Bidimensional Vector: ${bidimensionalVector}` );
console.log( `Absolute Diagonal Difference: ${absoluteDifference}` );

const sumCentralColumn = bidimensionalVector[0][0] + bidimensionalVector[1][0] + bidimensionalVector[2][0];
const sumCentralLine = bidimensionalVector[1][0] + bidimensionalVector[1][1] + bidimensionalVector[1][2];

const absoluteDifferenceCentral = sumCentralColumn - sumCentralLine;

console.log( `Absolute Vertical/Horizontal Difference: ${absoluteDifferenceCentral}` )