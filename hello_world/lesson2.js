// const inputNumber = prompt("введите число");
// if (inputNumber >= 18) {
//     console.log('совершеннолетний')
// }
// else console.log('несовершеннолетний')

// написать функцию которая в себя принимает число пользователя, возводит его в степень и проверяет четное оно или не четное
// если число четное, то мы выводим алерт число четное, если нечетное алерт число не четное

let inputNumber = prompt('введите число')
function numberCheck(number) {
    if ((number ** number) % 2 === 0) {
        alert('число четное')
    }
    else {
        alert('число не четное')
    }
}


//написать функцию фабрику, которая в себя принимает другую функцию и вызывает её. работа с колбэками

function testCallback(callback, number){
    callback(number)
}

testCallback(numberCheck, inputNumber)

//ДЗ проверить является ли число простым или нет. и написать функцию которая проверяет простое оно или нет.
//ознакомиться с шаблоном проектирования фабрика. написать фабрику, которая в себя принимает функцию и возвращает новую функцию
// в которой аргумент принимает число и умножает его на 2. допустим обычная функция возвращает число, фабрика это число умножает
// на 2 и возвращает эту функцию
