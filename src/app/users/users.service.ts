import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  getUsers(): User[] {
    return [
      {name: 'Mario', surname: 'Rossi', position: 'developer'},
      {name: 'Luigi', surname: 'Bianchi', position: 'developer'},
      {name: 'Antonio', surname: 'Verdi', position: 'senior developer'},
      {name: 'Giacomo', surname: 'Leopardi', position: 'poeta'},
    ];
  }

}
