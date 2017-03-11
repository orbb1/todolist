import template from './task-group.html';

let taskGroupComponent = {
    template,
    bindings: {
        taskGroups: '=',
        taskGroup: '=',
        move: '=',
        tasks: '=',
        getNewId: '&',
        addTask: '='
    }
}

export default taskGroupComponent;