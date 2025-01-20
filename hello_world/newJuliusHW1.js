function Task(id, title) {
    this.id = id;
    this.title = title;
    this.isCompleted = true
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
    console.log('задача была добавлена')
    return this.tasks.push(task)
}

User.prototype.getTasks = function () {
    return this.tasks
}

