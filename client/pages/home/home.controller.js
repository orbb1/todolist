class HomeController {
    constructor() {
        this.taskGroups = [
            {
                groupName: 'Old Group',
                tasks: [
                    {
                        taskName: 'Old task',
                        create: 'today',
                        due: 'tomorrow',
                        person: 'Bauyrzhan',
                        comments: [
                            { 
                                author: 'Bauyrzhan',
                                comment: 'pozhrat kazy' 
                            }
                        ]
                    }, {
                        taskName: 'Very Old task',
                        create: 'today',
                        due: 'tomorrow',
                        person: 'Bauyrzhan',
                        comments: [
                            // { 
                            //     author: 'Bauyrzhan',
                            //     comment: 'pozhrat samsa' 
                            // }
                        ]
                    }
                ]
            }, {
                groupName: 'New Group',
                tasks: [
                    {
                        taskName: 'New task',
                        create: 'today',
                        due: 'tomorrow',
                        person: 'Maxim',
                        comments: [
                            { 
                                author: 'Maxim',
                                comment: 'important task' 
                            }
                        ]
                    }
                ]
            },
            
        ];
    }
}

export default HomeController;