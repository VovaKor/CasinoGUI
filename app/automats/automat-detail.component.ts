import 'rxjs/add/operator/switchMap';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { slideInDownAnimation } from '../animations';

import { AutomatService }  from './automat.service';
import { Automat } from "./automat";
import {User} from "../_models/user";

@Component({
  template: `
  
  <div *ngIf="automat">
    <h3>"{{ automat.name }}"</h3>
    <div>
        <h4>{{ automat.description }}</h4>
    </div>
      <div *ngIf="automat.isWon">
          <h1>You WON!!!!</h1>
      </div>
    <ul class="automat" >
      <li *ngFor="let slot of automat.slots"><label><span class="badge">{{ slot }}</span></label></li>
    </ul>
      
      <p>
          <button class="banner btn-play" (click)="play(automat.id)">Play</button>
          <button class="btn-back" (click)="gotoAutomats()">Back</button>

      </p>  
  </div>
  `,
  animations: [ slideInDownAnimation ],
  styleUrls: ['./app/automats/automat.component.css']
})
export class AutomatDetailComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';

  automat: Automat;
  user: User;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: AutomatService
  ) {}

  ngOnInit() {
    this.route.params
      // (+) converts string 'roleId' to a number
      .switchMap((params: Params) => this.service.getAutomat(+params['id']))
      .subscribe((automat: Automat) => this.automat = automat);
  }
  play(id: number){
    this.service.getGameResult(id)
        .subscribe(a => {
          this.automat = a
          if(a.isWon === false)
          {
            this.user = JSON.parse(localStorage.getItem("currentUser")).user;
            this.user.balance = (+(this.user.balance) - 1).toString();
            let userTokenPair = JSON.parse(localStorage.getItem('currentUser'));
            userTokenPair.user = this.user;
            localStorage.setItem("currentUser", JSON.stringify(userTokenPair));
          }
        });
  }
  gotoAutomats() {
   this.router.navigate(['/automats']);
  }
}
