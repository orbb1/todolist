import template from './task-group.html';

let taskGroupComponent = {
    template,
    bindings: {
        taskGroups: '=',
        taskGroup: '=',
        move: '=',
        tasks: '='
    }
}

export default taskGroupComponent;