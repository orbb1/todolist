import angular from 'angular';
import homeModule from './home/home';
import taskViewModule from './task-view/task-view';

let pagesModule = angular.module('pages', [
    taskViewModule,
    homeModule
]).name;

export default pagesModule;