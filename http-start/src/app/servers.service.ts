import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ServersService {

    constructor(private http: Http) {
    }

    storeServers(servers: any[]) {
        const header = new Headers({
           'Content-Type': 'application/json'
        });
        // return this.http.post(
        //     'https://udemy-ng-http-ce40f.firebaseio.com/data.json',
        //     servers,
        //     {headers: header}
        //     );
        return this.http.put(
            'https://udemy-ng-http-ce40f.firebaseio.com/data.json',
            servers,
            {headers: header}
        );
    }

    getServers() {
        return this.http.get('https://udemy-ng-http-ce40f.firebaseio.com/data').map(
            (response: Response) => {
                const data = response.json();
                for (const server of data) {
                    server.name = 'FETCHED_' + server.name;
                }
                return data;
            }
        ).catch(
            (error: Response) => {
                return Observable.throw('Something went wrong! Error: ' +   error);
            }
        );
    }

    getAppName() {
        return this.http.get('https://udemy-ng-http-ce40f.firebaseio.com/appName.json').map(
            (response: Response) => {
                return response.json();
            }
        );
    }
}
