import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component';
import homeConfig from './home.config';
import taskGroupListModule from '../../components/task-group-list/task-group-list';
import TaskService from '../../services/taskService.service';
import headerModule from '../../components/header/header';

let homeModule = angular.module('pages.home', [
    headerModule,
    taskGroupListModule,
    uiRouter
])
    .service('TaskService', TaskService)
    .config(homeConfig)
    .component('home', homeComponent)
    .name;

export default homeModule;