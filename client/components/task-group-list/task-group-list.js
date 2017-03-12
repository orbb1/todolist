import angular from 'angular';
import uiRouter from 'angular-ui-router';
import taskGroupListComponent from './task-group-list.component';
import taskGroupComponent from './task-group.component';
import datepickerPopup from 'angular-ui-bootstrap/src/datepickerPopup';

let taskGroupListModule = angular.module('taskGroupListModule', [
    datepickerPopup
])
    .component('taskGroup', taskGroupComponent)
    .component('taskGroupList', taskGroupListComponent)
    .name;

export default taskGroupListModule;