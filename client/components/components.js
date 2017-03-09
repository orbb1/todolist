import angular from 'angular';
import taskGroupListModule from './task-group-list/task-group-list';

let componentsModule = angular.module('components', [
    taskGroupListModule
]).name;

export default componentsModule;