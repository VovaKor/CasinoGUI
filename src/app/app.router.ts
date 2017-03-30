import {ModuleWithProviders} from '@angular/core'
import {Routes, RouterModule} from '@angular/router'

import {AppComponent} from "./app.component";
import {LoginComponent} from "./login/login.component";
import {UserDetailsComponent} from "./user-details/user-details.component";
import {NewsComponent} from "./news/news.component";

export const router: Routes = [
    {path: '', redirectTo: 'news', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'user-details', component: UserDetailsComponent},
    {path: 'news', component: NewsComponent},
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);