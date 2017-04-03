import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import { TransactionsRoutingModule } from "./transactions.routes";
import { TransactionService } from "./transaction.service";
import { AddTransactionComponent } from './add-transaction.component'
import {TransactionListComponent} from "./transaction-list.component";

@NgModule({
    imports: [
        CommonModule,
        TransactionsRoutingModule,
        FormsModule,
        HttpModule,
    ],
    declarations: [
        AddTransactionComponent,
        TransactionListComponent
    ],
    providers: [ TransactionService ]
})
export class TransactionsModule { }