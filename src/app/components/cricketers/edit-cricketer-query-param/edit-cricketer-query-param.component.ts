import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-cricketer-query-param',
  templateUrl: './edit-cricketer-query-param.component.html',
  styleUrls: ['./edit-cricketer-query-param.component.scss']
})
export class EditCricketerQueryParamComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params) => {
      alert(`ID is ${params.id}`);
    });
  }

  ngOnInit() {
  }

}
