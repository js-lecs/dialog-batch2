import { Component, OnInit } from '@angular/core';
import { CricketerService } from '../../services/cricketer.service';
import { TaskListComponent } from '../tasks/task-list/task-list.component';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-directive-example',
  templateUrl: './directive-example.component.html',
  styleUrls: ['./directive-example.component.scss']
})
export class DirectiveExampleComponent implements OnInit {

  title: 'Hello World';
  // cricketerList: Array<any> = [];
  taskList: Array<any> = [];

  constructor(
    // private cricketerService: CricketerService
    private taskService: TaskService
  ) { }

  ngOnInit() {
    // this.cricketerList = this.cricketerService.getCricketers();
    this.taskService.getTasks().subscribe((data) => {
      this.taskList = data;
    });
  }

}
