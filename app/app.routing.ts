import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './_guards/index';
import {NewsComponent} from "./news/index";
import {UserDetailsComponent} from "./user-details/index";

const appRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    {path: 'news', component: NewsComponent, canActivate: [AuthGuard]},
    {path: 'user-details', component: UserDetailsComponent, canActivate: [AuthGuard]},
    {
        path: 'transactions',
        loadChildren: 'app/transactions/transactions.module#TransactionsModule',
        canActivate: [AuthGuard]
    },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);