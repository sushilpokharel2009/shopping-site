import { Component, OnInit } from '@angular/core';
import {CommonsEventsService} from '../../../services/events/events.service';
@Component({
  selector: 'app-navsearch',
  templateUrl: './navsearch.component.html',
  styleUrls: ['./navsearch.component.css']
})
export class NavsearchComponent implements OnInit {
menusearchvalue: string;

  constructor(private _commonsEventsService: CommonsEventsService) {}

  onSubmit(menusearchvalue) {
    this._commonsEventsService.onEventSearchFn(menusearchvalue);
  }
  
  ngOnInit() {
  }

}
