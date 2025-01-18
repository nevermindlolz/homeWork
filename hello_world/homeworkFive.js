// let arrOfNumbers = [1, 2, 3, 4, 5]
//
// arrOfNumbers.forEach(number => console.log(number))
//
// let arrOfNumbers = [5, 10, 15, 20]
// let sum = 0
// arrOfNumbers.forEach(number => sum += number);
// console.log(sum);
// let arrOfWords = ['Hello', 'World', 'JavaScript']
// let manyWords = ''
// // arrOfWords.forEach(word => {manyWords += word + ' '})
// // console.log(manyWords);
// let arrOfWords = ['Hello', 'World', 'JavaScript']
// let manyWords = arrOfWords.join(' ')
// console.log(manyWords);
// let arrOfNumbers = [1, 2, 3, 4, 5]
// let arrOfNumbersTen = arrOfNumbers.map((elem => elem + 10))
// console.log(arrOfNumbersTen);
// let arrOfWords = ['apple', 'banana', 'cherry']
// let newArrOfWords = arrOfWords.map(item => item.toUpperCase())
// console.log(newArrOfWords);
// let arrOfWords = ['hello', 'world', 'JavaScript']
// let newArr = arrOfWords.map(item => item.length)
// console.log(newArr);
// let arrOfNumbers = [1, 2, 3, 4, 5, 6]
// let chetn = arrOfNumbers.filter(elem => elem % 2 === 0 )
// console.log(chetn);
// let arrOfString = ['cat', 'elephant', 'dog', 'tiger']
// let arrOfWords = arrOfString.filter(item => item.length < 5)
// console.log(arrOfWords);
// let arrOfNumbers = [-1, 3, -5, 10, 0, 7]
// let plusNumbers = arrOfNumbers.filter(elem => elem > 0 )
// console.log(plusNumbers);
let arrOfNumbers = [1, 2, 3, 4, 5]
let chetnNumbers = arrOfNumbers.filter(elem => elem % 2 === 0)
let chetnNumbersTen = chetnNumbers.map(elem2 => elem2 + 10 )
chetnNumbersTen.forEach(elem3 => console.log(elem3))