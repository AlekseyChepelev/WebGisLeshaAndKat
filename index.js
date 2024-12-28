
function showCount(array,number) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === +number) {
            count ++;
        }
    }
console.log(count)
}
const arr = new Array();
const array = [1,2,3,4,5,6,7,8,9,9,9,9,8,8,8,7,7,6,5,5,5,5,2];

let count = 0;
const number = prompt("введите число: ")
console.log(number)
showCount(array,number)

