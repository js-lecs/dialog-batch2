import { Component, OnInit, ViewChild, SimpleChanges } from '@angular/core';
import { cricketer } from '../first/first.component';
import { CricketerViewComponent } from './cricketer-view/cricketer-view.component';
import { DoCheck, OnChanges, OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';


@Component({
  selector: 'app-cricketers',
  templateUrl: './cricketers.component.html',
  styleUrls: ['./cricketers.component.scss']
})
export class CricketersComponent {



  @ViewChild('viewCricketerComponent') viewCricketerComponent: CricketerViewComponent;
  activeCricketer: cricketer;
  activeIndex = -1;
  cricketers: Array<cricketer> = [
    {
      name: 'Sanath Jayasuriya',
      type: 'All rounder'
    },
    {
      name: 'Chaminda Vaas',
      type: 'bowler'
    },
    {
      name: 'Mahela Jayawardane',
      type: 'batsman'
    }
  ];


  selectCricketer(cricketer: cricketer, index) {
    this.activeCricketer = cricketer;
    this.activeIndex = index;
    // this.viewCricketerComponent.cricketer = cricketer;
  }

  doSomethingwithEmit(updatedName: String) {
    // this.activeCricketer.name = updatedName;
    if (this.activeIndex > -1) {
      this.cricketers[this.activeIndex].name = updatedName;
    }
    alert(`Update name caught by parent ${updatedName}`)
  }

  clearSelection() {
    this.activeIndex = -1;
  }
}
