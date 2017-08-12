export const tasks = [
            {
                taskName: 'Call accountant, and call everyone else',
                taskId: 1,
                group: 'Old Group',
                create: 'today',
                due: 'tomorrow',
                priority: 'high',
                person: 'Maxim',
                complete: false,
                comments: [
                    {
                        author: 'Maxim',
                        comment: 'dont forget to leave comment'
                    }
                ]
            }, {
                taskName: 'New task',
                taskId: 2,
                group: 'Old Group',
                create: 'today',
                due: 'tomorrow',
                priority: 'low',
                person: 'Maxim',
                complete: false,
                comments: [
                    {
                        author: 'Maxim',
                        comment: 'important task'
                    }
                ]
            }, {
                taskName: 'Do something important today, call someone important today',
                taskId: 3,
                group: 'Old Group',
                create: 'today',
                due: 'tomorrow',
                priority: 'low',
                person: 'Maxim',
                complete: false,
                comments: [
                    {
                        author: 'Maxim',
                        comment: 'very important task'
                    }
                ]
            },  {
                taskName: 'Do nothing',
                taskId: 3,
                group: 'lazy Group',
                create: 'today',
                due: 'tomorrow',
                priority: 'low',
                person: 'Maxim',
                complete: false,
                comments: []
            }
        ];

export const taskGroups = ['Old Group', 'lazy Group'];