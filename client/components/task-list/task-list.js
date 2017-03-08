import angular from 'angular';
import uiRouter from 'angular-ui-router';
import taskListComponent from './task-list.component';

let taskListModule = angular.module('taskListModule', [])
    .component('taskList', taskListComponent)
    .name;

export default taskListModule;