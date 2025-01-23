function Task(id, title) {
    this.id = id;
    this.title = title;
    this.isCompleted = false
}

Task.prototype.toggleComplete = function () {
    console.log(`🔄 задача была инвертирована`)
    this.isCompleted = !this.isCompleted

};

function User(id, name) {
    this.id = id;
    this.name = name;
    this.tasks = []
}

User.prototype.addTask = function (task) {
    console.log(`✅ задача "${task.title}" была добавлена пользователю ${this.name}`)
    return this.tasks.push(task)
}

User.prototype.getTasks = function () {
    console.log(`\n📄 список активных задач:\n`, this.tasks)
    const taskFilter = this.tasks.filter(elem => elem.isCompleted === false)
    console.log(`\n📄 список не выполненных активных задач:\n`, taskFilter)
}

User.prototype.removeTask = function (taskId) {
    const index = this.tasks.findIndex(elem => elem === taskId)
    if (index === -1) {
        console.error(`❌ ОШИБКА!. такого ID не существует...`)
        return null
    }
    const removed = this.tasks.splice(index, 1)
    console.log(`✅ Готово! задача была успешно удалена.`)

}

const task1 = new Task(1, 'Помыть попу')
const task2 = new Task(2, 'Побрить Жопу')
const task3 = new Task(3, 'сыграть в доту')

const user1 = new User(23, 'Julik')

task2.toggleComplete(user1)

user1.addTask(task1)
user1.addTask(task2)
user1.addTask(task3)

user1.removeTask(task1)

user1.getTasks()


//git





