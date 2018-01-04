import { Component, OnInit, ViewChild, SimpleChanges } from '@angular/core';
import { cricketer } from '../first/first.component';
import { CricketerViewComponent } from './cricketer-view/cricketer-view.component';
import { DoCheck, OnChanges, OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { CricketerService } from '../../services/cricketer.service';


@Component({
  selector: 'app-cricketers',
  templateUrl: './cricketers.component.html',
  styleUrls: ['./cricketers.component.scss']
})
export class CricketersComponent {




  @ViewChild('viewCricketerComponent') viewCricketerComponent: CricketerViewComponent;
  activeCricketer: cricketer;
  activeIndex = -1;
  cricketers: Array<cricketer>;
  constructor(private cricketerService: CricketerService) {
    this.cricketers = this.cricketerService.cricketers;
  }



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
