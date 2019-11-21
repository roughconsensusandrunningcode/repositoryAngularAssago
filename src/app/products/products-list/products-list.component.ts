import { Component} from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent  {

  products: Product[] = [];
  selectedProduct: Product = null;
  constructor() {
    this.products = this.getProducts();
    console.log(this.selectedProduct);
   }


  private getProducts(): Product[] {
     return [
       { id: 1, name: 'frigorifero', category: 'Eletrodomestici',
         price: 100.57, availabile: true, date: new Date(), photo: 'https://picsum.photos/100/100' },
       { id: 2, name: 'Lavatrice', category: 'Eletrodomestici',
         price: 200, availabile: true, date: new Date(2015, 10, 20), photo: 'https://picsum.photos/100/100'},
       { id: 3, name: 'lAvastoviglie', category: 'Eletrodomestici', price: 300,
         availabile: false, date: new Date(1856, 1, 1), photo: 'https://picsum.photos/100/100'}
     ];
  }

  showDetails(product: Product) {
    this.selectedProduct = product;
  }

  showTable(message: Product) {
    this.selectedProduct = null;
    alert(message.price);
  }


}
