import { TaskService } from '../../services/task.service';

export class Task {
    public title: String;
    public description: String;
    public subTasks: Array<String>;
    public _id: String;
    public user: {
        email: String;
        username: String;
    };

    constructor(data: any) {
        this.title = data.title;
        this.description = data.description;
        this.subTasks = data.subTasks;
        this.user = data.user;
    }

    getSubTaskLength() {
        return this.subTasks.length;
    }

    randomeFn() {
        return TaskService.randomeFn();
    }
}

