import angular from 'angular';
import singleTaskComponent from './single-task.component';

let singleTaskModule = angular.module('singleTaskModule', [])
.component('singleTask', singleTaskComponent)
.name;

export default singleTaskModule;