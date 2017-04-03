import { Injectable } from '@angular/core';
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    constructor(private http: Http) { }

    login(loginId: string, password: string) {
        return this.http.post('http://localhost:8080/auth', JSON.stringify({ loginId: loginId, password: password }), this.sh())
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let jsonResponse = response.json();
                if (jsonResponse.user && jsonResponse.token) {
                    // store user details and token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(jsonResponse));

                }
            });
    }

    //Simple Header
    private sh() {
        let headers = new Headers();
        headers.append('content-type', 'application/json');
        return new RequestOptions({headers: headers});
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}