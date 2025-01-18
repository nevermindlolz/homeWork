const data = ["London", "New York", "Tokyo", "Sydney"];

async function getWeather(city) {
    const t = Math.floor(Math.random() * (30 - 10 + 1)) + 10;
    const a = ["sunny", "cloudy", "rainy"];
    const b = a[Math.floor(Math.random() * a.length)];

    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 2000) + 1000; // случайная задержка от 1 до 3 секунд
        setTimeout(() => {
            if (data.includes(city)) {
                resolve(`Город: ${city}, температура: ${t}°C, состояние: ${b}`);
            } else {
                reject(`Данные отсутствуют для города: ${city}`);
            }
        }, delay);
    });
}

// Массив городов для вызова функции getWeather
const cities = ["London", "New York", "Tokyo", "Sydney", "Donetsk"];

// Запускаем getWeather для всех городов и обрабатываем результаты по мере их выполнения
cities.forEach(city => {
    getWeather(city)
        .then(result => console.log(result))
        .catch(error => console.error(error));
});