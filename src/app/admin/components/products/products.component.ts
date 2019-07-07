import { Component, OnInit } from '@angular/core';
import { CommonsEventsService } from '../../../commons/services/events/events.service';
import {Httpprovider} from '../../../commons/services/http/http.service';
import {RestApisService} from '../../../commons/services/restapis/restapis.service';
import {UserService} from '../../services/user/user.service';
import {Cookie} from 'ng2-cookies';
import {SearchPipe} from '../../../commons/pipes/searchpipe/searchpipe.pipe';
@Component({
  selector: 'app-admin-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class AdminProductsComponent implements OnInit {
  datalist: any[] = [];
  datalistbck: any[] = [];
  u: any = {name:'', category:'', price: '', currency: '', summary: '', details: ''};
  createshow: boolean;
  constructor(
    private _commonsEventsService: CommonsEventsService,
    private _httpprovider: Httpprovider,
    private _restapis: RestApisService,
    private _userService: UserService,
    private _searchPipe: SearchPipe) {
    this._commonsEventsService.onEventMenuChange({menu: 'adminmenuitems'});
    this._commonsEventsService.menusearch.subscribe((data) => {
      this.onMenuSearch(data);
    });
    console.log(this._userService.getusername());
    this._restapis.products.headers = {
        username: this._userService.getusername()
    };

    this._restapis.products.data = {
        username: this._userService.getusername(),
        cookies: {
          _a: Cookie.get('_a')
        }
    };

    this._httpprovider.httpReq(
      this._restapis.products.url,
      this._restapis.products.method,
      this._restapis.products.data,
      this._restapis.products.headers
    ).subscribe((res) => {
      if (res.status === 'success') {
        console.log(res.result);
        this.datalist = res.result;
        this.datalistbck = res.result;
      }
    });
  }

  toggleCreate(){
    this.createshow = !this.createshow;
    return false;
  }

  createProduct(u){
    this._restapis.createProduct.headers = {
        username: this._userService.getusername()
    };

    this._restapis.createProduct.data = {
        username: this._userService.getusername(),
        cookies: {
          _a: Cookie.get('_a')
        },
        name: u.name,
        category: u.category,
        currency: u.currency,
        price: u.price,
        summary: u.summary,
        details: u.details
    }; 

    this._httpprovider.httpReq(
      this._restapis.createProduct.url,
      this._restapis.createProduct.method,
      this._restapis.createProduct.data,
      this._restapis.createProduct.headers
    ).subscribe((res) => {
      if (res.status === 'success') {
        console.log(res.result);
        this.datalistbck.push(res.result);
        this.createshow = false;
      }
    });
  }

  ondeleteitem(event) {
    this._restapis.deleteProduct.headers = {
        username: this._userService.getusername()
    };

    this._restapis.deleteProduct.data = {
        username: this._userService.getusername(),
        cookies: {
          _a: Cookie.get('_a')
        }
    }; 

    this._httpprovider.httpReq(
      this._restapis.deleteProduct.url + event._id,
      this._restapis.deleteProduct.method,
      this._restapis.deleteProduct.data,
      this._restapis.deleteProduct.headers
    ).subscribe((res) => {
      if (res.status === 'success') {
        console.log(res.result);
        for(var i = 0; i < this.datalistbck.length; i++){
          if(this.datalistbck[i]._id === event._id){
              this.datalistbck.splice(i, 1);
          }
        } 
      }
    });
    return false;
  }

  onMenuSearch(data) {
    console.log(data);
  }

  searchitems(event){
    console.log(event);
    this.datalist = this._searchPipe.transform(this.datalistbck, event)
  }

  ngOnInit() {
    
  }

}
