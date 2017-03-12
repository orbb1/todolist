import angular from 'angular';
import uiRouter from 'angular-ui-router';
import taskViewComponent from './task-view.component';
import taskViewConfig from './task-view.config';
import TaskService from '../../services/taskService.service';
import singleTaskModule from '../../components/single-task/single-task';
import headerModule from '../../components/header/header';

let taskViewModule = angular.module('pages.taskView', [
    singleTaskModule,
    headerModule,
    uiRouter
])
    .service('TaskService', TaskService)
    .config(taskViewConfig)
    .component('taskView', taskViewComponent)
    .name;

export default taskViewModule;