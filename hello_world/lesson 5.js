let students = [
    {
        name: 'Alice',
        age: 35
    },
    {
        name: 'Julius',
        age: 41
    },
    {
        name: 'Vanya',
        age: 59
    }
]

let arrOfstudents = students.map((elem) => {
    return {
        ...elem,
    callback: (name) => {
        console.log(name);
    }
    }
})

arrOfstudents.forEach((elem) => {
    elem.callback(elem.name)
})
