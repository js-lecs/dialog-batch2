import { Component, ViewChild } from '@angular/core';
import { FirstComponent } from './components/first/first.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  @ViewChild('first') firstComponent: FirstComponent;

  constructor() { }

  callChild() {
    this.firstComponent.greet();
  }
}
