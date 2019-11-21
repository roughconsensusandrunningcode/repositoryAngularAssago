import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/products/product';

@Component({
  selector: 'app-my-footer',
  templateUrl: './my-footer.component.html',
  styleUrls: ['./my-footer.component.css']
})
export class MyFooterComponent implements OnInit {


  productFooter: Product;
  constructor() {

    this.productFooter = {
      id: 1,
      name: 'footer',
      category: 'category footer',
      price: 1,
      date: new Date(),
      photo: '',
      availabile: true
    };

  }

  ngOnInit() {

  }

}
