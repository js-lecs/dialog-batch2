import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FORM_ERR } from '../../config/form-errors';

@Component({
  selector: 'app-error-handler',
  templateUrl: './error-handler.component.html',
  styleUrls: ['./error-handler.component.scss']
})
export class ErrorHandlerComponent implements OnInit {

  @Input() formC: FormControl;
  constructor() { }

  ngOnInit() {

  }

  loadErrors(errors) {
    let str = '';

    for (const key in errors) {
      if (errors.hasOwnProperty(key)) {

        if (FORM_ERR[key]) {

          str += FORM_ERR[key] + ', ';
        } else {
          str += key;
        }
      }
    }
    return str;
  }
}
