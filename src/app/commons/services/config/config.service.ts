import {Injectable} from '@angular/core';

@Injectable()
export class ConfigService {

    dbConfig: any = {};

    serverConfig: any = {
        'domain': 'http://localhost:',
        'port': '9001',
        'username': '',
        'password': ''
    };

    restServerUrl: string = this.serverConfig.domain + this.serverConfig.port;

}
