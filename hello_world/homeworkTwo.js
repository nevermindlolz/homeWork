function simple_or_hard(number) {
    if (number <= 1) {
        return 'не простое и не составное'
    }
    for (let i = 2; i <= Math.sqrt(number); i++)  {
        if (number % i === 0) {
            return 'составное число'
        }
    }

    return 'простое число'

}



console.log(simple_or_hard(7));
