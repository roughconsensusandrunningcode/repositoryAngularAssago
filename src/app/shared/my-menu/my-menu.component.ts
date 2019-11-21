import { Component, OnInit } from '@angular/core';
import { MenuItem } from './menu-item';

@Component({
  selector: 'app-my-menu',
  templateUrl: './my-menu.component.html',
  styleUrls: ['./my-menu.component.css']
})
export class MyMenuComponent {

  menu: MenuItem[] = [];

  constructor() {
    this.menu = this.getMenu();
  }

  getMenu(): MenuItem[] {
    return [
      {text: 'Home', link: '#'},
      {text: 'Products', link: '#'},
      {text: 'Users', link: '#'},
      {text: 'About', link: '#'},
      {text: 'Contacts', link: '#'},
    ];
  }


}
