import { Component, OnInit } from '@angular/core';
import { CommonsEventsService } from '../../../commons/services/events/events.service';
import { Httpprovider } from '../../../commons/services/http/http.service';
import { RestApisService } from '../../../commons/services/restapis/restapis.service';
import { UserService } from '../../services/user/user.service';
import { CartService } from '../../services/cart/cart.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  date: any = Date.now();
  cartItems: any[] = [];
  sum: number;
  tax: number;
  grandtotal: number;
  constructor(
    private _commonsEventsService: CommonsEventsService,
    private _httpprovider: Httpprovider,
    private _restApisService: RestApisService,
    private _userService: UserService,
    private _cartservice: CartService,
    private _router: Router) {
    this._commonsEventsService.onEventMenuChange({ menu: 'shopmenuitems' });
  }
  reduceItemNumber(item: any) {
    let itemDetails: any;
    if (this._userService.getusername()) {
      itemDetails = {
        username: this._userService.getusername(),
        productid: item.productid,
        name: item.name,
        number: -1,
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
          this.getCartItems();
        }
      });
    }
    return false;
  }
  addItemNumber(item: any) {
    let itemDetails: any;
    if (this._userService.getusername()) {
      itemDetails = {
        username: this._userService.getusername(),
        productid: item.productid,
        name: item.name,
        number: 1,
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
          this.getCartItems();
        }
      });
    }
    return false;
  }
  deleteItem(item: any) {
    let itemDetails: any;
    if (this._userService.getusername()) {
      itemDetails = {
        username: this._userService.getusername(),
        productid: item.productid,
        cookies: {
          _u: this._userService.getcookie()
        }
      };
      this._restApisService.deleteCartItem.data = itemDetails;
      this._restApisService.deleteCartItem.headers = {
        username: this._userService.getusername()
      };
      this._httpprovider.httpReq(
        this._restApisService.deleteCartItem.url + item._id,
        this._restApisService.deleteCartItem.method,
        this._restApisService.deleteCartItem.data,
        this._restApisService.deleteCartItem.headers,
      ).subscribe((res) => {
        if (res.status === 'success') {
          this.getCartItems();
        } else { }
      });
      return false;
    }
  }

  calcSum(items: any) {
    let sum = 0
    for (var i = 0; i < items.length; i++) {
      sum = (sum + (items[i].price * items[i].number));
    }
    this.tax = sum * 5 / 100;
    this.grandtotal = sum + this.tax;
    return sum;
  }

  getCartItems(){
    this._restApisService.cart.data = {};
    this._restApisService.cart.data.cookies = {
      _u: this._userService.getcookie()
    };
    this._restApisService.cart.headers = {
      username: this._userService.getusername()
    }
    this._httpprovider.httpReq(
      this._restApisService.cart.url,
      this._restApisService.cart.method,
      this._restApisService.cart.data,
      this._restApisService.cart.headers
    ).subscribe((res) => {
      if (res.status === 'success') {
        this.cartItems = res.result;
        this._cartservice.setCartItems(res.result);
        this.sum = this.calcSum(res.result);
      } else { }
    });
  }

  checkout() {
    this._restApisService.createOrder.data = {};
    this._restApisService.createOrder.data.cookies = {
      _u: this._userService.getcookie()
    }
    this._restApisService.createOrder.headers = {
      username: this._userService.getusername()
    }
    this._httpprovider.httpReq(
      this._restApisService.createOrder.url,
      this._restApisService.createOrder.method,
      this._restApisService.createOrder.data,
      this._restApisService.createOrder.headers
    ).subscribe((res) => {
      if (res.status === 'success') {
        this.cartItems = res.result;
        this._cartservice.resetCartItems();
        this.sum = this.calcSum(res.result);
        this._router.navigateByUrl('/shop');
      } else { }
    });
  }

  ngOnInit() {
    this.getCartItems();
  }

}
