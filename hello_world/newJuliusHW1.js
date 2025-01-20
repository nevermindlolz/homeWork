function Task(id, title) {
    this.id = id;
    this.title = title;
    this.isCompleted = true
}

Task.prototype.toggleComplete() = function () {
    if (this.isCompleted) {
        this.isCompleted = false
    }
    else if (!this.isCompleted) {
        this.isCompleted = true
    }
    return `задача была инвертирована`;
};

function User(id, name) {
    this.id = id;
    this.name = name;
    this.tasks = []
}

User.prototype.addTask(task) = function () {
    console.log('задача была добавлена')
    return this.tasks.push(task)
}

User.prototype.getTasks() = function () {
    return this.tasks
}

