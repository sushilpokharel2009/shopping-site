import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {CommonsModule} from './commons/commons.module';
import {AdminModule} from './admin/admin.module';
import {UsersModule} from './users/users.module';
import { appRoutingProviders, routing } from './main-app/routes/app.routes';
import { MainComponent } from './main-app/components/main/main.component';
import { HomeComponent } from './main-app/components/home/home.component';


@NgModule({
  imports: [ BrowserModule, CommonModule, CommonsModule, FormsModule, HttpModule, routing, AdminModule, UsersModule ],
  exports: [],
  declarations: [ MainComponent, HomeComponent ],
  providers: [
    appRoutingProviders
  ],
  bootstrap:    [ MainComponent ]
})
export class AppModule { }
