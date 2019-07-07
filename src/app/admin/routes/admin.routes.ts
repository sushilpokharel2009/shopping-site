import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { AdminhomeComponent } from '../components/home/home.component';
import { AdminLoginComponent } from '../components/login/login.component';
import { AdminComponent } from '../components/main/main.component';
import { AdminOrdersComponent } from '../components/orders/orders.component';
import { AdminProductsComponent } from '../components/products/products.component';
import { AdminUsersComponent } from '../components/users/users.component';
import { AdminProductDetailsComponent } from '../components/productdetails/productdetails.component';
import { AdminLogoutComponent } from '../components/logout/logout.component';

const adminRoutes: Routes = [
    {path: 'admin', component: AdminComponent, children: [
        {path: '', component: AdminhomeComponent},
        {path: 'login', component: AdminLoginComponent},
        {path: 'logout', component: AdminLogoutComponent},
        {path: 'orders', component: AdminOrdersComponent},
        {path: 'users', component: AdminUsersComponent},
        {path: 'products', component: AdminProductsComponent},
        {path: 'productdetails/:id', component: AdminProductDetailsComponent}
    ] }
];

export const adminRouterProviders: any[] = [];

export const adminrouting: ModuleWithProviders = RouterModule.forChild(adminRoutes);
