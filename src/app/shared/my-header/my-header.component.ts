import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-header',
  templateUrl: './my-header.component.html',
  styleUrls: ['./my-header.component.css']
})
export class MyHeaderComponent implements OnInit {

  headerTitle = 'Hello, Assago!';
  headerSubTitle =
  'This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.';
  headerContent = 'It uses utility classes for typography and spacing to space content out within the larger container.';
  headerLearn = 'Learn more';

  constructor() { }

  ngOnInit() {
  }

}
