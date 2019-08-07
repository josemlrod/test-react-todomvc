class ToDoItem {
    constructor(task) {
        this.task = task;
        this.completed = false;
    };

    setCompleted() {
        this.completed = !this.completed;
    };
};

export default ToDoItem;