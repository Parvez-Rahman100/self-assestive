function feetToInch(feet) {
    let inch = feet / 12;
    return inch;
}
const foot = feetToInch(1);
console.log(foot.toFixed(2));