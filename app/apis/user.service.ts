import {Injectable} from '@angular/core';
import {HTTP_PROVIDERS, Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from 'rxjs/Rx';

@Injectable()
export class UserService {

    constructor(private http:Http) {
    }

    // Uses http.get() to load a single JSON file
    createUser(data) {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        let body = {'email' : data.email , 'username' : data.username, 'password' :data.password};
        return this.http.post('http://192.168.1.85:1111/api/user', body, headers).map((res:Response) => res.json());
    }
}