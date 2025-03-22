//  This is to include the ES2015 (ES6) library, which contains features used in this code.
/// <reference lib="es2015" /> 

class TaskManager {

    private tasks: { id: number; name: string; status: string }[] = [];
    private currentId: number = 1; 

    // Method to add a task
    addTask(name: string): void {

        // Insures that the task name is a string
        if (typeof name !== 'string') {
            console.error("Task name must be a string.");
            return;
        }

        const newTask = {
            id: this.currentId,
            name: name,
            status: 'pending'
        };

        // Adds the task
        this.tasks.push(newTask);

        this.currentId++;
        }

        // Method to mark task as completed
        completeTask(id: number): void {
            const task = this.tasks.find(task => task.id === id);
            if (task) {
                task.status = 'completed';
            } else {
                console.error(`Task with id ${id} not found.`);
            }
        }

        // Method to display all tasks
        displayTasks(): void {
            this.tasks.forEach(task => {
                console.log(`ID: ${task.id}, Name: ${task.name}, Status: ${task.status}`);
            });
        }
}

const taskManager = new TaskManager();
taskManager.addTask("Learn TypeScript");
taskManager.addTask("Build a project");
taskManager.addTask("Deploy to production");

taskManager.completeTask(2); 

taskManager.displayTasks();