import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { adminRouterProviders, adminrouting } from './routes/admin.routes';
import { CommonsModule } from '../commons/commons.module';

import { AdminhomeComponent } from './components/home/home.component';
import { AdminLoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/main/main.component';
import { AdminOrdersComponent } from './components/orders/orders.component';
import { AdminProductsComponent } from './components/products/products.component';
import { AdminUsersComponent } from './components/users/users.component';
import { AdminProductDetailsComponent } from './components/productdetails/productdetails.component';

import {Httpprovider} from '../commons/services/http/http.service';
import {CommonsEventsService} from '../commons/services/events/events.service';
import {ConfigService} from '../commons/services/config/config.service';
import {UserService} from './services/user/user.service';
import {CommonsObjectsService} from '../commons/services/objects/objects.service';
import { AdminLogoutComponent } from './components/logout/logout.component';
import {RestApisService} from '../commons/services/restapis/restapis.service';
@NgModule({
  imports: [
    CommonModule, BrowserModule, HttpModule, BrowserModule, FormsModule, adminrouting, CommonsModule
  ],
  exports: [],
  declarations: [
    AdminhomeComponent, AdminLoginComponent, 
    AdminComponent, AdminOrdersComponent, 
    AdminProductsComponent, AdminUsersComponent, AdminProductDetailsComponent, AdminLogoutComponent
    ],
  providers: [
    adminRouterProviders, Httpprovider, CommonsEventsService,
    ConfigService, UserService, CommonsObjectsService, RestApisService
  ],
  bootstrap: [AdminComponent]
})
export class AdminModule { }
