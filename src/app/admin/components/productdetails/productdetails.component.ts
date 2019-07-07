import { Component, OnInit } from '@angular/core';
import { CommonsEventsService } from '../../../commons/services/events/events.service';
@Component({
  selector: 'app-admin-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class AdminProductDetailsComponent implements OnInit {

  constructor(private _commonsEventsService: CommonsEventsService) {
    this._commonsEventsService.onEventMenuChange({menu: 'adminmenuitems'});
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
