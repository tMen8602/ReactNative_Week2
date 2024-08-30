const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
    const returns = accumulator + currentValue;
    console.log(`Accumulator: ${accumulator}`);
    console.log(`Current Value: ${currentValue}`);
    console.log(`returns: ${returns}`);
    console.log('----------------------------');

    return returns;
}, 0);

console.log(`Total Sum: ${sum}`);