import angular from 'angular';
import taskGroupListModule from './task-group-list/task-group-list';
import singleTaskModule from './single-task/single-task';

let componentsModule = angular.module('components', [
    taskGroupListModule,
    singleTaskModule
]).name;

export default componentsModule;