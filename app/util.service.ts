import {Injectable} from '@angular/core';
import {HTTP_PROVIDERS, Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from 'rxjs/Rx';

@Injectable()
export class UtilService {

    isDefined(variable) {
	if (typeof variable == 'boolean') return true;
	return (typeof variable !== undefined && variable != null && variable != "");
    }
   
    getTime() {
    var date = new Date();
    var time = date.getTime();
    return time;
    }

}