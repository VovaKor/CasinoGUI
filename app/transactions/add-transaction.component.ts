import {Component, OnInit} from '@angular/core';
import { Transaction } from '../_models/transaction';
import { TransactionService } from './transaction.service';
import 'rxjs/add/operator/switchMap'
import {User} from "../_models/user";
import { Location } from '@angular/common';
import {TransactionReply} from "./transaction-reply";

@Component({
    selector: 'add-transaction',
    moduleId: module.id,
    templateUrl: './add-transaction.component.html',
    styleUrls: ['./transactions.component.css']
})

export class AddTransactionComponent implements OnInit {

    newTransaction: Transaction = new Transaction;
    amount: number = 0.01;
    info: string;
    user: User;
    success: boolean = false;

    constructor (
        private transactionService: TransactionService,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.user = JSON.parse(localStorage.getItem('currentUser')).user;
    }

    onAccrue() {
        this.newTransaction.amount = String(this.amount.toFixed(2));
        this.sendTransaction();
    }

    onTakeOff() {
        this.newTransaction.amount = String(-this.amount.toFixed(2));
        this.sendTransaction();
    }

    sendTransaction() {
        this.newTransaction.loginId = this.user.loginId;
        this.newTransaction.info = this.info;
        this.transactionService.addTransaction(this.newTransaction).then((reply: TransactionReply) => {
            if (reply != null && reply.retcode == 0) {
                this.user.balance = (Number(this.user.balance) + Number(this.newTransaction.amount)).toFixed(2);
                let userTokenPair = JSON.parse(localStorage.getItem('currentUser'));
                userTokenPair.user = this.user;
                localStorage.setItem("currentUser", JSON.stringify(userTokenPair));
                this.success =true;
            } else {
                alert("Error: " + reply.error_message);
            }
        });
    }

    goBack() {
        this.location.back();
    }
}
