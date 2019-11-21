import { Component} from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent  {

  products: Product[] = [];
  constructor() {
    this.products = this.getProducts();
   }


  private getProducts(): Product[] {
     return [
       { id: 1, name: 'Frigorifero', category: 'Eletrodomestici',
         price: 100, availabile: true, date: new Date(), photo: 'https://picsum.photos/100/100' },
       { id: 2, name: 'Lavatrice', category: 'Eletrodomestici',
         price: 200, availabile: true, date: new Date(2015, 10, 20), photo: 'https://picsum.photos/100/100'},
       { id: 3, name: 'Lavastoviglie', category: 'Eletrodomestici', price: 300,
         availabile: false, date: new Date(1856, 1, 1), photo: 'https://picsum.photos/100/100'}
     ];
  }

}
