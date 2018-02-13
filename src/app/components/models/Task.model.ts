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

    constructor(data: any, action: String = 'create') {
        switch (action) {
            case 'create':
                this.create(data);
                break;
            case 'init':
                this.init(data);
                break;
        }
    }

    create(data: any) {
        this.title = data.title;
        this.description = data.description;
        this.subTasks = data.subTasks;
        this.user = data.user;
    }

    init(data: any) {
        this.create(data);
        this._id = data._id;
    }

    getSubTaskLength() {
        return this.subTasks.length;
    }

    randomeFn() {
        return TaskService.randomeFn();
    }
}

