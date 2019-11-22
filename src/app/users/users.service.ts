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
    ];
  }

  getUser(id: number): User {
    return this.getUsers().find(u => u.id === id);
  }

}
