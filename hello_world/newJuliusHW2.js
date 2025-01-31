// Моковый API с обработкой ошибок и очередью запросов
class TaskManager {
    constructor() {
        this.tasks = [
            { id: 1, name: 'Task from server 1', isCompleted: false },
            { id: 2, name: 'Task from server 2', isCompleted: true }
        ];
        this.queue = Promise.resolve();
    }

    simulateNetworkDelay(time = 1000) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() < 0.2) {
                    reject(new Error('Network error'));
                } else {
                    resolve();
                }
            }, time);
        });
    }

    fetchTasks(page = 1, pageSize = 5) {
        return this.simulateNetworkDelay(2000).then(() => {
            const start = (page - 1) * pageSize;
            const end = start + pageSize;
            return this.tasks.slice(start, end);
        });
    }

    addTaskToServer(task) {
        return this.enqueue(() => this.simulateNetworkDelay(1000).then(() => {
            const newTask = { id: this.tasks.length ? Math.max(...this.tasks.map(t => t.id)) + 1 : 1, ...task };
            this.tasks.push(newTask);
            console.log(`Task "${task.name}" added to server`)
            return newTask;
        }));
    }

    deleteTaskFromServer(taskId) {
        return this.enqueue(() => this.simulateNetworkDelay(1500).then(() => {
            this.tasks = this.tasks.filter(task => task.id !== taskId);
            console.log(`Task with ID ${taskId} deleted from server`);
            return taskId;
        }));
    }

    updateTaskOnServer(taskId, updatedData) {
        return this.enqueue(() => this.simulateNetworkDelay(1200).then(() => {
            const task = this.tasks.find(t => t.id === taskId);
            if (!task) throw new Error('Task not found');
            Object.assign(task, updatedData);
            return task;
        }));
    }

    enqueue(operation) {
        this.queue = this.queue.then(operation).catch(error => console.error(error));
        return this.queue;
    }
}

// Класс User
class User {
    constructor(id, name, taskManager) {
        this.id = id;
        this.name = name;
        this.tasks = [];
        this.taskManager = taskManager;
    }

    addTask(task) {
        this.tasks.push(task);
    }

    getTasks() {
        return this.tasks;
    }

    async syncTasks(page = 1) {
        try {
            console.log('Update tasks...');
            const serverTasks = await this.taskManager.fetchTasks(page);
            this.tasks = serverTasks.map(task => new Task(task.id, task.name, task.isCompleted));
            console.log('Tasks synchronized:', this.getTasks());
        } catch (error) {
            console.error('Error syncing tasks:', error);
        }
    }
}

class Task {
    constructor(id, name, isCompleted) {
        this.id = id;
        this.name = name;
        this.isCompleted = isCompleted;
    }
}

// Тесты
(async function test() {
    const taskManager = new TaskManager();
    const user = new User(1, 'Андрей', taskManager);

    await user.syncTasks(); // Загружает задачи с "сервера"
    console.log(user.getTasks()); // Проверяем список задач

    await taskManager.addTaskToServer({ name: 'Task from server 3', isCompleted: false });
    await user.syncTasks();

    await taskManager.updateTaskOnServer(1, { name: 'Updated task from server 1', isCompleted: true });
    await user.syncTasks();

    await taskManager.deleteTaskFromServer(1);
    await user.syncTasks();
})();

//test