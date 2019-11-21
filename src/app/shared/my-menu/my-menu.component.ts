import { Component, OnInit } from '@angular/core';
import { MenuItem } from './menu-item';
import { ContextService } from 'src/app/services/context.service';

@Component({
  selector: 'app-my-menu',
  templateUrl: './my-menu.component.html',
  styleUrls: ['./my-menu.component.css']
})
export class MyMenuComponent {

  menu: MenuItem[] = [];
  visualizzazioni = 0;

  constructor(private service: ContextService) {
    this.service.setVisualizzazioni(58);
    this.visualizzazioni = this.service.getVisualizzazioni();
    this.menu = service.getMenu();
  }

}
