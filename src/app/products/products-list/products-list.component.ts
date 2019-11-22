import { Component, OnDestroy} from '@angular/core';
import { Product } from '../product';
import { ProductsService } from 'src/app/services/products.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnDestroy {

  products: Product[] = [];
  selectedProduct: Product = null;
  subscription: Subscription;

  constructor(private service: ProductsService) {
  //  this.products = this.service.getProducts();
      this.subscription = this.service.getProductsAsObservable().subscribe(
        prodotti => this.products = prodotti
      );
   }

  showDetails(product: Product) {
    this.selectedProduct = product;
  }

  showTable(message: Product) {
    this.selectedProduct = null;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
