import { Component } from '@angular/core';
import { Transaction } from '../_models/transaction';
import { TransactionService } from './transaction.service';
import { OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap'
import {User} from "../_models/user";
import {TransactionReply} from "./transaction-reply";

@Component({
    selector: 'transaction-list',
    moduleId: module.id,
    templateUrl: './transaction-list.component.html',
    styleUrls: [ 'transactions.component.css' ]
})

export class TransactionListComponent implements OnInit {

    transactions: Transaction[];
    selectedTransaction: Transaction;
    user: User;

    isLoading: boolean = true;

    constructor (
        private transactionService: TransactionService,
        private route: ActivatedRoute,
        private location: Location,
    ) {}

    ngOnInit() {
        this.user = JSON.parse(localStorage.getItem('currentUser')).user;
                this.transactionService.getUsersTransactions(this.user.loginId)
            .then((reply: TransactionReply) =>  {
                if(reply != null && reply.retcode == 0) {
                    this.transactions = reply.transactions;
                    this.isLoading = false
                }
            });
    }

    onSelect(transaction: Transaction): void {
        if(this.selectedTransaction === transaction) {
            this.selectedTransaction = null;
        } else {
            this.selectedTransaction = transaction
        }
    }

    goBack() {
        this.location.back();
    }
}