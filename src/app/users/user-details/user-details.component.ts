import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent  {

  user: User = null;

  constructor(private route: ActivatedRoute, private userService: UsersService) {
    const id =  parseInt(this.route.snapshot.paramMap.get('id'), 10);
    this.user = this.userService.getUser(id);
  }

}
