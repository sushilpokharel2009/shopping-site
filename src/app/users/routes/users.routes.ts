import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {UsersComponent} from '../components/main/main.component';
import {UsersloginComponent} from '../components/login/login.component'
import {ErrorComponent} from '../../commons/components/error/error.component';
import {RegisterComponent} from '../components/register/register.component';
import {CartComponent} from '../components/cart/cart.component';
import {UserscategoryComponent} from '../components/productsdisplay/userscategory/userscategory.component';
import {UsersproductComponent} from '../components/productsdisplay/usersproduct/usersproduct.component';
import {UsersproductdetailsComponent} from '../components/productsdisplay/usersproductdetails/usersproductdetails.component';
import {UsersproductmainComponent} from '../components/productsdisplay/usersproductmain/usersproductmain.component';
import {UsersLogoutComponent} from '../components/logout/logout.component';

const usersRoutes: Routes = [
    {path: 'shop', component: UsersComponent, children: [
        {path: '', redirectTo: 'category/all', pathMatch: 'full'},
        {path: 'category', component: UserscategoryComponent, children: [
            {path: ':id', component: UsersproductmainComponent, children: [
                {path: '', component: UsersproductComponent},
                {path: 'details/:id', component: UsersproductdetailsComponent}
            ]},
        ]},
        {path: 'logout', component: UsersLogoutComponent},
        {path: 'login', component: UsersloginComponent},
        {path: 'register', component: RegisterComponent},
        
        {path: 'cart', component: CartComponent},
        {path: '**', component: ErrorComponent}
    ] }
];

export const usersRouterProviders: any[] = [];

export const usersrouting: ModuleWithProviders = RouterModule.forChild(usersRoutes);
