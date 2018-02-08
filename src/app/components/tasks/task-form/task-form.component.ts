import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { Task } from '../../models/Task.model';
import { TaskService } from '../../../services/task.service';



@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {

  taskFrom: FormGroup;
  validationString: String = 'abc';
  genderList = [
    { code: 'M', displayName: 'Male' },
    { code: 'F', displayName: 'Female' }
  ];

  editUserObj = {
    username: 'nilesh',
    email: 'aaa@a.com'
  };

  constructor(private fb: FormBuilder, private taskService: TaskService) {
    this.initForm();
    // this.demoCallback((str) => { alert(str); });
    this.demoPromise()
      .then((data: any) => {
        // alert(data.message);
      }, (err) => {
        console.log(err);
      });
  }

  ngOnInit() {
  }

  initForm() {
    this.taskFrom = this.fb.group({
      'user': this.fb.group({
        'username': ['', [Validators.required]],
        'email': ['', [Validators.required, Validators.email]],
        'gender': ['M', [Validators.required]]
      }),
      'title': ['',
        [Validators.required, Validators.maxLength(15), this.customValidator.bind(this)],
        [this.customAsyncValidator.bind(this)]
      ],

      'description': ['', [Validators.required], [this.customAsyncValidator.bind(this)]],
      'subTasks': this.fb.array([
        ['', [Validators.required]],
        ['', [Validators.required]]
      ])
    });
  }

  addNewSubTaskControl() {
    (<FormArray>this.taskFrom.controls['subTasks'])
      .insert((<FormArray>this.taskFrom.controls['subTasks']).length, new FormControl('', [Validators.required]));
  }
  submit() {
    console.log(this.taskFrom.value);
    if (this.taskFrom.valid) {
      const task = new Task(this.taskFrom.value);
      console.log('task Obj', task);
      this.taskService.createTask(task)
        .subscribe((data) => {
          alert('Successfully Added');
          console.log('task created', data);
        }, (err) => {
          console.log('task create error', err);
        });
    }
  }

  customValidator(c: FormControl) {
    if (c.value === this.validationString) {
      return {
        customError: {
          message: 'Cant contain ' + this.validationString
        }
      };
    } else {
      return;
    }
  }


  customAsyncValidator(c: FormControl) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {

        if (c.value === this.validationString) {

          resolve({
            customAsyncError: {
              message: 'Async Cant contain ' + this.validationString
            }
          });
        } else {
          resolve();
        }
      }, 3000);

    });

  }

  async resolveAsyncPromise() {
    try {
      const obj: any = await this.demoPromise();
      // alert(obj.message);
    } catch (err) {
      console.log(err);
    }

  }


  demoCallback(fn) {
    setTimeout(() => {
      // fn('hello world');
    }, 3000);
  }

  demoPromise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          resolve({
            message: 'hello World'
          });
        } catch (e) {
          reject('something went wrong');
        }
      }, 3000);

    });

  }

  search(nic, mobile) {
    console.log(arguments);
  }

  tmpFormSubmit(form) {
    console.log(form.value);
  }
}
