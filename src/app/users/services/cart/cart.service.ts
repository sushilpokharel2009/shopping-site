import { Injectable } from '@angular/core';

import {Httpprovider} from '../../../commons/services/http/http.service';
import {RestApisService} from '../../../commons/services/restapis/restapis.service';

@Injectable()
export class CartService {
  private cartProductList: any[] = [];
  constructor() {

   }

  getCartProducts() {
    return this.cartProductList;
  };

editCartProductNumbers(product: any) {
  let changed = false;
    // Product already there then add the numbers else add the product
    for(let i = 0; i < this.cartProductList.length; i++){
      if (product._id === this.cartProductList[i]._id) {
          let prod = {
            username: product.username,
            productid: product._id,
            name: product.name,
            number: product.number + this.cartProductList[i].number,
            price: product.price,
            currency: product.currency,
            subtotal: (product.price * (product.number + this.cartProductList[i].number))
          };
          this.cartProductList[i] = prod;
          changed = true;
        }
    }
    if (changed === false) {
      this.cartProductList.push(product);
    }
  };

  addCartProduct(product: any) {
    // Product already there then add the numbers else add the product
    let checkProduct = (prod) => {
        if (product._id === prod._id) {
          prod = {
            username: product.username,
            productid: product._id,
            name: product.name,
            number: product.number + 1,
            price: product.price,
            currency: product.currency,
            subtotal: (product.price * product.number)
          };
          return prod;
        }
    };
    this.cartProductList = this.cartProductList.map(checkProduct);
  };

  subtractCartProduct(product: any) {
    let checkProduct = (prod) => {
        if (product._id === prod._id) {
          prod = {
            username: product.username,
            productid: product._id,
            name: product.name,
            number: product.number -1,
            price: product.price,
            currency: product.currency,
            subtotal: (product.price * product.number)
          };
          return prod;
        }
    };
    this.cartProductList = this.cartProductList.map(checkProduct);
  };

  removeCartProduct(product: any) {
    let checkProduct = (prod) => {
        if (product._id !== prod._id) {
          return prod;
        }
    };
    this.cartProductList = this.cartProductList.filter(checkProduct);
  };

  changeCartItemDetails(product: any) {
    let checkProduct = (prod) => {
        if (product._id === prod._id) {
          prod = {
            username: product.username,
            productid: product._id,
            name: product.name,
            number: product.number,
            price: product.price,
            currency: product.currency,
            subtotal: (product.price * product.number)
          };
          return prod;
        }
    };
    this.cartProductList = this.cartProductList.map(checkProduct);
  }

  setCartItems(items: any) {
    for (let i = 0; i < items.length; i++){
      this.cartProductList.push({
        _id: items[i]._id,
        username: items[i].username,
        productid: items[i].productid,
        name: items[i].name,
        number: items[i].number,
        price: items[i].price,
        currency: items[i].currency,
        subtotal: (items[i].subtotal)
      });
    } 
  }
  resetCartItems(){
    this.cartProductList = [];
  }

}
