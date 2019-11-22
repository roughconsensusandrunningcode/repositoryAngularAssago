import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/products/product';
import { ContextService } from 'src/app/services/context.service';
import { ProductsService } from 'src/app/services/products.service';
import { User } from 'src/app/users/user';

@Component({
  selector: 'app-my-footer',
  templateUrl: './my-footer.component.html',
  styleUrls: ['./my-footer.component.css']
})
export class MyFooterComponent implements OnInit {


  productFooter: Product;
  currentUser: User;
  visualizzazioni: number;
  prodotti: number;
  constructor(private service: ContextService, private productsService: ProductsService) {

    this.productFooter = {
      id: 1,
      name: 'footer',
      category: 'category footer',
      price: 1,
      date: new Date(),
      photo: '',
      availabile: true
    };

    this.visualizzazioni = this.service.getVisualizzazioni();
    this.prodotti = this.productsService.getNumeroProdotti();

    this.service.userLogged$.subscribe(u => {
      this.currentUser = u;
    });
  }

  ngOnInit() {

  }

}
