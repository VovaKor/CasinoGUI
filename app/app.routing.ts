import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './_guards/index';
import {NewsComponent} from "./news/index";
import {UserDetailsComponent} from "./user-details/index";


const appRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    {
        path: 'automats',
        loadChildren: 'app/automats/automats.module#AutomatsModule'
    },
    { path: 'register', component: RegisterComponent },
    {path: 'news', component: NewsComponent, canActivate: [AuthGuard]},
    {path: 'user-details', component: UserDetailsComponent, canActivate: [AuthGuard]},
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);