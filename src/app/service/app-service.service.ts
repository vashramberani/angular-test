import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Injectable()
export class AppServiceService {

  constructor(private http:Http) { }
  API_URL = "http://111.93.82.91:3000/";
  token = "LcKu5qNURCBv";
  
  signup(userData): Observable<Object> {
      console.log('............', userData);
        let headers = new Headers();
        // headers.append('Content-Type', 'application/x-www-form-urlencoded');

        headers.append('x-auth-token', "");
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.API_URL + 'auth/signup', userData, options).map(res => res.json());
    }
}
