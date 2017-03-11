import template from './task-group-list.html';

let taskGroupListComponent = {
    template,
    bindings: {
        taskGroups: '=',
        move: '=',
        tasks: '=',
        getNewId: '&',
        addTask: '='
    }
};

export default taskGroupListComponent;