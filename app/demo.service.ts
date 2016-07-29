import {Injectable} from '@angular/core';
import {HTTP_PROVIDERS, Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from 'rxjs/Rx';

@Injectable()
export class DemoService {

    constructor(private http:Http) {
    }

    // Uses http.get() to load a single JSON file
    getBooks() {
        return this.http.get('/app/books.json').map((res:Response) => res.json());
    }
    
    getData() {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        let body = JSON.stringify({'data' : '123'});
        // Note: This is only an example. The following API call will fail because there is no actual API to talk to.
        return this.http.post('http://192.168.1.85:3500/api/v2/user/getBankList', body, headers).map((res:Response) => res.json());
    }
}