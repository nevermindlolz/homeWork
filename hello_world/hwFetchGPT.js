



async function productCatalog() {
    try {
        const baseUrl = 'https://fakestoreapi.com/products'
        const response = await fetch(baseUrl)
        if (!response.ok) {
            throw new Error('Не удалось получить данные о продукте');
        }
        const data = await response.json()
        data.forEach(elem => {
            console.log(`Номер: ${elem.id}\nНазвание: ${elem.title}\nЦена: ${elem.price}$\n`)
        })

    } catch (error) {
        console.error('Ошибка при получении данных о продукте:', error);
        return null;
    }
}

productCatalog()

