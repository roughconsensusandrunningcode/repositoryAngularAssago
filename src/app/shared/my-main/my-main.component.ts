import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-main',
  templateUrl: './my-main.component.html',
  styleUrls: ['./my-main.component.css']
})
export class MyMainComponent implements OnInit {

  mainTitle = 'Main Title';
  mainSubTitle = 'Main SubTitle';
  mainContent = 'bla bla bla';
  mainViews = 42;

  constructor() { }

  ngOnInit() {
  }

}
