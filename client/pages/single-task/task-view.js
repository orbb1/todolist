import angular from 'angular';
import uiRouter from 'angular-ui-router';
import taskViewComponent from './task-view.component';
import taskViewConfig from './task-view.config';
import TaskService from '../../services/taskService.service';

let taskViewModule = angular.module('pages.taskView', [
    uiRouter
])
    .service('TaskService', TaskService)
    .config(taskViewConfig)
    .component('taskView', taskViewComponent)
    .name;

export default taskViewModule;