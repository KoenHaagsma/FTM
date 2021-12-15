const stream = require('fs').createReadStream('./input/nabijheid_excl_shapes.csv');
const reader = require('readline').createInterface({ input: stream });
const arr = [];

reader.on('line', (row) => {
    arr.push(row.split(';'));
    console.log(arr);
});
