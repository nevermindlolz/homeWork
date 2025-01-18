let products = [{
        name: 'Sony',
        price: 35,
        quantity: 10,
        category: 'televisor',
    },
    {
        name: 'LG',
        price: 15,
        quantity: 17,
        category: 'powerbank',
    },
    {
        name: 'samsung',
        price: 39,
        quantity: 84,
        category: 'smartphone',
    }
]

function getInfo(prod) {
    return prod.map(elem => {
            console.log(`Товар: ${elem.name}`)
            console.log(`Цена: ${elem.price}$`)
            console.log(`Кол-во: ${elem.quantity}`)
            console.log(`Категория: ${elem.category}\n`)
        }
    )
}

getInfo(products);

function getTotalPrice(prod) {
    let sum = 0;
    prod.forEach(elem => sum += elem.price)
    return `Общая стоймость: ${sum}$`
}

console.log(getTotalPrice(products));



function deepCopy(prod) {
    // Проверяем, является ли obj объектом или массивом
    if (prod === null || typeof prod !== 'object') {
        return prod; // Для примитивов просто возвращаем значение
    }

    // Создаём новый объект или массив в зависимости от исходного типа
    const copy = Array.isArray(prod) ? [] : {};

    // Перебираем свойства объекта
    for (let key in prod) {
        if (prod.hasOwnProperty(key)) {
            // Рекурсивно копируем свойства
            copy[key] = deepCopy(prod[key]);
        }
    }

    return copy;
}

console.log(deepCopy(products))

const copied = deepCopy(products);

copied[0].name = 'SonyEricson'
copied[0].price = 100
copied[0].quantity = 150
copied[0].category = 'qwe'

copied.push({
    name: 'Honor',
    price: 21,
    quantity: 3,
    category: 'iPod',
})

console.log(copied);