export default ($stateProvider) => {
    "ngInject";
    $stateProvider
        .state('app.home', {
            url: '/home',
            component: 'home',
            resolve: {
                tasks: (TaskService) => {
                    return TaskService.getTasks()
                }
            }
        });
};