import {Injectable} from '@angular/core';

@Injectable()
export class RestApisService {
    login: any = {
        'url': '/shop/login', 'method': 'POST', 'headers': {}, 'data': null
    };

    logout: any = {
        'url': '/shop/logout', 'method': 'POST', 'headers': {}, 'data': null
    };

    register: any = {
        'url': '/shop/register', 'method': 'POST', 'headers': {}, 'data': null
    };

    loginadmin: any = {
        'url': '/admin/login', 'method': 'POST', 'headers': {}, 'data': null
    };

    logoutadmin: any = {
        'url': '/admin/logout', 'method': 'POST', 'headers': {}, 'data': null
    };

    products: any = {
        'url': '/shop/products', 'method': 'GET', 'headers': {}, 'data': null
    };

    getProduct: any = {
        'url': '/shop/product/', 'method': 'GET', 'headers': {}, 'data': null
    };

    createProduct: any = {
        'url': '/admin/products', 'method': 'POST', 'headers': {}, 'data': null
    };

    editProduct: any = {
        'url': '/admin/product/', 'method': 'PUT', 'headers': {}, 'data': null
    };

    deleteProduct: any = {
        'url': '/admin/product/', 'method': 'DELETE', 'headers': {}, 'data': null
    };

    cart: any = {
        'url': '/shop/cart/items', 'method': 'GET', 'headers': {}, 'data': null
    };

    addCartItem: any = {
        'url': '/shop/cart/items', 'method': 'POST', 'headers': {}, 'data': null
    };

    deleteCartItem: any = {
        'url': '/shop/cart/items/', 'method': 'DELETE', 'headers': {}, 'data': null
    };
    
    editCartItem: any = {
        'url': '/shop/cart/items/', 'method': 'POST', 'headers': {}, 'data': null
    };

    orders: any = {
        'url': '/admin/orders', 'method': 'GET', 'headers': {}, 'data': null
    };

    getOrder: any = {
        'url': '/admin/order/', 'method': 'GET', 'headers': {}, 'data': null
    };

    createOrder: any = {
        'url': '/shop/orders', 'method': 'POST', 'headers': {}, 'data': null
    };

    editOrder: any = {
        'url': '/admin/order/', 'method': 'PUT', 'headers': {}, 'data': null
    };

    deleteOrder: any = {
        'url': '/admin/order/', 'method': 'DELETE', 'headers': {}, 'data': null
    };

    users: any = {
        'url': '/admin/users', 'method': 'GET', 'headers': {}, 'data': null
    };

    getUser: any = {
        'url': '/admin/user/', 'method': 'GET', 'headers': {}, 'data': null
    };

    createUser: any = {
        'url': '/admin/users', 'method': 'POST', 'headers': {}, 'data': null
    };

    editUser: any = {
        'url': '/admin/user/', 'method': 'PUT', 'headers': {}, 'data': null
    };

    deleteUser: any = {
        'url': '/admin/user/', 'method': 'DELETE', 'headers': {}, 'data': null
    };

}
