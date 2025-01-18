export const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 20 },
    { name: "Dave", age: 35 },
    { name: "Eve", age: 40 }
];

export function getUsersAboveAge(age) {
    const newUsers = users.filter(user => user.age > age)
    console.log(newUsers.map(user => user.name));
}

getUsersAboveAge(32)


// export const multiply = (a, b) => a * b;
// export default function greet() {
//     return "Hello from Math Module!";
// }