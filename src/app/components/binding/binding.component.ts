import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.scss']
})
export class BindingComponent implements OnInit {

  name: String = '';
  isButtonDisabled: Boolean = true;

  constructor() { }

  ngOnInit() {
  }

  greet() {
    alert("Hello from Binding Component!");
  }
}
