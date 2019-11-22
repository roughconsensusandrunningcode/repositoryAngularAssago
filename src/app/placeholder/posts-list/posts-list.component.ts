import { Component, OnInit } from '@angular/core';
import { PlaceholderService } from '../placeholder.service';
import { Observable } from 'rxjs';
import { Post } from '../post';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent {

  posts$: Observable<Post[]>;
  constructor(private service: PlaceholderService) {
    this.posts$ = this.service.getPosts();
  }

}
