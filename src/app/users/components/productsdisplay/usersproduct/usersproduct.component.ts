import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { CommonsEventsService } from '../../../../commons/services/events/events.service';
import {Httpprovider} from '../../../../commons/services/http/http.service';
import {RestApisService} from '../../../../commons/services/restapis/restapis.service';
import {CartService} from '../../../services/cart/cart.service';
import {UserService} from '../../../services/user/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-usersproduct',
  templateUrl: './usersproduct.component.html',
  styleUrls: ['./usersproduct.component.css']
})
export class UsersproductComponent implements OnInit {
  category: string;
  productList: any[];
  constructor(
    private _commonsEventsService: CommonsEventsService, 
    private _activatedRoute: ActivatedRoute,
    private _httpprovider: Httpprovider,
    private _restApisService: RestApisService,
    private _cartservice: CartService,
    private _userService: UserService,
    private _router: Router) {
    this._commonsEventsService.menusearch.subscribe((data) => {
      this.onMenuSearch(data);
    });
    this._activatedRoute.params.subscribe((params) => {
      this.category = params['id'];
      if (this.category && this.category !== 'all') {
        this._httpprovider.httpReq(
          this._restApisService.products.url, 
          this._restApisService.products.method, 
          this._restApisService.products.data, 
          this._restApisService.products.headers
      ).subscribe((res) => {
        this.productList = res.result.filter((r)=>{
          return r.category === this.category;
        });
    });
      } else {
        this._httpprovider.httpReq(
            this._restApisService.products.url, 
            this._restApisService.products.method, 
            this._restApisService.products.data, 
            this._restApisService.products.headers
        ).subscribe((res) => {
          if (res.status === 'success') {
            this.productList = res.result;
          } else {}
        });
      }
    });
  }
  onaddtocartproductslist(event){
    console.log(event.item);
    let item: any = event.item;
    let itemDetails: any;
    if (this._userService.getusername()) {
      itemDetails = {
        username: this._userService.getusername(),
        productid: item._id,
        name: item.name,
        number: item.number,
        price: item.price,
        currency: item.currency,
        subtotal: (item.price * (item.number)),
        cookies: {
          _u: this._userService.getcookie()
        }
      };
      this._restApisService.editCartItem.data = itemDetails;
      this._restApisService.editCartItem.headers = {
        username: this._userService.getusername()
      }
      this._httpprovider.httpReq(
        this._restApisService.editCartItem.url,
        this._restApisService.editCartItem.method,
        this._restApisService.editCartItem.data,
        this._restApisService.editCartItem.headers
      ).subscribe((res) => {
        if (res.status === 'success') {
          //this._router.navigateByUrl('/shop/cart');
        }
      });
    }
  }
  onMenuSearch(data) {
    console.log(data);
  }
  ngOnInit() {
  }
}

