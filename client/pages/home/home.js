import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component';
import homeConfig from './home.config';
import taskListModule from '../../components/task-list/task-list';

let homeModule = angular.module('pages.home', [
    taskListModule,
    uiRouter
]).component('home', homeComponent)
.config(homeConfig)
.name;

export default homeModule;