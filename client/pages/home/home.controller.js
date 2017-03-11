class HomeController {
    constructor() {
        this.getNewId = this.getNewId.bind(this);
        this.addTask = this.addTask.bind(this);
        this.taskGroups = ['Old Group', 'New Group']
        this.tasks = [
            {
                taskName: 'Old task',
                taskId: 1,
                group: 'Old Group',
                create: 'today',
                due: 'tomorrow',
                person: 'Bauyrzhan',
                complete: false,
                comments: [
                    {
                        author: 'Bauyrzhan',
                        comment: 'pozhrat kazy'
                    }
                ]
            }, {
                taskName: 'Very Old task',
                taskId: 2,
                group: 'New Group',
                create: 'today',
                due: 'tomorrow',
                person: 'Bauyrzhan',
                complete: false,
                comments: [
                    // { 
                    //     author: 'Bauyrzhan',
                    //     comment: 'pozhrat samsa' 
                    // }
                ]
            }, {
                taskName: 'New task',
                taskId: 3,
                group: 'New Group',
                create: 'today',
                due: 'tomorrow',
                person: 'Maxim',
                complete: false,
                comments: [
                    {
                        author: 'Maxim',
                        comment: 'important task'
                    }
                ]
            }
        ];
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