import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component';
import homeConfig from './home.config';
import taskGroupListModule from '../../components/task-group-list/task-group-list';

let homeModule = angular.module('pages.home', [
    taskGroupListModule,
    uiRouter
]).component('home', homeComponent)
.config(homeConfig)
.name;

export default homeModule;