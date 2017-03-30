import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {routes} from './app.router'
import {AppComponent} from './app.component';
import {NewsComponent} from './news/news.component';
import {LoginComponent} from './login/login.component';
import {UserDetailsComponent} from './user-details/user-details.component';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
    declarations: [
        AppComponent,
        NewsComponent,
        LoginComponent,
        UserDetailsComponent,
        RegistrationComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routes
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
