class ToDo {
    constructor(task) {
        this.task = task;
        this.completed = false;
    };

    setCompleted() {
        this.completed = true;
    };
};

export default ToDo;