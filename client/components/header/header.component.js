import template from './header.html';
import './header.css';

let headerComponent = {
    template,
    bindings: {
        headerTitle: '<'
    }
}

export default headerComponent;