import template from './home.html';
import controller from './home.controller';

let homeComponent = {
    template,
    controller,
    bindings: {
        tasks: '=',
        taskGroups: '='
    }
};

export default homeComponent;