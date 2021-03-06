import template from './task-view.html';
import controller from './task-view.controller';

let taskViewComponent = {
    controller,
    template,
    bindings: {
        task: '=',
        taskGroups: '<'
    }
}

export default taskViewComponent;