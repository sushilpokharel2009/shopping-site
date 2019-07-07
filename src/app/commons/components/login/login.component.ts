import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Router} from '@angular/router';
import {Request, Response} from '@angular/http';
import {Httpprovider} from '../../services/http/http.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class CommonsloginComponent implements OnInit {
  @Input() url: string;
  user: any = {username: null, password: null};
  @Output() loginevent: EventEmitter<any>;

  constructor(private _httpprovider: Httpprovider, private _router: Router) {
    this.loginevent = new EventEmitter();
  }

  ngOnInit() {
  }

  login(user: any) {
    this._httpprovider.httpReq(this.url, 'POST', user, user).subscribe((data: any) => {
      if (data.status === 'success') {
        this.loginevent.emit(data);
      }
    });
  }
}
