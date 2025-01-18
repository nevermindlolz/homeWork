// let arrOfNumbers = prompt('введите числа через запятую')
// let splitNumbers = arrOfNumbers.split(',').map(Number)
//
//
//
// function displayFunc(num)  {
//     alert((num))
// }
//
// function funct(arr, callback) {
//     let sum = 0;
//     arr.forEach(
//         function (item) {
//         sum = sum + item;
//     })
//     callback(sum)
// }
//
// funct(splitNumbers, displayFunc)

let numbers = [10, 20, 30];

numbers.forEach(function(item, index, array) {
    console.log("Элемент: " + item + ", Индекс: " + index + ", Массив: " + array);
});