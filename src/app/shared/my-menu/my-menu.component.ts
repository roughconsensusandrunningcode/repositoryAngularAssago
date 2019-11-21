import { Component, OnInit } from '@angular/core';
import { MenuItem } from './menu-item';
import { ContextService } from 'src/app/services/context.service';
import { ProductsService } from 'src/app/services/products.service';
import { User } from 'src/app/users/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-menu',
  templateUrl: './my-menu.component.html',
  styleUrls: ['./my-menu.component.css']
})
export class MyMenuComponent {

  menu: MenuItem[] = [];
  visualizzazioni = 0;
  numeroProdotti = 0;
  currentUser: User = null;


  constructor(private router: Router, private service: ContextService, private productService: ProductsService) {
    this.service.setVisualizzazioni(58);
    this.visualizzazioni = this.service.getVisualizzazioni();
    this.menu = service.getMenu();
    this.numeroProdotti = this.productService.getNumeroProdotti();
    this.currentUser = this.service.getCurrentUser();
  }

  logout() {
    this.currentUser = null;
    this.service.setCurrentUser(null);
  }

  login() {
    this.router.navigate(['/login']);
  }

}
