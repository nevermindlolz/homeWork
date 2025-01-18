'use strict'
// Задача
// Создайте класс Book, который будет представлять книгу в библиотеке. Класс должен иметь следующие свойства и методы:
//
//     Свойства:
//
//         title — название книги.
//     author — автор книги.
//     year — год издания книги.
//     isRead — статус, прочитана ли книга (по умолчанию false).
// Методы:
//
//     readBook() — метод, который помечает книгу как прочитанную, изменяя значение isRead на true.
// getInfo() — метод, который возвращает строку с информацией о книге в формате: "Название книги: [title], Автор: [author], Год издания: [year], Прочитана: [isRead]".
//     Дополнительное задание
// Создайте класс Library, который будет представлять библиотеку с набором книг. Класс должен иметь следующие свойства и методы:
//
//     Свойства:
//
//         books — массив книг (по умолчанию пустой).
// Методы:
//
//     addBook(book) — метод, который добавляет книгу в библиотеку.
// getUnreadBooks() — метод, который возвращает массив книг, которые еще не прочитаны.
// getAllBooksInfo() — метод, который выводит информацию обо всех книгах в библиотеке, используя метод getInfo каждой книги.
//     Попробуйте реализовать классы и методы, а затем создайте несколько экземпляров книг и добавьте их в библиотеку, чтобы проверить, как всё работает.

class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.isRead = false
    }
    readBook() {
        if (this.isRead == false) {
            this.isRead = true
            return `книга ${this.title} теперь прочитана`
        }
        else {
            return `книга ${this.title} уже была прочитана`
        }
    }
    getInfo() {
        return `Название книги: ${this.title}, Автор: ${this.author}, Год издания: ${this.year}, Прочитана: ${this.isRead}.`
    }
}

class Library {
    constructor() {
        this.books = []
    }
    addBook(book) {
        this.books.push(book)

    }
    getUnreadBooks() {
        return this.books.filter(book => !book.isRead)

    }
    getAllBooksInfo() {
        return this.books.map(book => book.getInfo()).join('\n')
    }
}

const library = new Library();
const book1 = new Book("Война и мир", "Лев Толстой", 1869);
const book2 = new Book("Преступление и наказание", "Федор Достоевский", 1866);
const book3 = new Book("Мастер и Маргарита", "Михаил Булгаков", 1967);

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

book1.readBook();


console.log("\nНепрочитанные книги:");
console.log(library.getUnreadBooks().map(book => book.getInfo()).join('\n'));

console.log("\nИнформация о всех книгах:");
console.log(library.getAllBooksInfo());

console.log('\n');
console.log(book1.readBook());
console.log(book2.readBook());
console.log(book3.readBook());

console.log("\nИнформация о всех книгах:");
console.log(library.getAllBooksInfo());