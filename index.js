let count = 0;
const mydiv = document.getElementById('test5')
const header = document.createElement("h2")
/* Две переменных */
/* Тут храним клики */
/* Дейсвтие клика */

mydiv.addEventListener('click', function () {
console.log(123)
mydiv.appendChild(header)
/* Изменение текста */
count++;
header.textContent = count;
})





console.log(mydiv)