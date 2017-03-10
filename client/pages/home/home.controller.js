class HomeController {
    constructor() {
        this.taskGroups = [ 'Old Group','New Group']
        this.tasks = [
                    {
                        taskName: 'Old task',
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
        this.move = this.move.bind(this);
    }
    move = (todo, oldGroup, newGroup) => {
        var index = oldGroup.tasks.indexOf(todo);
        newGroup.tasks.push(todo);
        oldGroup.tasks.splice(index, 1);
    }
}

export default HomeController;