import { Component, OnInit } from '@angular/core';
import {Httpprovider} from '../../../commons/services/http/http.service';
import {RestApisService} from '../../../commons/services/restapis/restapis.service';
import {CommonsObjectsService} from '../../../commons/services/objects/objects.service';
import {CartService} from '../../services/cart/cart.service';
import {Router} from '@angular/router';
import {Cookie} from 'ng2-cookies';
import {UserService} from '../../services/user/user.service';

@Component({
  selector: 'users-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class UsersLogoutComponent implements OnInit {
  message: string;
  constructor(
    private _httpservice: Httpprovider,
    private _restapis: RestApisService,
    private _objectService: CommonsObjectsService,
    private _router: Router,
    private _cartService: CartService,
    private _userservice: UserService
  ) { }

  ngOnInit() {
    if(!Cookie.get('ur') || !Cookie.get('_u')){
      this._router.navigateByUrl('/shop');
    }
    this._restapis.logout.headers = {
      username: Cookie.get('ur')
    };
    this._restapis.logout.data = {cookies: {_u: Cookie.get('_u')}};
    this._httpservice.httpReq(
      this._restapis.logout.url,
      this._restapis.logout.method,
      this._restapis.logout.data,
      this._restapis.logout.headers
    ).subscribe((res) => {
      if(res.status === 'success') {
        Cookie.delete('_u', '/');
        Cookie.delete('ur', '/');
        this._cartService.resetCartItems();
        this._objectService.shopmenuitems[3].show = true;
        this._objectService.shopmenuitems[4].show = true;
        this._objectService.shopmenuitems[5].show = false;
        this._router.navigateByUrl('/shop/login');
      } else {
        this.message = "logout failed due to some reason!";
        this._router.navigateByUrl('/shop/login');
      }
    })
  }

}
