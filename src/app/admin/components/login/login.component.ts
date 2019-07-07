import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {Httpprovider} from '../../../commons/services/http/http.service';
import {CommonsEventsService} from '../../../commons/services/events/events.service';
import { Cookie } from 'ng2-cookies';
import {ConfigService} from '../../../commons/services/config/config.service';
import {UserService} from '../../services/user/user.service';
import {CommonsObjectsService} from '../../../commons/services/objects/objects.service';
@Component({
  selector: 'app-admin-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class AdminLoginComponent implements OnInit {
url: string = '/admin/login';
  constructor(
    private _commonsEventsService: CommonsEventsService,
    private _config: ConfigService,
    private _userService: UserService,
    private _router: Router,
    private _objectService: CommonsObjectsService
  ) {
        this._commonsEventsService.onEventMenuChange({menu: 'adminmenuitems'});
  }
  onLoginevent(event) {
    console.log(event);
    Cookie.set('_a', event.cookie._a, 1, '/');
    Cookie.set('ar', event.cookie.ar, 1, '/');
    let details = {
      username : event.result.username,
      cookie : event.cookie._a,
      usertype : event.result.usertype,
      approved : event.result.approved,
      loggedin : true
    };
    console.log(Cookie.get('_a'));
    this._userService.setUserLogin(details);
    this._objectService.adminmenuitems[1].show = true;
    this._objectService.adminmenuitems[2].show = true;
    this._objectService.adminmenuitems[3].show = true;
    this._objectService.adminmenuitems[5].show = true;
    this._objectService.adminmenuitems[4].show = false;
    this._router.navigateByUrl('/admin');
  }

  ngOnInit() {
  }
}
