import { Component} from '@angular/core';
import { Product } from '../product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent  {

  products: Product[] = [];
  selectedProduct: Product = null;
  constructor(private service: ProductsService) {
    this.products = this.service.getProducts();
   }

  showDetails(product: Product) {
    this.selectedProduct = product;
  }

  showTable(message: Product) {
    this.selectedProduct = null;
    alert(message.price);
  }


}
