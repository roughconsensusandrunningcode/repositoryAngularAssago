import { Component } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from '../user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent {

  observableUsers$: Observable<User[]>;

  constructor(private service: UsersService) {
    this.observableUsers$ = this.service.getUsersAsObservable();
  }

}
