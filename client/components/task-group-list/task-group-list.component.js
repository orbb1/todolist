import template from './task-group-list.html';

let taskGroupListComponent = {
    template,
    bindings: {
        taskGroups: '=',
        move: '='
    }
};

export default taskGroupListComponent;