import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { cricketer } from '../../first/first.component';
import { CricketerService } from '../../../services/cricketer.service';

@Component({
  selector: 'app-edit-cricketer',
  templateUrl: './edit-cricketer.component.html',
  styleUrls: ['./edit-cricketer.component.scss']
})
export class EditCricketerComponent implements OnInit {

  cricketer: cricketer;
  constructor(private route: ActivatedRoute,
    private cricketerService: CricketerService) {
    this.route.params.subscribe((params) => {
      this.cricketer = this.cricketerService.cricketers[+params.id];
    });
  }

  ngOnInit() {
  }

}
