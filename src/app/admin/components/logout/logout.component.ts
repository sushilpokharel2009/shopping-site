import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Cookie} from 'ng2-cookies';
import {Httpprovider} from '../../../commons/services/http/http.service';
import {RestApisService} from '../../../commons/services/restapis/restapis.service';
import {CommonsObjectsService} from '../../../commons/services/objects/objects.service';
import {UserService} from '../../services/user/user.service';
@Component({
  selector: 'app-admin-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class AdminLogoutComponent implements OnInit {
  message: string;
  constructor(
    private _httpservice: Httpprovider,
    private _restapis: RestApisService,
    private _objectService: CommonsObjectsService,
    private _router: Router,
    private _userservice: UserService
  ) { }

  ngOnInit() {
    if(!Cookie.get('ar') || !Cookie.get('_a')){
      this._router.navigateByUrl('/admin');
    }
    this._restapis.logoutadmin.headers = {
      username: Cookie.get('ar')
    };
    this._restapis.logoutadmin.data = {cookies: {_a: Cookie.get('_a')}};
    this._httpservice.httpReq(
      this._restapis.logoutadmin.url,
      this._restapis.logoutadmin.method,
      this._restapis.logoutadmin.data,
      this._restapis.logoutadmin.headers
    ).subscribe((res) => {
      if(res.status === 'success') {
        Cookie.delete('_a', '/');
        Cookie.delete('ar', '/');
        this._objectService.adminmenuitems[1].show = false;
        this._objectService.adminmenuitems[2].show = false;
        this._objectService.adminmenuitems[3].show = false;
        this._objectService.adminmenuitems[5].show = false;
        this._objectService.adminmenuitems[4].show = true;
        this._router.navigateByUrl('/admin/login');
      } else {
        this.message = 'logout failed due to some reason!';
        this._router.navigateByUrl('/admin/login');
      }
    });
  }

}
