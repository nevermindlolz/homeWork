//написать счетчик, который инкрементирует значение внутренней переменной count. count = 0
function timer() {
    let count = 0;
    return function(){
        return count++
    }

}

const countT = timer();
    for(let i = 0; i < 11; i++) {
        console.log(countT());
    }


//ДЗ 10 задач на функции с чат гпт, 10 задач на колбеки, 10 задач на работу с массивами. 10 задач на работу с объектами