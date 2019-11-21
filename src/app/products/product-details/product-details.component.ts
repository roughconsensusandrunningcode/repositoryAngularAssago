import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  @Input() product: Product;
  @Output() emitter: EventEmitter<Product>;

  constructor() {
    this.emitter = new EventEmitter<Product>();
  }

  exit() {
    this.emitter.emit(this.product);
  }


}
