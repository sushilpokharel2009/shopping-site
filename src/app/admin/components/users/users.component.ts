import { Component, OnInit } from '@angular/core';
import { CommonsEventsService } from '../../../commons/services/events/events.service';
import {Httpprovider} from '../../../commons/services/http/http.service';
import {RestApisService} from '../../../commons/services/restapis/restapis.service';
import {UserService} from '../../services/user/user.service';
import {Cookie} from 'ng2-cookies';
import {SearchPipe} from '../../../commons/pipes/searchpipe/searchpipe.pipe';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class AdminUsersComponent implements OnInit {
  datalist: any[] = [];
  datalistbck: any[] = [];
  createshow: boolean = false;
  editshow: boolean = false;
  u: any = {username: '', password: '', usertype: '', enabled: true};
  ue: any = {_id: '', username: '', password: '', usertype: '', enabled: true}
  constructor(
    private _commonsEventsService: CommonsEventsService,
    private _httpprovider: Httpprovider,
    private _restapis: RestApisService,
    private _userService: UserService,
    private _searchPipe: SearchPipe,
    private _router: Router) {
    this._commonsEventsService.onEventMenuChange({menu: 'adminmenuitems'});
    this._commonsEventsService.menusearch.subscribe((data) => {
      this.onMenuSearch(data);
    });
    console.log(this._userService.getusername());
    this._restapis.users.headers = {
        username: this._userService.getusername()
    };

    this._restapis.users.data = {
        username: this._userService.getusername(),
        cookies: {
          _a: Cookie.get('_a')
        }
    };

    this._httpprovider.httpReq(
      this._restapis.users.url,
      this._restapis.users.method,
      this._restapis.users.data,
      this._restapis.users.headers
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
  edititem(event){
    this.ue = event;
    this.editshow = true;
    this.createshow = false;
    return false;
  }
  onedititem(user) {
    let that = this;
    this._restapis.editUser.headers = {
        username: this._userService.getusername()
    };

    this._restapis.editUser.data = {
        username: this._userService.getusername(),
        _username: user.username,
        password: user.password,
        usertype: user.usertype,
        enabled: user.enabled,
        cookies: {
          _a: Cookie.get('_a')
        },

    };
    this._httpprovider.httpReq(
      this._restapis.editUser.url + user._id,
      this._restapis.editUser.method,
      this._restapis.editUser.data,
      this._restapis.editUser.headers
    ).subscribe((res) => {
      if (res.status === 'success') {
        console.log(res.result);
        for(var i = 0; i < this.datalist.length; i++){
          if(that.datalist[i]._id === user._id){
            that.datalist[i] = user;
            that.editshow = false;
            break;
          }
        }
      }
    });
    
    return false;
  }

  ondeleteitem(event) {
    let that = this;
    console.log(event);
    this._restapis.deleteUser.headers = {
        username: this._userService.getusername()
    };

    this._restapis.deleteUser.data = {
        username: this._userService.getusername(),
        cookies: {
          _a: Cookie.get('_a')
        }
    };

    this._httpprovider.httpReq(
      this._restapis.deleteUser.url + event._id,
      this._restapis.deleteUser.method,
      this._restapis.deleteUser.data,
      this._restapis.deleteUser.headers
    ).subscribe((res) => {
      if (res.status === 'success') {
        console.log(res.result);
        for(var i = 0; i < this.datalist.length; i++){
          if(that.datalist[i]._id === event._id){
            let removedObject = that.datalist.splice(i,1);
            removedObject = null;
            break;
          }
        }
      }
    });
    return false;
  }

createUser(user: any){
    let that = this;
    this._restapis.createUser.headers = {
        username: this._userService.getusername()
    };

    this._restapis.createUser.data = {
        username: this._userService.getusername(),
        _username: user.username,
        password: user.password,
        usertype: user.usertype,
        enabled: user.enabled,
        cookies: {
          _a: Cookie.get('_a')
        },

    };

    this._httpprovider.httpReq(
      this._restapis.createUser.url,
      this._restapis.createUser.method,
      this._restapis.createUser.data,
      this._restapis.createUser.headers
    ).subscribe((res) => {
      if (res.status === 'success') {
        console.log(res.result);
        that.datalist.push(res.result);
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
