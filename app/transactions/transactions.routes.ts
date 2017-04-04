import {TransactionService} from "./transaction.service";
import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AddTransactionComponent} from "./add-transaction.component";
import {TransactionListComponent} from "./transaction-list.component";
import {AuthGuard} from "../_guards/auth.guard";

const routes: Routes = [

    //If dont add AuthGuard service, at start you client server, first page will be Transaction, Even if user not was logined.
    { path: '', redirectTo: 'list', pathMatch: 'full', canActivate: [AuthGuard]},
    { path: 'list', component: TransactionListComponent },
    { path: 'add', component: AddTransactionComponent }
];
@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ],
    providers: [
        TransactionService
    ]
})

export class TransactionsRoutingModule { }