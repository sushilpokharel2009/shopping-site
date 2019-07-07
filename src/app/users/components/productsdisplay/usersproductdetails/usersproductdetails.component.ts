import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Httpprovider } from '../../../../commons/services/http/http.service';
import { RestApisService } from '../../../../commons/services/restapis/restapis.service';
import { CartService } from '../../../services/cart/cart.service';
import { UserService } from '../../../services/user/user.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-usersproductdetails',
  templateUrl: './usersproductdetails.component.html',
  styleUrls: ['./usersproductdetails.component.css']
})
export class UsersproductdetailsComponent implements OnInit {
  productdetails: any = {};
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _httpprovider: Httpprovider,
    private _restApisService: RestApisService,
    private _cartservice: CartService,
    private _userService: UserService,
    private _router: Router
  ) {
    this._activatedRoute.params.subscribe((params) => {
      this.productdetails = params['id'];
    });
  }

  onAddtocart(event) {
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
  
  ngOnInit() {

  }

}
