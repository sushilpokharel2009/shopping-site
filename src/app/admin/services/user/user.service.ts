import {Injectable} from '@angular/core';
import {Cookie} from 'ng2-cookies';
@Injectable()
export class UserService {
  private username: string = null;
  private cookie: string = null;
  private usertype: string = null;
  private approved: string = null;
  private loggedin: boolean = false;

  constructor () {
    this.username = Cookie.get('ar');
    this.cookie = Cookie.get('_a');
   }

  public getusername(): string {
    return this.username;
  }

  public getcookie(): string {
    return this.cookie;
  }

  public getusertype(): string {
    return this.usertype;
  }

  public getapproved(): string {
    return this.approved;
  }

  public getloggedin(): boolean {
    return this.loggedin;
  }

  public reset() {
    this.username = null;
    this.cookie = null;
    this.usertype = null;
    this.approved = null;
    this.loggedin = false;
  }

  public setUserLogin(details: any) {
    this.username = details.username;
    this.cookie = details.cookie;
    this.usertype = details.usertype;
    this.approved = details.approved;
    this.loggedin = details.loggedin;
  }

}
