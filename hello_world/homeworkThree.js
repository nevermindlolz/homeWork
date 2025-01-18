let inputNumber1 = prompt('введите число 1')
let operator = prompt('оператор')
let inputNumber2 = prompt('введите число 2')


function calculated(num1, oper, num2) {
    num1 = +num1;
    num2 = +num2;

    if(isNaN(num1) || isNaN(num2)) {
        return 'Ошибка: оба ввода должны быть числами';
    }
    if(oper === "/" && num2 === 0) {
        return 'Ошибка: на 0 делить нельзя';
    }

    switch (oper) {

            case '+':
                return num1 + num2;
            case '-':
                return num1 - num2;
            case '/':
                return num1 / num2;
            case '*':
                return num1 * num2;
            default:
                return 'Ошибка: неверный оператор'

    }
}
alert(calculated(inputNumber1, operator, inputNumber2))