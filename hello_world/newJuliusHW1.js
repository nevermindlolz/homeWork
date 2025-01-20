function Task(id, title) {
    this.id = id;
    this.title = title;
    this.isCompleted = true
}

Task.prototype.toggleComplete() = function () {
    if (this.isCompleted) {
        this.isCompleted = false
    }
    return `задача была инвертирована`;
};

function User(id, name) {
    this.id = id;
    this.name = name;
    this.tasks = []
}

User.prototype.addTask(task) = () {
    this.tasks.push(task)
    console.log('задача была добавлена')
}

User.prototype.getTasks() = () {
    this.tasks.map(task => task)
}
