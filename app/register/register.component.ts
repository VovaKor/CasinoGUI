import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {AlertService, UserService} from '../_services/index';
import {User} from "../_models/user";

@Component({
    moduleId: module.id,
    templateUrl: 'register.component.html'
})

export class RegisterComponent implements OnInit {
    loading = false;
    model: any = {user:null};
    user: User = new User;

    constructor(private router: Router,
                private userService: UserService,
                private alertService: AlertService) {
    }

    ngOnInit() {
    }

    register() {
        this.model.user = this.user;
        this.loading = true;
        this.userService.create(this.model)
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}
