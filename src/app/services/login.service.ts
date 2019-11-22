import { Injectable } from '@angular/core';
import { LoginModel } from '../shared/login/login.model';
import { ContextService } from './context.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../users/user';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private context: ContextService) { }

  login(credentials: LoginModel): boolean {
    // qui ci sarà la chiamata http alle api di login
    // supponiamo che le credentiali siano giuste
    // e che le api ci ritornino uno User
    const user = {id: 42, name: 'Juri', surname: 'Gagarin', position: 'Developer', username: '', password: ''};
    this.context.setCurrentUser(user);
    return true;
  }

  loginApi(credentials: LoginModel): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:3000/users')
    .pipe( map( r => r.filter(k => k.username === credentials.username && k.password === credentials.password)));
  }



}
