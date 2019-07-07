import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {Httpprovider} from '../../../commons/services/http/http.service';
import {CommonsEventsService} from '../../../commons/services/events/events.service';
import { Cookie } from 'ng2-cookies';
import {ConfigService} from '../../../commons/services/config/config.service';
import {UserService} from '../../services/user/user.service';
import {CommonsObjectsService} from '../../../commons/services/objects/objects.service';
@Component({
  selector: 'app-users-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class UsersloginComponent implements OnInit {
  url: string = '/shop/login';
  constructor(
    private _commonsEventsService: CommonsEventsService,
    private _config: ConfigService,
    private _userService: UserService,
    private _router: Router,
    private _objectService: CommonsObjectsService
  ) {
        this._commonsEventsService.onEventMenuChange({menu: 'shopmenuitems'});
  }
  onLoginevent(event) {
    console.log(event);
    Cookie.set('_u', event.cookie._u, 1, '/');
    Cookie.set('ur', event.cookie.ur, 1, '/');
    let details = {
      username : event.result.username,
      cookie : event.cookie._u,
      usertype : event.result.usertype,
      approved : event.result.approved,
      loggedin : true
    };
    console.log(Cookie.get('_u'));
    this._userService.setUserLogin(details);
    this._objectService.shopmenuitems[3].show = false;
    this._objectService.shopmenuitems[4].show = false;
    this._objectService.shopmenuitems[5].show = true;
    this._router.navigateByUrl('/shop');
  }

  ngOnInit() {
  }

}
