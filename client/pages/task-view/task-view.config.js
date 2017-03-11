export default ($stateProvider) => {
    "ngInject";
    $stateProvider
        .state('app.task', {
            url: '/task/ :id',
            component: 'taskView',
            resolve: {
                task: (TaskService, $stateParams) => {
                    return TaskService.getTask($stateParams.id);
                },
                taskGroups: (TaskService) => {
                    return TaskService.getTaskGroups();
                }
            }
        });
};