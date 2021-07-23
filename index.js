// Code your solutions in this file
const names = ['Lisa', 'Kaitlin', 'Jan'];



function writeCards(names, event) {
    let newArr = [];
    for (let i = 0; i < names.length; i++) {
        newArr.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
       
    }
    return newArr;    
}
function countDown(num) {
    while(num >= 0) {
        console.log(num);
        num--;
    }
    // for (let countDown = 0; countDown < 11; countDown++) {
    //     console.log(countDown);
    // }
}