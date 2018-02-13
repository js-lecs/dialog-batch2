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
        return this.http.get(`${URL_CONFIG.host}/tasks`) // raw html
            .map((response: Response) => {
                console.log('first output', response);
                return response.json(); // convert html to json
            }).map((data: Array<any>) => {

                console.log('second output', data);

                data = data
                    .map((obj) => {
                        const task = new Task(obj, 'init');
                        return task;
                    });
                console.log('third output', data);
                return data; // convert json array to Task Class object array
            }).map((data: Array<Task>) => {
                // data = data.filter((obj: Task) => obj.title === 'aaaa');
                // console.log('fourth output', data);
                return data;
            });
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
