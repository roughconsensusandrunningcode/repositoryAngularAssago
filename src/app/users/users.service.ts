import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }


  getUsersFromApi(): Observable<User[]> {
    return this.http.get<User[]>(environment.urlApiUnicredit);
  }


  getUsersAsObservable(): Observable<User[]> {
    return of(this.getUsers());
  }

  getUsers(): User[] {
    return [
      {id: 1, name: 'Mario', surname: 'Rossi', position: 'developer'},
      {id: 2, name: 'Luigi', surname: 'Bianchi', position: 'developer'},
      {id: 3, name: 'Antonio', surname: 'Verdi', position: 'senior developer'},
      {id: 4, name: 'Giacomo', surname: 'Leopardi', position: 'poeta'},
    ];
  }

  getUser(id: number): User {
    return this.getUsers().find(u => u.id === id);
  }

}
