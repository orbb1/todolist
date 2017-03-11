import { tasks, taskGroups } from '../configs/config';

class TaskService {
    constructor() {
        this.tasks = tasks;
        this.taskGroups = taskGroups;
        this.getTasks = this.getTasks.bind(this);
        this.getTask = this.getTask.bind(this);
        this.getTaskGroups = this.getTaskGroups.bind(this);
    }
    getTasks = () => this.tasks;
    
    getTask = (tId) => {
        let taskowski;
        this.tasks.forEach((task, index) => {
            if (task.taskId != tId) {
                return false;
            }
            taskowski = task;
        });
        return taskowski;
    };

    getTaskGroups = () => this.taskGroups;
}

export default TaskService;