import angular from 'angular';
import singleTaskComponent from './single-task.component';
import datepicker from 'angular-ui-bootstrap/src/datepicker';

let singleTaskModule = angular.module('singleTaskModule', [
    datepicker
])
.component('singleTask', singleTaskComponent)
.name;

export default singleTaskModule;