import { Component, OnInit } from '@angular/core';
import {CommonsEventsService} from '../../../commons/services/events/events.service';

@Component({
  selector: 'app-users-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private _commonsEventsService: CommonsEventsService) {
    this._commonsEventsService.onEventMenuChange({menu: 'shopmenuitems'});
    this._commonsEventsService.menusearch.subscribe((data) => {
      this.onMenuSearch(data);
    });

  }

  onMenuSearch(data) {
    console.log(data);
  }

  ngOnInit() {
  }

}
