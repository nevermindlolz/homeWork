//1)Сложение двух чисел:
//Напиши функцию sum(a, b), которая принимает два числа и возвращает их сумму.
// let numberOne = parseInt(prompt('введите число'), 10)
// let numberTwo = parseInt(prompt('введите число'), 10)
//
// function sum(arg1, arg2) {
//     return arg1 + arg2;
// }
//
// alert(sum(numberOne, numberTwo))
//-----------------------------------------------------------------------------------
//2)Проверка четности:
// Напиши функцию isEven(number), которая принимает число и возвращает true, если оно четное, и false в противном случае.
// let numberOne = parseInt(prompt('число'), 10)
// function isEven(number) {
//     if (number % 2 === 0)
//         return true
//     else
//         return false
// }
//
// alert(isEven(numberOne))
//-----------------------------------------------------------------------------------
// 3)Возведение в квадрат:
//     Напиши функцию square(number), которая принимает число и возвращает его квадрат.
// let numberOne = parseInt(prompt('number'), 10)
// function square(number) {
//     return number*number
// }
// alert(square(numberOne))
//-----------------------------------------------------------------------------------
//4)Первая буква строки:
// Напиши функцию firstChar(string), которая принимает строку и возвращает первую букву этой строки.
// let stringOne = prompt('message')
// function firstChar(string) {
//     return string[0]
//
// }
// alert(firstChar(stringOne))
//-----------------------------------------------------------------------------------
// 5)Последний элемент массива:
//     Напиши функцию lastElement(arr), которая принимает массив и возвращает последний элемент этого массива.
// let massiveOne = prompt('введите число через запятую')
// let splitMassive = massiveOne.split(',')
// function lastElement(arr) {
//     return arr[arr.length - 1]
// }
// alert(lastElement(splitMassive))
//-----------------------------------------------------------------------------------
// 6)Перевернуть строку:
//     Напиши функцию reverseString(str), которая принимает строку и возвращает ее перевернутой (например, из "hello" получится "olleh").
// let someWord = prompt('word')
// function reverseString(str) {
//     let splitString = str.split('')
//     splitString.reverse()
//     let joinString = splitString.join('')
//
//     return joinString
// }
// alert(reverseString(someWord))
//-----------------------------------------------------------------------------------
//7)Сумма элементов массива:
// Напиши функцию sumArray(arr), которая принимает массив чисел и возвращает сумму всех элементов массива.
// let massiveOfNumbers = prompt('введите число через запятую')
// let splitMassive = massiveOfNumbers.split(',').map(Number)
// function sumArray(arr) {
//     return arr.reduce((acc, num) => acc + num, 0)
// }
// alert(sumArray(splitMassive))
//-----------------------------------------------------------------------------------
// 8) Количество символов в строке:
//     Напиши функцию charCount(str), которая принимает строку и возвращает количество символов в этой строке.
// let someString = prompt('введите сообщение')
// function charCount(str) {
//     return str.length
// }
// alert(charCount(someString))
//-----------------------------------------------------------------------------------
// 9)Проверка возраста:
//     Напиши функцию isAdult(age), которая принимает число (возраст) и возвращает true, если возраст больше или равен 18, и false в противном случае.
// let inputAge = parseInt(prompt('введите возраст'), 10)
// function isAdult(age) {
//     if (age >=18) {
//         return true
//     }
//     else
//         return false
// }
// alert(isAdult(inputAge))
//-----------------------------------------------------------------------------------
// 10)Максимальное из двух чисел:
//     Напиши функцию max(a, b), которая принимает два числа и возвращает максимальное из них.
let numberOne = parseInt(prompt('введите число'),10)
let numberTwo = parseInt(prompt('введите число'),10)
function max(a,b) {
    if (a > b) {
        return a
    }
    else
        return b
}
alert(max(numberOne, numberTwo))
















