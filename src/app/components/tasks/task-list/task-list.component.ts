import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../../services/task.service';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subscription } from 'rxjs/Subscription';
import { Task } from '../../models/Task.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit, OnDestroy {

  taskListSubscription: Subscription;
  taskList$: Observable<any>;
  taskList: Array<Task> = [];
  constructor(private taskService: TaskService) {
    this.getTasks();
  }

  ngOnInit() {
  }
  ngOnDestroy(): void {
    this.taskListSubscription.unsubscribe();
  }

  getTasks() {
    this.taskListSubscription = this.taskService.getTasks()
      .subscribe((data: Array<Task>) => {
        console.log('tasks', data);
        const tsk: Task = new Task(data[5]);
        console.log(tsk.getSubTaskLength());
        this.taskList = data;
      });

    this.taskList$ = this.taskService.getTasks();
  }
}
