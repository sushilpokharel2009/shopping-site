import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonsEventsService } from '../../../services/events/events.service';
import { CommonsObjectsService } from '../../../services/objects/objects.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navlist',
  templateUrl: './navlist.component.html',
  styleUrls: ['./navlist.component.css']
})
export class NavlistComponent implements OnInit {
  menuitems: any[];

  constructor(private ref: ChangeDetectorRef, 
    private _commonsEventsService: CommonsEventsService, 
    private _commonsObjectsService: CommonsObjectsService,
    private _router: Router) { 
    if(this._router.url === '/shop'){
      this.menuitems = this._commonsObjectsService['shopmenuitems'];
    } else if (this._router.url === '/admin'){
      this.menuitems = this._commonsObjectsService['adminmenuitems'];
    }
    this._commonsEventsService.menuchange.subscribe((data) => {
       this.menuitems = this._commonsObjectsService[data.menu];
       console.log(data.menu, this._commonsObjectsService[data.menu]);
    });
  }

  ngOnInit() {
    this.ref.detectChanges();
  }

}
