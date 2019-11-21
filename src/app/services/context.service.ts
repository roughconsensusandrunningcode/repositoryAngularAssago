import { Injectable } from '@angular/core';
import { MenuItem } from '../shared/my-menu/menu-item';
import { User } from '../users/user';

@Injectable({
  providedIn: 'root'
})
export class ContextService {

  private visualizzazioni: number;
  private currenUser: User = null;

  constructor() { }

  getMenu(): MenuItem[] {
    return [
      {text: 'Home', link: '/'},
      {text: 'Products', link: '/products'},
      {text: 'Users', link: '/users'},
      {text: 'About', link: '/about'},
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

    return {id: 54, name: 'Igor', surname: 'Stravinski', position: 'Comositore'};

   // return this.currenUser;
  }

  setCurrentUser(user: User) {
    this.currenUser = user;
  }
}
