document.getElementById("fetchButton").addEventListener("click", async () => {
    const buttonElement = document.getElementById("fetchButton");

    // Заменяем содержимое кнопки на лоадер
    buttonElement.innerHTML = '<div class="loader"></div>';
    buttonElement.disabled = true; // Отключаем повторное нажатие

    async function getProduct() {
        try {
            const baseUrl = 'https://fakestoreapi.com/products';
            const response = await fetch(baseUrl);
            if (!response.ok) {
                throw new Error('Не удалось получить данные о продукте');
            }
            const data = await response.json();

            // Искусственная задержка в 5 секунд
            await new Promise(resolve => setTimeout(resolve, 5000));

            // Очищаем кнопку с лоадером
            buttonElement.innerHTML = '';

            // Создаем контейнер для карточек
            const productsContainer = document.createElement('div');
            productsContainer.classList.add('products');

            // Отображаем продукты
            data.forEach(product => {
                const card = document.createElement('div');
                card.classList.add('card');

                card.innerHTML = `
                    <img src="${product.image}" alt="${product.title}">
                    <h3>${product.title}</h3>
                    <p>Цена: $${product.price}</p>
                `;
                productsContainer.appendChild(card);
            });

            // Добавляем контейнер карточек в место кнопки
            buttonElement.parentNode.appendChild(productsContainer);
        } catch (error) {
            console.error('Ошибка при получении данных о продукте:', error);
            buttonElement.innerHTML = '<p>Ошибка при загрузке данных.</p>';
        }
    }

    getProduct();
});
