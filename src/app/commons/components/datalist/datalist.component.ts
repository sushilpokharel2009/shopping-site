import { Component, OnInit, ChangeDetectorRef, Input, Output, EventEmitter } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {Httpprovider} from '../../services/http/http.service';
import {SearchPipe} from '../../pipes/searchpipe/searchpipe.pipe';
@Component({
  selector: 'app-datalist',
  templateUrl: './datalist.component.html',
  styleUrls: ['./datalist.component.css']
})
export class DatalistComponent implements OnInit {
  @Input() edititemoption: boolean;
  @Input() deleteitemoption: boolean;
  @Output() edititem: EventEmitter<any>;
  @Output() deleteitem: EventEmitter<any>;
  @Input() datalist: any;
  @Input() dataListName: string;
  public listview: any[] = [];
  constructor(
  private _searchPipe: SearchPipe, 
  private _httpprovider: Httpprovider,
  private _router: Router,
  private ref: ChangeDetectorRef
  ) {
      this.edititem = new EventEmitter();
      this.deleteitem = new EventEmitter();
  }

  ngOnInit() {
      this.listview = this._searchPipe.transform(this.datalist.list, '');
  }
  
  deleteitems(item) {
      this.deleteitem.emit({data:'delete'})
      return false;
  }

  edititems(item) {
      this.edititem.emit({data:'edit'});
      return false;
  }

  searchitems(event: any) {
      this.listview = this._searchPipe.transform(this.datalist.list, event);
      //this.listview = this.datalist.list;
  }

}
