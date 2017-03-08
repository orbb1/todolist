import angular from 'angular';
import taskListModule from './task-list/task-list';

let componentsModule = angular.module('components', [
    taskListModule
]).name;

export default componentsModule;