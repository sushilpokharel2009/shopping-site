import { Component, OnInit } from '@angular/core';
import { CommonsEventsService } from '../../../commons/services/events/events.service';
import {Httpprovider} from '../../../commons/services/http/http.service';
import {RestApisService} from '../../../commons/services/restapis/restapis.service';
import {UserService} from '../../services/user/user.service';
import {Cookie} from 'ng2-cookies';
import {SearchPipe} from '../../../commons/pipes/searchpipe/searchpipe.pipe';
@Component({
  selector: 'app-admin-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class AdminOrdersComponent implements OnInit {
  datalist: any[] = [];
  datalistbck: any[] = [];
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
    this._restapis.orders.headers = {
        username: this._userService.getusername()
    };

    this._restapis.orders.data = {
        username: this._userService.getusername(),
        cookies: {
          _a: Cookie.get('_a')
        }
    };

    this._httpprovider.httpReq(
      this._restapis.orders.url,
      this._restapis.orders.method,
      this._restapis.orders.data,
      this._restapis.orders.headers
    ).subscribe((res) => {
      if (res.status === 'success') {
        console.log(res.result);
        this.datalist = res.result;
        this.datalistbck = res.result;
      }
    });
  }

  onedititem(event) {

  }

  oncancelitem(event) {
    this._restapis.editOrder.headers = {
        username: this._userService.getusername()
    };

    this._restapis.editOrder.data = {
        username: this._userService.getusername(),
        cookies: {
          _a: Cookie.get('_a')
        },
        cancelled: true
    }; 

    this._httpprovider.httpReq(
      this._restapis.editOrder.url + event._id,
      this._restapis.editOrder.method,
      this._restapis.editOrder.data,
      this._restapis.editOrder.headers
    ).subscribe((res) => {
      if (res.status === 'success') {
        console.log(res.result);
         for(var i = 0; i < this.datalist.length; i++){
           if (event._id === this.datalist[i]._id){
             this.datalist[i].cancelled = true;
            
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
