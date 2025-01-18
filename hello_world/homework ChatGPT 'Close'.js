// function createMultiplier(multiplier) {
//         return function(number){
//             return number * multiplier
//         }
// }
//
// let multiply2 = createMultiplier(2)
// console.log(multiply2(5))
//
// let multiply3 = createMultiplier(3)
// console.log(multiply3(4));
// ----------------------------------------
// function createCounter(){
//     let count = 0
//     return function() {
//         count++
//         return count
//     }
// }
//
// const counter = createCounter();
//
//
// console.log(counter()); // 1
// console.log(counter()); // 2
// console.log(counter()); // 3
// ----------------------------------------
// function createGreeting(name){
//     return function(number){
//         for (let i = 0; i < number; i++)
//             console.log(`привет ${name}`);
//     }
// }
// const greetAlice = createGreeting('Alice');
//
// greetAlice(3)
//----------------------------------------
// function createPasswordValidator(password){
//
//     return function(truepassword){
//         return truepassword === password
//
//         }
//     }
//
//
//
// let validatePassword = createPasswordValidator('secret123');
//
// console.log(validatePassword('wrongPassword')); // false
// console.log(validatePassword('secret123'));     // true
//----------------------------------------
function createMultiplier(factor){
    return function(number){
        return number*factor
    }
}
const multiplyBy2 = createMultiplier(2)
console.log(multiplyBy2(5))