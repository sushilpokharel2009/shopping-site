import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable()
export class CommonsEventsService {
@Output() menusearch: EventEmitter<any>;
@Output() menuchange: EventEmitter<any>;
  constructor() {
    this.menusearch = new EventEmitter();
    this.menuchange = new EventEmitter();
  }
  onEventSearchFn(menusearchvalue) {
    this.menusearch.emit({value: menusearchvalue});
  }
  onEventMenuChange(menuchangelist) {
    this.menuchange.emit(menuchangelist);
  }
}
