import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, DoCheck, OnChanges, OnDestroy } from '@angular/core';
import { cricketer } from '../../first/first.component';


@Component({
  selector: 'app-cricketer-view',
  templateUrl: './cricketer-view.component.html',
  styleUrls: ['./cricketer-view.component.scss']
})
export class CricketerViewComponent implements OnInit, DoCheck, OnChanges, OnDestroy {

  loading: Boolean = true;
  updatedName: String = '';
  @Input() cricketer: cricketer;
  @Output() nameEmitter: EventEmitter<String> = new EventEmitter();

  constructor() {
    console.log("constructor Called");

  }

  ngOnInit() {
    console.log("ngOnint called");
  }

  ngDoCheck(): void {
    console.log("ngDoCheck called");
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnc Changes called", changes);
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }
  ngOnDestroy(): void {
    console.log("On Destroy Called");
  }


  changeName() {
    // console.log("from child", this.updatedName);
    this.nameEmitter.emit(this.updatedName);

  }

}
