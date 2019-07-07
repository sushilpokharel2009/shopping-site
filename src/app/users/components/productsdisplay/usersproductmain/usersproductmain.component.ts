import { Component, OnInit } from '@angular/core';
import {CommonsEventsService} from '../../../../commons/services/events/events.service';
import {ActivatedRoute} from '@angular/router';
import {Httpprovider} from '../../../../commons/services/http/http.service';
@Component({
  selector: 'app-usersproductmain',
  templateUrl: './usersproductmain.component.html',
  styleUrls: ['./usersproductmain.component.css']
})
export class UsersproductmainComponent implements OnInit {
  public category: string;
  constructor(
    private _commonsEventsService: CommonsEventsService
  ) {
    this._commonsEventsService.onEventMenuChange({menu: 'shopmenuitems'});
  }

  ngOnInit() {
  }

}
