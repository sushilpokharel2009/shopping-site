import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  inputs:[
    'product'
  ]
})
export class ProductComponent implements OnInit {
  product: any;
  productnumber: number = 1;
  @Output() addtocartproductlist: EventEmitter<any>;
  constructor() {
    this.addtocartproductlist = new EventEmitter();
   }
  onAddToCart() {
    let item = {
      username: '',
      _id: this.product._id,
      name: this.product.name,
      number: this.productnumber,
      price: this.product.price,
      currency: this.product.currency,
      subtotal: (this.product.price * this.productnumber)
    };
    this.addtocartproductlist.emit({item: item});
    return false;
  }

  ngOnInit() {
  }

}
