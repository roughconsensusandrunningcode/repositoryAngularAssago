import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/products/product';
import { ContextService } from 'src/app/services/context.service';

@Component({
  selector: 'app-my-footer',
  templateUrl: './my-footer.component.html',
  styleUrls: ['./my-footer.component.css']
})
export class MyFooterComponent implements OnInit {


  productFooter: Product;
  visualizzazioni: number;
  constructor(private service: ContextService) {

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
  }

  ngOnInit() {

  }

}
