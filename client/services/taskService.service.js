import { tasks } from '../configs/config';

class TaskService {
    constructor() {
        this.tasks = tasks;
        this.getTasks = this.getTasks.bind(this);
        this.getTask = this.getTask.bind(this);
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
    }
}

export default TaskService;