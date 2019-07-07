import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  inputs:[
    'productList'
  ]
})
export class ProductsComponent implements OnInit {
  @Output() addtocartproductslist: EventEmitter<any>;
  constructor() {
    this.addtocartproductslist = new EventEmitter();
   }
  onaddtocartproductlist(event){
    this.addtocartproductslist.emit({item: event.item});
  }
  ngOnInit() {
  }

}
