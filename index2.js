var a = [1, 3, 5, 7]




const initialValue = 0;
const sumWithInitial = a.reduce(

    (accumulator, currentValue) => {
        accumulator + currentValue, initialValue;


        console.log('initialValue ' + initialValue);
        console.log('currentValue ' + currentValue);
        console.log('accumulator ' + accumulator);
        console.log('---------------------------------');

    }

);


console.log('sumWithInitial ' + sumWithInitial);
// Expected output: 10