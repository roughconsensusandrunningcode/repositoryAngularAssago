import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent  {

  headerTitle = 'Hello, Assago!';
  headerSubTitle =
  'This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.';
  headerContent = 'It uses utility classes for typography and spacing to space content out within the larger container.';
  headerLearn = 'Learn more';

  constructor(private router: Router) { }

  naviga() {
    this.router.navigate(['/products']);
  }

}
