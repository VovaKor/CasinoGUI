import { Injectable } from '@angular/core';
import { Transaction } from '../_models/transaction';
import { Http, Headers } from "@angular/http";
import {Router} from "@angular/router";
import { Location } from '@angular/common'
import 'rxjs/add/operator/toPromise';
import {TransactionReply} from "./transaction-reply";


@Injectable()
export class TransactionService {
    private baseUrl = 'http://localhost:8080/transactions';

    constructor(
        private http: Http,
        private router: Router,
        private location: Location
    ) {}

    getAllTransactions(): Promise<TransactionReply> {
        return this.http.get(this.baseUrl + '/all', {headers: this.getHeaders()})
            .toPromise()
            .then(response => response.json() as TransactionReply)
            .catch((error: any) => this.handleError(error));
    }

    getUsersTransactions(login: string): Promise<TransactionReply> {
        if (login === 'all') {
            return this.getAllTransactions();
        } else {
            return this.http.get(this.baseUrl + '/byloginid/' + login, {headers: this.getHeaders()})
                .toPromise()
                .then(response => response.json() as TransactionReply)
                .catch((error: any) => this.handleError(error));
        }
    }

    addTransaction(transaction: Transaction): Promise<TransactionReply> {
        return this.http.post(this.baseUrl + '/add', JSON.stringify({transaction : transaction}), {headers: this.getHeaders()})
            .toPromise()
            .then(response => response.json() as TransactionReply)
            .catch((error: any) => this.handleError(error));
    }

    private handleError(error: any): any {
        alert("Error!\n" + error);
        if(error.status == 401) {
            this.router.navigate(['/login'], { queryParams: { returnUrl: this.location.path()}});
        }
        return null;
    }

    private getHeaders() : Headers{
        let headers = new Headers();
        headers.append('X-Authorization', JSON.parse(localStorage.getItem('currentUser')).token);
        headers.set('content-type', 'application/json');
        headers.set('Accept', 'application/json');
        return headers;
    }
}