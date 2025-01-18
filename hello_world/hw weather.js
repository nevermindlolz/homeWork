class WeatherService {
    constructor(apiKey, baseUrl) {
        this.apiKey = apiKey;
        this.baseUrl = baseUrl;
    }

    async getWeather(city) {
        try {

            const a = `${this.baseUrl}?access_key=${this.apiKey}&query=${city}`

            const response = await fetch(a);

            if (!response.ok) {
                throw new Error('Не удалось получить данные о погоде');
            }
            const data = await response.json();
            //console.log(data);
            return new CityWeather(
                data.location.name,
                data.current.temperature,
                data.current.humidity,
                data.current.weather_descriptions,
            );
        } catch (error) {
            console.error('Ошибка при получении данных о погоде:', error);
            return null;
        }
    }
}

class CityWeather {
    constructor(cityName, temperature, humidity, weatherDesc) {
        this.cityName = cityName;
        this.temperature = temperature;
        this.humidity = humidity;
        this.weatherDesc = weatherDesc;
    }

    display() {
        return `
      Погода в городе ${this.cityName}:
      Температура: ${this.temperature}°C
      Влажность: ${this.humidity}%
      Описание: ${this.weatherDesc}
    `;
    }
}


const apiKey = 'b128307867a542047928a6b3353322bb';
const baseUrl = 'http://api.weatherstack.com/current';

const weatherService = new WeatherService(apiKey, baseUrl);
const b = prompt('введите город');

function showWeather(city) {
     weatherService.getWeather(city).then(cityWeather => {
        if (cityWeather) {
            alert(cityWeather.display());
        } else {
            alert('Не удалось получить данные о погоде');
        }
    })

}

// Вызов функции

showWeather(b)