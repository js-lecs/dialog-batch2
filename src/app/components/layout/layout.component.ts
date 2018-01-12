import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(private route: Router) {
    // auto logout after 7 seconds
    // setTimeout(() => {
    //   this.logout();
    // }, 7000);
  }

  ngOnInit() {
  }

  logout() {
    localStorage.removeItem('loggedIn');
    this.route.navigate(['/', 'login']);
  }

}
