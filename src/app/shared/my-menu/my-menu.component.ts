import { Component, OnInit } from '@angular/core';
import { MenuItem } from './menu-item';
import { ContextService } from 'src/app/services/context.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-my-menu',
  templateUrl: './my-menu.component.html',
  styleUrls: ['./my-menu.component.css']
})
export class MyMenuComponent {

  menu: MenuItem[] = [];
  visualizzazioni = 0;
  numeroProdotti = 0;

  constructor(private service: ContextService, private productService: ProductsService) {
    this.service.setVisualizzazioni(58);
    this.visualizzazioni = this.service.getVisualizzazioni();
    this.menu = service.getMenu();
    this.numeroProdotti = this.productService.getNumeroProdotti();
  }

}
