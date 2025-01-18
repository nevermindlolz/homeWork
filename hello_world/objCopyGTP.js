const book = {
    title: "JavaScript Basics",
    author: {
        name: "John Doe",
        age: 45

    },
    genres: ["Programming", "Technology"],
};

const shallowCopy = { ...book };

shallowCopy.author.age = 50;
console.log(book.author.age);
console.log(shallowCopy.author.age);

const deepCopy = JSON.parse(JSON.stringify(book));

deepCopy.genres[0] = 'Science'
console.log(book.genres);
console.log(deepCopy.genres);