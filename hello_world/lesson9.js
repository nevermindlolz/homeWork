// const promise = new Promise(resolve => {resolve(1)})
// promise.then(resault => console.log(resault))
// console.log(2);
// setTimeout(() => {console.log(3)}, 1000);
// setTimeout(() => {console.log(4)}, 0);
// console.log(5);
// это дз:
function newArr(massiveObjectov) {

    let newArrOfObjects = massiveObjectov.map(elem => elem.price.split('$').reduce(elem => elem * 2)).map(elem => elem + '$')

    return newArrOfObjects
}

const arrOfObjects = [
    {
        id: 5,
        name: `Vasya`,
        price: `2$`,
    },
    {
        id: 7,
        name: `Petya`,
        price: `15$`,
    }
]

console.log(newArr(arrOfObjects));