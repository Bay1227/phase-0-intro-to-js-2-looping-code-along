// Code your solutions in this file
const countDown = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
function countDown10(countdown) {
    let countDown = 10;
    while (countDown > 0) {
        console.log(countDown--);
    }
    return countDown;
}
countDown10(countDown);