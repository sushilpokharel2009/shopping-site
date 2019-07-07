import {Injectable} from '@angular/core';
import {Http, Response, Request,RequestMethod, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
//import 'rxjs/Rx';
import {ConfigService} from '../config/config.service';

@Injectable()
export class Httpprovider {
    http: Http;
    constructor(http: Http, private _config: ConfigService) {
        this.http = http;
    }
    httpReq(url: string, method: string, data: any, header: Headers){
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        //headers.append('credentials', 'include');
        //console.log(headers);

        // Get polyfill for IE from here
        // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
       if(header != undefined || header != null){
            Object.keys(header).forEach(function(key) {
                //console.log(key, header[key]);
                headers.append(key, header[key]);
            });
        }

        if (method === 'GET') { var methods = RequestMethod.Get }
        else if (method === 'POST') { var methods = RequestMethod.Post }
        else if (method === 'PUT') { var methods = RequestMethod.Put }
        else if (method === 'PATCH') { var methods = RequestMethod.Patch }
        else if (method === 'DELETE') { var methods = RequestMethod.Delete }
        else { methods = RequestMethod.Get };

        return this.http.request(new Request({
                    method: methods,
                    url: this._config.restServerUrl + url,
                    body: JSON.stringify(data),
                    headers: headers
                })).map(res => {
                    return res.json();
                });
    }

}
