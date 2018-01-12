import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { FormControl } from '@angular/forms/src/model';


@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {

  taskFrom: FormGroup;
  validationString: String = 'abc';

  constructor(private fb: FormBuilder) {
    this.initForm();
    // this.demoCallback((str) => { alert(str); });
    this.demoPromise()
      .then((data: any) => {
        alert(data.message);
      }, (err) => {
        console.log(err);
      });
  }

  ngOnInit() {
  }

  initForm() {
    this.taskFrom = this.fb.group({
      'title': ['',
        [Validators.required, Validators.maxLength(15), this.customValidator.bind(this)],
        [this.customAsyncValidator.bind(this)]
      ],
      'description': ['', [Validators.required], [this.customAsyncValidator.bind(this)]]
    });
  }

  submit() {
    console.log(this.taskFrom.value);
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
      alert(obj.message);
    } catch (err) {
      console.log(err);
    }

  }


  demoCallback(fn) {
    setTimeout(() => {
      fn('hello world');
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



}
