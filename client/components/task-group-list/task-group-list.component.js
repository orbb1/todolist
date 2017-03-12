import template from './task-group-list.html';
import './task-group-list.css';

let taskGroupListComponent = {
    template,
    bindings: {
        taskGroups: '=',
        move: '=',
        tasks: '=',
        getNewId: '&',
        addTask: '=',
        newTask: '=',
        deleteTask: '=',
        deleteGroup: '='
    }
};

export default taskGroupListComponent;