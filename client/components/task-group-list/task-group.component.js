import template from './task-group.html';
import './task-group.css';

let taskGroupComponent = {
    template,
    bindings: {
        taskGroups: '=',
        taskGroup: '=',
        move: '=',
        tasks: '=',
        getNewId: '&',
        addTask: '=',
        newTask: '=',
        deleteTask: '=',
        deleteGroup:'='
    }
}

export default taskGroupComponent;