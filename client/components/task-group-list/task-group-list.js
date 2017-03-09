import angular from 'angular';
import uiRouter from 'angular-ui-router';
import taskGroupListComponent from './task-group-list.component';
import taskGroupComponent from './task-group.component';

let taskGroupListModule = angular.module('taskGroupListModule', [])
    .component('taskGroup', taskGroupComponent)
    .component('taskGroupList', taskGroupListComponent)
    .name;

export default taskGroupListModule;