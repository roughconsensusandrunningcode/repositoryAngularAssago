import { Component, OnInit } from '@angular/core';
import { LoginModel } from './login.model';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { ContextService } from 'src/app/services/context.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  credentials: LoginModel = { username: '', password: ''};
  check = true;

  constructor(private router: Router, private service: LoginService, private context: ContextService) { }

  login() {
    this.service.loginApi(this.credentials).subscribe(
      users => {
        this.check = users && users.length === 1;
        if (this.check)  {
          this.context.setCurrentUser(users[0]);
          this.router.navigate(['/welcome']);
         }
      });
  }
}
