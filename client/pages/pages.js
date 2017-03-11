import angular from 'angular';
import homeModule from './home/home';
import taskViewModule from './single-task/task-view';

let pagesModule = angular.module('pages', [
    taskViewModule,
    homeModule
]).name;

export default pagesModule;