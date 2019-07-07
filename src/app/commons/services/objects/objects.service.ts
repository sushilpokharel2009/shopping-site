import { Injectable } from '@angular/core';
import {Httpprovider} from '../http/http.service';


@Injectable()
export class CommonsObjectsService {
  modules: any[] = [
    {site: 'shop', name: 'SHOPPING SITE'},
    {site: 'admin', name: 'ADMINISTRATOR SITE'}
  ];

  shopmenuitems: any[] = [
    {url: '/shop', menu: 'Shop', show: true, changable: false, active: false},
    {url: '/shop/cart', menu: 'Cart', show: true, changable: false, active: false},
    {url: '/shop/checkout', menu: 'Check Out', show: false, changable: true, active: false},
    {url: '/shop/register', menu: 'Register', show: true, changable: true, active: false},
    {url: '/shop/login', menu: 'Login', show: true, changable: true, active: false},
    {url: '/shop/logout', menu: 'Logout', show: false, changable: true, active: false}
  ];

  adminmenuitems: any[] = [
    {url: '/admin', menu: 'Manage', show: false, changable: true, active: false},
    {url: '/admin/users', menu: 'Users', show: false, changable: true, active: false},
    {url: '/admin/products', menu: 'Products', show: false, changable: true, active: false},
    {url: '/admin/orders', menu: 'Orders', show: false, changable: true, active: false},
    {url: '/admin/login', menu: 'Login', show: true, changable: true, active: false},
    {url: '/admin/logout', menu: 'Logout', show: false, changable: true, active: false}
  ];

  constructor(private _httpprovider: Httpprovider) {
    
   }

}
