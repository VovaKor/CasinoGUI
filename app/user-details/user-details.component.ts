import {Component, OnInit} from '@angular/core';
import {UserService} from "../_services/user.service";
import {User} from "../_models/user";

@Component({
    moduleId: module.id,
    templateUrl: './user-details.component.html',
    styleUrls: ['./user-details.component.css']
})

export class UserDetailsComponent implements OnInit {

    user: User;

    constructor(private userServise: UserService) {
    }

    ngOnInit() {
        let apiReply = JSON.parse(localStorage.getItem("currentUser"));
        this.user = apiReply.user;
    }

    //add functionality to loop object property in component
}

