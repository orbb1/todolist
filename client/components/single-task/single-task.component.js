import template from './single-task.html';
import './single-task.css';

let singleTaskComponent = {
    template,
    bindings: {
        task: '=',
        addComent: '=',
        priorities: '<',
        taskGroups: '<',
        changeTasktitle: '='
    }
}

export default singleTaskComponent;