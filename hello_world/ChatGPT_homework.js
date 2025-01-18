let someString = prompt('введите слово');


function word_reverse(arg1) {
    if (!isNaN(arg1)) {
        return 'ошибка, введите слово а не число'
    }
    let splitString = arg1.split('');
        splitString.reverse();
    let reversedString = splitString.join('');

    return reversedString;

}
alert(word_reverse(someString));