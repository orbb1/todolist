import template from './single-task.html';

let singleTaskComponent = {
    template,
    bindings: {
        task: '=',
        addComent: '=',
        priorities: '<',
        taskGroups: '<'
    }
}

export default singleTaskComponent;