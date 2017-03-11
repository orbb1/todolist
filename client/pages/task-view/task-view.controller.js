class TaskViewController {
    constructor() {
        this.priorities = ['high', 'middle', 'low']
        this.addComent = this.addComent.bind(this);
    }
    addComent = (comAuthor, comText) => {
        this.task.comments.push({
            author: comAuthor,
            comment: comText
        })
    }
}

export default TaskViewController;