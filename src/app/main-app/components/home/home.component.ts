import { Component, OnInit } from '@angular/core';
import { CommonsObjectsService } from '../../../commons/services/objects/objects.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  modules: any[];
  constructor(private _commonsObjectsService: CommonsObjectsService) {
    this.modules = this._commonsObjectsService.modules;
   }

  ngOnInit() {
  }

}
