import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Httpprovider} from '../../services/http/http.service';
import {RestApisService} from '../../services/restapis/restapis.service';
@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  @Input() productid: string;
  @Output() addtocart: EventEmitter<any>;
  productdetails: any;
  productnumber: number = 1;
  constructor(
    private _httpprovider: Httpprovider,
    private _restApisService: RestApisService,
  ) {
    this.addtocart = new EventEmitter();
   }
  onAddToCart() {
    let item = {
      username: '',
      _id: this.productdetails._id,
      name: this.productdetails.name,
      number: this.productnumber,
      price: this.productdetails.price,
      currency: this.productdetails.currency,
      subtotal: (this.productdetails.price * this.productnumber)
    };
    this.addtocart.emit({item: item});
    return false;
  }
  ngOnInit() {
    this._httpprovider.httpReq(
        this._restApisService.getProduct.url + this.productid,
        this._restApisService.getProduct.method,
        this._restApisService.getProduct.data,
        this._restApisService.getProduct.headers
      ).subscribe((res) => {
        if (res.status === 'success') {
          this.productdetails = res.result[0];
        } else {}
      });
  }

}
