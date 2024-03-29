import { Injectable } from '@angular/core';
import { Product } from '../products/product';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  private numeroProdotti = 4500;

  public getProductsAsObservable(): Observable<Product[]> {
    return of(this.getProducts());
  }


  public getProducts(): Product[] {
    return [
      { id: 1, name: 'frigorifero', category: 'Eletrodomestici',
        price: 100.57, availabile: true, date: new Date(), photo: 'https://picsum.photos/100/100' },
      { id: 2, name: 'Lavatrice', category: 'Eletrodomestici',
        price: 200, availabile: true, date: new Date(2015, 10, 20), photo: 'https://picsum.photos/100/100'},
      { id: 3, name: 'lAvastoviglie', category: 'Eletrodomestici', price: 300,
        availabile: false, date: new Date(1856, 1, 1), photo: 'https://picsum.photos/100/100'}
    ];
 }

 public getNumeroProdotti() {
   return this.numeroProdotti;
 }

}
