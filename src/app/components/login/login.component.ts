import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login(username, password) {
    if (username === 'abc' && password === '123') {
      alert('successfully Logged In');
      localStorage.setItem('loggedIn', 'true');
      this.router.navigate(['/', 'app', 'home']);
    }
  }
}
