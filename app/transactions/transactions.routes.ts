import {TransactionService} from "./transaction.service";
import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AddTransactionComponent} from "./add-transaction.component";
import {TransactionListComponent} from "./transaction-list.component";

const routes: Routes = [

    { path: '', redirectTo: 'list', pathMatch: 'full' },
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