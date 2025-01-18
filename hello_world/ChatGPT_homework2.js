let inputNumbers = prompt('введите числа через запятую');
let arrayOfNumbers = inputNumbers.split(',').map(Number);

function deleteDuplicate(arr) {
    let uniqueArray = [];

    for (let i = 0; i < arr.length; i++) {
        if (!uniqueArray.includes(arr[i])) {
            uniqueArray.push(arr[i]);
        }
    }
    return uniqueArray;
}

let result = deleteDuplicate(arrayOfNumbers);
console.log(result)