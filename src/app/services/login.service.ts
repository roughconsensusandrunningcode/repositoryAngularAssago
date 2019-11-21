import { Injectable } from '@angular/core';
import { LoginModel } from '../shared/login/login.model';
import { ContextService } from './context.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private context: ContextService) { }

  login(credentials: LoginModel): boolean {
    // qui ci sarà la chiamata http alle api di login
    // supponiamo che le credentiali siano giuste
    // e che le api ci ritornino uno User
    const user = {id: 42, name: 'Juri', surname: 'Gagarin', position: 'Astronauta'};
    this.context.setCurrentUser(user);
    return true;
  }


}
