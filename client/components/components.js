import angular from 'angular';
import taskGroupListModule from './task-group-list/task-group-list';
import singleTaskModule from './single-task/single-task';
import headerModule from './header/header';

let componentsModule = angular.module('components', [
    taskGroupListModule,
    singleTaskModule,
    headerModule
]).name;

export default componentsModule;