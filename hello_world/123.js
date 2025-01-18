let randomNumber = Math.floor(Math.random() * 10) + 1;
let inputNumber = parseInt(prompt('введите число'),10);

function true_or_not(num1, num2) {

    if (isNaN(num2) || isNaN(num1)) {
        return 'Ошибка, не является числом';
    }
    else if (num2 < 1 || num2 > 10) {
        return 'ошибка, введите число от 1 до 10';
    }
    else if (num1 === num2) {
        return 'Поздравляем! Вы угадали.';
    }
    else {
        return 'Неправильно. Попробуйте еще раз.';
    }
}
alert(true_or_not(randomNumber, inputNumber))
