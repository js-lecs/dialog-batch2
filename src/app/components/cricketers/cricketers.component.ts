import { Component, OnInit } from '@angular/core';
import { cricketer } from '../first/first.component';

@Component({
  selector: 'app-cricketers',
  templateUrl: './cricketers.component.html',
  styleUrls: ['./cricketers.component.scss']
})
export class CricketersComponent implements OnInit {

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
  constructor() { }

  ngOnInit() {
  }

}
