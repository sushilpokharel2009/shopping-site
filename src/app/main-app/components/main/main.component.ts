import { Component, OnInit } from '@angular/core';
import {Router, NavigationEnd, NavigationStart, NavigationCancel} from '@angular/router';
import {Cookie} from 'ng2-cookies';
import {Httpprovider} from '../../../commons/services/http/http.service';
import {RestApisService} from '../../../commons/services/restapis/restapis.service';
import {CommonsObjectsService} from '../../../commons/services/objects/objects.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
title = 'Certification Project - Shopping Site!';

  constructor(private _router: Router,
  private _httpprovider: Httpprovider,
  private _restapis: RestApisService,
  private _objectService: CommonsObjectsService) 
  
  {
    if(Cookie.get('_u') && Cookie.get('ur')){
      this._restapis.login.data = {
        'cookies': {'_u': Cookie.get('_u')}
      }
      this._httpprovider.httpReq(
        this._restapis.login.url, 
      this._restapis.login.method, 
      this._restapis.login.data, 
      this._restapis.login.headers).subscribe( (res)=> {
        console.log(res);
        if (res.status === 'success') {
          Cookie.set('ur', res.result.username, 1, '/');
          this._objectService.shopmenuitems[3].show = false;
          this._objectService.shopmenuitems[4].show = false;
          this._objectService.shopmenuitems[5].show = true;
        }
      });
    } else if(Cookie.get('_a') && Cookie.get('ar')){
      this._restapis.loginadmin.data = {
        'cookies': {'_a': Cookie.get('_a')}
      }
      this._httpprovider.httpReq(
        this._restapis.loginadmin.url, 
        this._restapis.loginadmin.method, 
        this._restapis.loginadmin.data, 
        this._restapis.loginadmin.headers
      ).subscribe( (res)=> {
        console.log(res);
        if (res.status === 'success') {
          Cookie.set('ar', res.result.username, 1, '/');
          this._objectService.adminmenuitems[1].show = true;
          this._objectService.adminmenuitems[2].show = true;
          this._objectService.adminmenuitems[3].show = true;
          this._objectService.adminmenuitems[5].show = true;
          this._objectService.adminmenuitems[4].show = false;
        }
      });
    }
  }



  ngOnInit() {
  }

}
