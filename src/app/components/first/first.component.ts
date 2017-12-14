import { Component, OnInit } from '@angular/core';
import { AfterContentInit } from '@angular/core/src/metadata/lifecycle_hooks';

declare var $: any;
export interface cricketer {
  name: String;
  type: String;
}

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit, AfterContentInit {

  activeTab: String = 'binding';

  constructor() {

  }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    $('#jqueryExample').click();
  }


  greet() {
    alert("Hello from First Component!");
  }

  tabChange(type) {
    this.activeTab = type;
  }
}
