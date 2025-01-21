function Task(id, title) {
    this.id = id;
    this.title = title;
    this.isCompleted = false
}

Task.prototype.toggleComplete = function () {
    this.isCompleted = !this.isCompleted
    return `задача была инвертирована`;
};

function User(id, name) {
    this.id = id;
    this.name = name;
    this.tasks = []
}

User.prototype.addTask = function (task) {
    console.log(`задача "${task.title}" была добавлена пользователю ${this.name}`)
    return this.tasks.push(task)
}

User.prototype.getTasks = function () {
    console.log(`\nсписок всех задач:`)
    console.log(this.tasks)
    return this.tasks

}

User.prototype.removeTask = function (taskId) {
    console.log(`задача "${taskId.title}" была удалена`)
    return this.tasks.filter(task => task.id)
}

const task1 = new Task(1, 'Помыть попу')
const task2 = new Task(2, 'Побрить Жопу')
const task3 = new Task(3, 'сыграть в доту')

const user1 = new User(23, 'Julik')

user1.addTask(task1)
user1.addTask(task2)
user1.addTask(task3)
console.log(`\nОШИБКА!. что-то пошло не так...\n`)
user1.removeTask(task1)

user1.getTasks()


//git





