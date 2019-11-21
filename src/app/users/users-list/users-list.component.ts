import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from '../user';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent {

  users: User[] = [];
  constructor(private service: UsersService) {
    this.users = this.service.getUsers();
  }

}
