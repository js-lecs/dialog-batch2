import { Injectable } from '@angular/core';
import { cricketer } from '../components/first/first.component';

@Injectable()
export class CricketerService {
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

  getCricketers() {
    return this.cricketers;
  }
}
