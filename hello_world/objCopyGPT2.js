const library = {
    name: "City Library",
    address: {
        street: "Main St",
        number: 123
    },
    books: [
        { title: "1984", author: "George Orwell" },
        { title: "To Kill a Mockingbird", author: "Harper Lee" }
    ]
};

const simpleCopy = {...library}
simpleCopy.name = 'Town Library'
console.log(simpleCopy.name);
console.log(library.name);

simpleCopy.address.number = 456
console.log(simpleCopy.address.number);
console.log(library.address.number);

const deepCopy = JSON.parse(JSON.stringify(library)) // structuredClone

deepCopy.books.push({title: "Brave New World", author: "Aldous Huxley"})

console.log(deepCopy.books);
console.log(library.books);

