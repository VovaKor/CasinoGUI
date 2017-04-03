"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var index_1 = require("./login/index");
var index_2 = require("./register/index");
var index_3 = require("./_guards/index");
var index_4 = require("./news/index");
var index_5 = require("./user-details/index");
var appRoutes = [
    { path: '', component: index_1.LoginComponent },
    { path: 'login', component: index_1.LoginComponent },
    {
        path: 'automats',
        loadChildren: 'app/automats/automats.module#AutomatsModule',
        canActivate: [index_3.AuthGuard]
    },
    { path: 'register', component: index_2.RegisterComponent },
    { path: 'news', component: index_4.NewsComponent, canActivate: [index_3.AuthGuard] },
    { path: 'user-details', component: index_5.UserDetailsComponent, canActivate: [index_3.AuthGuard] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map