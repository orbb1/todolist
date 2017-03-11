import angular from 'angular';
import TaskService from './taskService.service';

let servicesModule = angular.module('servicesModule', [])
.service('TaskService', TaskService)
.name;

export default servicesModule;