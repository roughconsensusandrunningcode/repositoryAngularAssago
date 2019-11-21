import { Component, OnInit } from '@angular/core';
import { LoginModel } from './login.model';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  credentials: LoginModel = { username: '', password: ''};
  check = true;

  constructor(private router: Router, private service: LoginService) { }

  login() {
    console.log(this.credentials);
    this.check = this.service.login(this.credentials);
    if (this.check) {
      this.router.navigate(['/welcome']);
    }
  }


}
