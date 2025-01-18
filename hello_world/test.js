// const words = ["Madam", "racecar", "hello", "world", "level", "world"];
// function filterPalindromes(words) {
//     let words1 = words.map(elem => elem.toLowerCase())
//     let reversed = words1.map(elem => elem.split('').reverse().join(''))
//     const newArr = []
//     for (let i = 0; i < words.length; i++) {
//         if (words1[i] === reversed[i]) {
//             newArr.push(words[i])
//         }
//     }
//     return newArr
// }
// const result = filterPalindromes(words);
// console.log(result); // ["madam", "racecar", "level"]


// const words = ["apple", "banana", "grape", "orange", "kiwi"];
// function findLongestWord(words) {
//     let longestWord = words[0]
//     for (let i = 1; i < words.length; i++) {
//         if (words[i].length > longestWord.length) {
//             longestWord = words[i]
//
//         }
//     }
// return longestWord
//
//         }
// const result = findLongestWord(words);
// console.log(result); // "banana"

// const numbers = [1, 2, 2, 3, 4, 4, 5];
//
// function getUniqueNumbers(numbers) {
//     return [...new Set(numbers)]
// }
//
// const result = getUniqueNumbers(numbers);
// console.log(result); // [1, 2, 3, 4, 5]

// const numbers = [1, 2, 3, 4, 5];
//
// function maxNumber(numbers) {
//     let maxNumber = numbers[0]
//     for (i = 1; i < numbers.length; i++) {
//         if (numbers[i] > maxNumber) {
//             maxNumber = numbers[i]
//         }
//     }
//     return maxNumber
// }
//
// const result = maxNumber(numbers)
// console.log(result);

// const numbers = [1, 2, 3, 4, 5];
// let sum = 0
// function sumNumbers(numbers) {
//     numbers.forEach(elem => sum += elem)
//     return sum
// }
// console.log(sumNumbers(numbers));  // 15

// const products = [
//     { name: "Laptop", price: 1000 },
//     { name: "Phone", price: 500 },
//     { name: "Tablet", price: 700 },
//     { name: "Monitor", price: 300 }
// ];
//
// function findMostExpensiveProduct(products) {
//
//     let maxProduct = products[0]
//     for (let i = 1; i < products.length; i++) {
//         if (products[i].price > maxProduct.price) {
//             maxProduct = products[i]
//         }
//     }
//     return maxProduct.name
// }
//
// const result = findMostExpensiveProduct(products);
// console.log(result); // "La

// const someWord = 'Madam'
//
// function isPalindrome(word) {
//     let reverseWord = word.toLowerCase().split('').reverse().join('')
//     console.log(reverseWord);
//     if (reverseWord === word.toLowerCase()) {
//         return true
//     }
//     else {
//         return false
//     }
//
// }
//
// const result = isPalindrome(someWord)
// console.log(result);

// class Animal {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }
//     speak() {
//         console.log(`Привет! Я ${this.name} и мне ${this.age} лет.`);
//     }
// }
//
// class Dog extends Animal {
//     constructor(name, age, breed) {
//         super(name, age)
//         this.breed = breed
//     }
//     bark() {
//         console.log(`Гав-гав! Я ${this.breed}.`)
//     }
// }
//
// const animal = new Animal('Лора', '14')
// animal.speak()
//
// const dog = new Dog('Лора', 3, 'такса')
// dog.speak()
// dog.bark()

// class Vehicle {
//     constructor(type) {
//         this.type = type
//     }
//     move() {
//         console.log(`Транспортное средство ${this.type} двигается.`)
//     }
//
// }
//
// class Car extends Vehicle {
//     constructor(type, brand) {
//         super(type);
//         this.brand = brand
//     }
//     honk() {
//         console.log(`Би-бип! Машина ${this.brand} сигналит!`)
//     }
//
// }
//
// class Bicycle extends Vehicle {
//     constructor(type, gear) {
//         super(type);
//         this.gear = gear
//     }
//     ringBell() {
//         console.log(`Дзинь-дзинь! Велосипед с ${this.gear} передачами звонит в звонок!`)
//     }
//
// }
//
// const vehicle = new Vehicle("транспорт");
// vehicle.move();
// // Транспортное средство транспорт двигается.
//
// const car = new Car("авто", "Tesla");
// car.move();
// // Транспортное средство авто двигается.
// car.honk();
// // Би-бип! Машина Tesla сигналит!
//
// const bicycle = new Bicycle("велосипед", 21);
// bicycle.move();
// // Транспортное средство велосипед двигается.
// bicycle.ringBell();
// // Дзинь-дзинь! Велосипед с 21 передачами звонит в звонок!

// class BankAccount {
//     #balance
//     constructor() {
//         this.#balance = 0
//     }
//     get currentBalance() {
//         return this.#balance
//     }
//     set replenishBalance(sum) {
//         if (sum === 0 || sum < 0) {
//             console.log(`Сумма для пополнения должна быть больше 0.`)
//         }
//         else {
//             this.#balance += sum
//             console.log(this.#balance)
//         }
//     }
//     withdraw(amount) {
//         if (amount > this.#balance) {
//             console.log("Недостаточно средств на счёте!")
//         }
//         else {
//             this.#balance -= amount
//             console.log(this.#balance)
//         }
//     }
// }
//
// // Пример использования:
// const account = new BankAccount();
// console.log(account.currentBalance); // 0
//
// account.replenishBalance = 1000; // Пополнение на 1000
// console.log(account.currentBalance); // 1000
//
// account.withdraw(500); // Снятие 500
// console.log(account.currentBalance); // 500
//
// account.withdraw(1000); // Пытаемся снять больше, чем есть
// // "Недостаточно средств на счёте!"
//
// account.replenishBalance = -200; // Попытка пополнения на отрицательную сумму
// // "Сумма для пополнения должна быть больше 0."

