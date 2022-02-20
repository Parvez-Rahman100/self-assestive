function paperRequirements(firstBook, secondBook, thirdBook) {
    const firstBookPage = 100;
    const secondBookPage = 200;
    const thirdBookPage = 300;
    const totalFirstBookPage = firstBook * firstBookPage;
    const totalSecondBookPage = secondBook * secondBookPage;
    const totalThirdBookPage = thirdBook * thirdBookPage;
    const totalBookPage = totalFirstBookPage + totalSecondBookPage + totalThirdBookPage;
    return totalBookPage;
}
const book = paperRequirements(2, 2, 1);
console.log(book);