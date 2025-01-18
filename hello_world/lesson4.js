// Написать функцию, которая принимает на вход два аргумента –
// число и колбэк(функцию). Колбэк выполняет задачу по выводу в цикле 10 любых слов(хардкод).
// Число в основной функции, которое мы передаем в аргумент показывает сколько раз колбэк будет вызван.
const TYPE_MALE = 'Non'
let arrOfWords = ["привет", "пока", "ключ", "свойство", "клюшка", "кружка", "нога", "рука", "голова", "шея"]
arrOfWords[1]
//создаем массив 10 слов
//

// function name() {
//     return 1
// }
//
// let name1 = () => {
//     return 1
// }
//
// const arr1 = arrOfWords.forEach((item, i) => {
//     // console.log(item, i);
//     return item + 'test'
// })
// console.log(arr1);
//
// const arr2 = arrOfWords.map((item, i) => {
//     // console.log(item, i);
//     return item + 'test'
// })
// console.log(arr2);

// const obj = {
//     test: 'ret',
//     key: 121,
//     obj1: {
//         test: 'ter'
//     }
// }
//
// console.log(obj.obj1.test);


let arrOfUsers = [
    {
        name: 'Nvmlolz',
        age: 30,
        id: 0
    },
    {
        name: 'JulianBgs',
        age: 28,
        id: 1
    },
    {
        name: 'Nastya',
        age: 25,
        id: 2
    }
];

let newArrayOfUsers = arrOfUsers.map(function (item) {
    if (item.name === 'Nastya') {
        return {
            ...item,
            male: false,
        }
    }
    return {
        ...item,
        male: true
    }
})

// console.log(newArrayOfUsers);

// arrOfUsers = arrOfUsers.filter((elem) => elem.age < 28)
// console.log(arrOfUsers);

function deleteUserById(id) {
    arrOfUsers = arrOfUsers.filter((elem) => elem.id !== id)
    console.log(arrOfUsers);
}

deleteUserById(2);


// const someFunctionAsCallback = function(wordNumber){
//   console.log(arrOfWords[wordNumber]);
// }
//
//
// //функция принимающая 2 аргумента число и callback-функция)
// function mainFunction(num, callback) {
//   for (let i = 0; i < num; i++) {
//     callback(i);
//   }
// }
//
// mainFunction(3, someFunctionAsCallback);
//
//
//
//
//
//
// // Написать функцию, которая проверяет число простое или нет. Если простое возвращаем true, нет – false.
//
// function primeNumb(num){
// for (let i = 2; i < num; i++){
//     if (num % i === 0){
//         // остаток от деления возвращаем false
//         return false
//     }
// }
// return num > 1;
// }
// console.log(primeNumb(5));
//
//
// // Написать функцию, которая принимает строку в качестве аргумента и возвращает ее в перевернутом виде.
//
// function reverseString(text) {
//     return text.split("").reverse().join("");
//   }
//   console.log(reverseString("привет"))


// Написать калькулятор через DOM дерево, то есть изучить взаимодействие с DOM.
// Через Input's вводить числа, по кнопке рассчитать выводить результат.