const numbers = [23, 34, 13, 54, 84, -5, 3, -4, 23];
const positive = [];
for (const number of numbers) {
    if (number >= 0) {
        positive.push(number);
        console.log(positive);
    }
    else {
        break;
    }
}
