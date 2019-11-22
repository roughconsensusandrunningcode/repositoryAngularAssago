import { Injectable } from '@angular/core';
import { MenuItem } from '../shared/my-menu/menu-item';
import { User } from '../users/user';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContextService {

  private visualizzazioni: number;
  private currenUser: User = null;
  private userSubject$: Subject<User>;
  userLogged$: Observable<User>;

  constructor() {
    this.userSubject$ = new Subject<User>();
    this.userLogged$ = this.userSubject$.asObservable();
   }

  getMenu(): MenuItem[] {
    return [
      {text: 'Home', link: '/'},
      {text: 'Products', link: '/products'},
      {text: 'Users', link: '/users'},
      {text: 'Posts', link: '/posts'},
      {text: 'Contacts', link: '/contacts'},
    ];
  }

  getVisualizzazioni(): number {
    return this.visualizzazioni;
  }

  setVisualizzazioni(numero: number) {
    this.visualizzazioni = numero;
  }

  getCurrentUser(): User {
    return this.currenUser;
  }

  setCurrentUser(user: User) {
    this.currenUser = user;
    this.userSubject$.next(user);
  }
}
