class TaskViewController {
    constructor() {
        this.priorities = ['high', 'middle', 'low'];
        this.headerTitle = 'Maxello';
        
        this.changeTasktitle = this.changeTasktitle.bind(this);
        this.addComent = this.addComent.bind(this);
    }
    addComent = (comAuthor, comText) => {
        this.task.comments.push({
            author: comAuthor,
            comment: comText
        })
    };

    changeTasktitle = (newtodoTitle) => {
        if (newtodoTitle) {
            this.task.taskName = newtodoTitle;
        }

        return this.task.taskName;
    }
}

export default TaskViewController;