// const user = {
//     name: "Алиса",
//     age: 25,
//     address: {
//         city: "Москва",
//         street: "Тверская",
//     },
// };
//
// let simpleCopy = { ...user }
// simpleCopy.address.city = 'Питер'
//
//
//
// let deepCopy = JSON.parse(JSON.stringify(user))
// deepCopy.address.city = 'Калининград'
//
// console.log(deepCopy);
// console.log(user);

// const tasks = [
//     { id: 1, time: 2000 }, // Время выполнения: 2000 мс
//     { id: 2, time: 1000 }, // Время выполнения: 1000 мс
//     { id: 3, time: 3000 }  // Время выполнения: 3000 мс
// ];
//
// function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms))
//
// }
//
// async function executeTasks(tasks) {
//     for (const task of tasks) {
//         await delay(task.time)
//         console.log(`Задача с id: ${task.id} выполнена за ${task.time} мс`);
//     }
//     console.log("Все задачи выполнены");
// }
//
// executeTasks(tasks);

// const numbers = [1, 3, 7, 10, 2, 8, 4];
//
// for (const num of numbers) {
//     if (num > 5) {
//         console.log(num);
//     }
// }

// const numbers = [2, 4, 6, 8, 10];
// let sum = 0
// for (const num of numbers) {
//
//     sum += num
//
// }
// console.log(sum);

// const users = [
//     { name: "Алиса", age: 25 },
//     { name: "Боб", age: 30 },
//     { name: "Чарли", age: 35 }
// ];
// for (const user of users) {
//     console.log(user.name);
// }

// const user = { name: "Алиса", age: 25, city: "Москва" };
// for (const keys in user) {
//     console.log(user[keys]);
// }

// const user = { name: "Алиса", age: 25, city: "Москва", profession: "программист" };
// let sumKeys = 0;
//
// for (const key in user) {
//     sumKeys += key.length
// }
//
// console.log(sumKeys);  // Выводим сумму длин всех ключей

// const people = [
//     { name: "Алиса", city: "Москва" },
//     { name: "Боб", city: "Питер" },
//     { name: "Чарли", city: "Новосибирск" }
// ];
// for (const info of people) {
//     console.log(`Имя: ${info.name}, Город: ${info.city}`)
// }

// class Book {
//     constructor(title, author, year) {
//         this.title = title
//         this.author = author
//         this.year = year
//     }
//     getSummary() {
//         return `Название: ${this.title}, Автор: ${this.author}, Год: ${this.year}`
//     }
// }
// class Library {
//     constructor() {
//         this.books = []
//     }
//     addBook(book) {
//         if (this.books.includes(book)) {
//             console.log(`эта книга уже есть в библиотеке`);
//         } else {
//             this.books.push(book)
//             console.log(`книга была успешно добавлена в библиотеку`)
//         }
//     }
//     showBooks() {
//         if (this.books.length === 0) {
//             console.log(`в библиотеке нету книг`);
//         } else {
//             console.log(`список книг в библиотеке:`)
//             this.books.forEach(book => console.log(book.getSummary()));
//         }
//     }
// }
//
// const book1 = new Book('Война и мир', 'Лев Толстой', 1869);
// const book2 = new Book('Загадочная книга', 'Катях Катяхов', 2014);
//
// const library1 = new Library();
// library1.addBook(book1);
// library1.addBook(book2);
//
// const library2 = new Library();
// library2.addBook(book1);
// library2.addBook(book1); // Проверка на добавление дубликата
//
//
// library1.showBooks();
// library2.showBooks();

// const inputArray = [1, 2, 3, 4, 5, 6];
// function processArray(arr) {
//     if (arr.every(num => typeof num === 'number' && !isNaN(num) )) {
//         return arr.filter(num => num % 2 === 0).map(num => num * 2)
//     }
//     else {
//         return `массив состоит не только из чисел`
//     }
// }
// const result = processArray(inputArray);
// console.log(result); // [4, 8, 12]

// const shop = {
//     apples: 50,
//     bananas: 30,
//     oranges: 20
// };
// function increasePrices(obj) {
//     const updated = {}
//     for (const [key, value] of Object.entries(obj)) {
//         updated[key] = value + value * 0.1
//     }
//     return updated
// }
// const updatedShop = increasePrices(shop);
// console.log(updatedShop);
// // { apples: 55, bananas: 33, oranges: 22 }
//
// console.log(shop);
// // { apples: 50, bananas: 30, oranges: 20 }

// const employees = {
//     John: 1000,
//     Sarah: 1200,
//     Kate: 900
// };
// function findHighestPaid(obj) {
//     if (Object.keys(obj).length === 0) {
//         return 'нет сотрудников'
//     }
//     let highestName = ''
//     let highestValue = 0
//     for (const [key, value] of Object.entries(obj)) {
//         if (value > highestValue) {
//             highestValue = value
//             highestName = key
//         }
//
//     }
//     return `Самый высокооплачиваемый сотрудник: ${highestName}, зарплата: ${highestValue}`
// }
//
// const result = findHighestPaid(employees);
// console.log(result);
// // "Самый высокооплачиваемый сотрудник: Sarah, зарплата: 1200"

let user = { name: "Alice" };

user.age = 25; // Ничего не произойдёт
delete user.name; // Не сработает
user.name = "Bob"; // Можно изменить
user.id = 32
let user2 = Object.entries(user)
let result = user2.map(elem => elem.join(':'))
let result2 = Object.fromEntries(result.map(elem => elem.split(':')))
console.log(result2); // { name: "Bob" }
