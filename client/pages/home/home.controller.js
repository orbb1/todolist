class HomeController {
    constructor($scope) {
        "ngInject";
        this.scope = $scope;
        this.scope.newTaskForm = {};
        this.newTask;
        this.showNewTaskInput = false;
        this.headerTitle = 'Maxello';

        this.getNewId = this.getNewId.bind(this);
        this.addTask = this.addTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
        this.deleteGroup = this.deleteGroup.bind(this);
    }

    getNewId = () => {
        return Math.max.apply(Math, this.tasks.map(function (task) {
            return task.taskId;
        })) + 1;
    };
    addTask = (newTodo, taskGroup) => {
        let today = new Date().toDateString();
        this.tasks.push({
            taskName: newTodo.taskName,
            due: newTodo.due,
            person: newTodo.person,
            priority: newTodo.priority,
            complete: false,
            create: today,
            comments: [],
            group: taskGroup, 
            taskId: this.getNewId()
        });
    };

    deleteTask = (deadTask) => {
        let index = this.tasks.indexOf(deadTask);
        this.tasks.splice(index, 1);
    };

    deleteGroup = (deadGroup) => {
        let groupIndex = this.taskGroups.indexOf(deadGroup);
        this.taskGroups.splice(groupIndex, 1);
    }
}

export default HomeController;