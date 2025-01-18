// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
// let evenNumbers = numbers.filter(elem => elem % 2 === 0)
//
// // Результат должен быть [2, 4, 6, 8, 10]
// console.log(evenNumbers);

// const users = [
//     { name: "Alice", age: 17 },
//     { name: "Bob", age: 22 },
//     { name: "Charlie", age: 15 },
//     { name: "Dave", age: 30 },
//     { name: "Eve", age: 19 }
// ];
//
// let adultNames = users.filter(elem => elem.age > 18).map(elem => elem.name)
//
// // Результат должен быть ["Bob", "Dave", "Eve"]
// console.log(adultNames);

// const orders = [
//     { customer: "Alice", items: ["Book", "Pen"] },
//     { customer: "Bob", items: ["Laptop", "Mouse", "Keyboard"] },
//     { customer: "Charlie", items: ["Phone"] },
//     { customer: "Dave", items: ["Tablet", "Charger", "Case"] },
//     { customer: "Eve", items: ["Notebook", "Pen", "Pencil"] }
// ];
//
// let result = orders.filter(elem => elem.items.length > 2).map(elem => elem.customer.toUpperCase())
//
//
// // Результат должен быть ["BOB", "DAVE", "EVE"]
// console.log(result);

// const purchases = [
//     "Laptop-1200",
//     "Mouse-20",
//     "Keyboard-80",
//     "Monitor-200",
//     "Pen-5",
//     "Notebook-60"
// ];
//
// let result = purchases.map(elem => {const [product, price] = elem.split('-');
// return {product, price: Number(price)}}).filter(elem => elem.price > 50).map(elem => elem.product)
//
//
//
//
//
// // Результат должен быть ["Laptop", "Keyboard", "Monitor", "Notebook"]
// console.log(result)

// const students = [
//     { name: "Alice", grade: 85 },
//     { name: "Bob", grade: 92 },
//     { name: "Charlie", grade: 72 },
//     { name: "Dave", grade: 88 },
//     { name: "Eve", grade: 95 }
// ];
//
// const sum = students.reduce((acc, student) => acc + student.grade, 0)
// averageGrade = sum / students.length
//
// let targetStudents = students.filter(elem => elem.grade > averageGrade)
//
// const aboveAverageStudents = targetStudents.map(student => student.name)
//
//
// // Результат должен быть ["Bob", "Dave", "Eve"]
//
// console.log(aboveAverageStudents);

// class Student {
//     constructor(name) {
//         this.name = name
//         this.courses = []
//     }
//     enroll(course) {
//         this.courses.push(course)
//         console.log(`студент подписался на курс ${course}`)
//
//     }
//     listCourses() {
//         return `${this.courses}`
//
//     }
//
// }
//
// class University {
//     constructor() {
//         this.students = []
//     }
//     addStudent(student) {
//         this.students.push(student)
//         console.log(`студент добавлен в университет`)
//     }
//     findStudentByName(name) {
//         return this.students.find(student => student.name === name) || "Студент не найден"
//     }
//     listAllStudents() {
//         return this.students.map(students => students.name)
//     }
// }
//
// const alice = new Student("Alice");
// const bob = new Student("Bob");
//
// // Записываем студентов на курсы
// alice.enroll("Math");
// alice.enroll("Physics");
// bob.enroll("Biology");
//
// // Создаём университет
// const university = new University();
//
// // Добавляем студентов в университет
// university.addStudent(alice);
// university.addStudent(bob);
//
// // Проверяем результаты
// console.log(alice.listCourses()); // Должно вывести: "Math, Physics"
// console.log(university.listAllStudents()); // Должно вывести: ["Alice", "Bob"]
// console.log(university.findStudentByName("Bob")); // Должен вернуть объект Bob

const user = {
    name: "Alice",
    age: 25,
    address: {
        city: "New York",
        street: "5th Avenue"
    },
    hobbies: ["reading", "traveling"]
};

const simpleCopy = {...user}
simpleCopy.name = 'Bob'
simpleCopy.address.city = 'San Francisco'



const deepCopy = JSON.parse(JSON.stringify(user))
deepCopy.age = 30
deepCopy.address.street = 'Market Street'

console.log(user);
console.log(simpleCopy);
console.log(deepCopy);