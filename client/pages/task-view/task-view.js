import angular from 'angular';
import uiRouter from 'angular-ui-router';
import taskViewComponent from './task-view.component';
import taskViewConfig from './task-view.config';
import TaskService from '../../services/taskService.service';
import singleTaskModule from '../../components/single-task/single-task';

let taskViewModule = angular.module('pages.taskView', [
    singleTaskModule,
    uiRouter
])
    .service('TaskService', TaskService)
    .config(taskViewConfig)
    .component('taskView', taskViewComponent)
    .name;

export default taskViewModule;