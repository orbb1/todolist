class HomeController {
    constructor() {
        this.getNewId = this.getNewId.bind(this);
        this.addTask = this.addTask.bind(this);
        this.taskGroups = ['Old Group', 'New Group']
    }

    getNewId = () => {
        return Math.max.apply(Math, this.tasks.map(function (task) {
            return task.taskId;
        })) + 1;
    };
    addTask = (newTaskName, taskGroup) => {
        this.tasks.push({
            taskName: newTaskName,
            group: taskGroup, 
            taskId: this.getNewId()
        });
    }
}

export default HomeController;