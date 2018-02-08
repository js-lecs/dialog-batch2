import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { URL_CONFIG } from '../config/url.config';
import { Task } from '../components/models/Task.model';



@Injectable()
export class TaskService {

    static randomeFn() {
        return true;
    }

    constructor(private http: Http) {

    }

    getTasks() {
        return this.http.get(`${URL_CONFIG.host}/tasks`)
            .map((response: Response) => response.json());
    }

    createTask(data: Task) {
        return this.http.post(`${URL_CONFIG.host}/task`, data)
            .map((response: Response) => response.json());
    }

    updateTask(data: Task) {
        return this.http.put(`${URL_CONFIG.host}/task`, data)
            .map((response: Response) => response.json());
    }


}
