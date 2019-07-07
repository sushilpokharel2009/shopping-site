import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Router} from '@angular/router';
import {Request, Response} from '@angular/http';
import {Httpprovider} from '../../services/http/http.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class CommonsregisterComponent implements OnInit {
  @Input() url: string;
  user: any = {username: null, password: null};
  @Output() registerevent: EventEmitter<any>;

  constructor(private _httpprovider: Httpprovider, private _router: Router) {
    this.registerevent = new EventEmitter();
   }

  ngOnInit() {
  }
  
  login(user: any) {
    event.preventDefault();
    this._httpprovider.httpReq(this.url, 'POST', user, null).subscribe((data: any) => {
      this.registerevent.emit(data);
    });
  }

}
