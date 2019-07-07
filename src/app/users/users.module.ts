import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { usersRouterProviders, usersrouting } from './routes/users.routes';
import { CommonsModule } from '../commons/commons.module';

import {RestApisService} from '../commons/services/restapis/restapis.service';
import {CartService} from './services/cart/cart.service';
import {UserService} from './services/user/user.service';
import {ConfigService} from '../commons/services/config/config.service';

import { CartComponent } from './components/cart/cart.component';
import { CategoriesMenuComponent } from './components/categories-menu/categories-menu.component';
import { UsersloginComponent } from './components/login/login.component';
import { UsersComponent } from './components/main/main.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { UserscategoryComponent } from './components/productsdisplay/userscategory/userscategory.component';
import { UsersproductComponent } from './components/productsdisplay/usersproduct/usersproduct.component';
import { UsersproductdetailsComponent } from './components/productsdisplay/usersproductdetails/usersproductdetails.component';
import { UsersproductmainComponent } from './components/productsdisplay/usersproductmain/usersproductmain.component';

import { UsersLogoutComponent } from './components/logout/logout.component';

@NgModule({
  imports: [
    CommonModule, BrowserModule, HttpModule, BrowserModule, FormsModule, usersrouting, CommonsModule
  ],
  exports: [],
  declarations: [
    CartComponent, CategoriesMenuComponent, 
    UsersloginComponent, 
    UsersComponent, 
    ProfileComponent, RegisterComponent, 
    UserscategoryComponent, UsersproductComponent, 
    UsersproductdetailsComponent, UsersproductmainComponent, 
     UsersLogoutComponent
    ],
    providers: [
      usersRouterProviders, RestApisService, CartService, UserService, ConfigService
    ],
    bootstrap: [UsersComponent]
})
export class UsersModule { }
