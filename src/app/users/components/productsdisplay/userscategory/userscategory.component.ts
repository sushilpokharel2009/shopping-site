import { Component, OnInit } from '@angular/core';
import {CommonsEventsService} from '../../../../commons/services/events/events.service';

@Component({
  selector: 'app-userscategory',
  templateUrl: './userscategory.component.html',
  styleUrls: ['./userscategory.component.css']
})
export class UserscategoryComponent implements OnInit {

  constructor(private _commonsEventsService: CommonsEventsService) {
  }

  ngOnInit() {
  }

}
