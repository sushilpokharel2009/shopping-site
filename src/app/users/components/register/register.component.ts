import { Component, OnInit } from '@angular/core';
import {CommonsEventsService} from '../../../commons/services/events/events.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-users-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  url: string = "/shop/register";
  constructor(private _commonsEventsService: CommonsEventsService, private _router: Router) {
        this._commonsEventsService.onEventMenuChange({menu: 'shopmenuitems'});
  }

  onRegisterevent(event){
    console.log(event);
    this._router.navigateByUrl('/shop/login');
  }
  ngOnInit() {
  }

}
