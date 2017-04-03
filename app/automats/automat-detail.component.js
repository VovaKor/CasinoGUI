"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/add/operator/switchMap");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var animations_1 = require("../animations");
var automat_service_1 = require("./automat.service");
var AutomatDetailComponent = (function () {
    function AutomatDetailComponent(route, router, service) {
        this.route = route;
        this.router = router;
        this.service = service;
        this.routeAnimation = true;
        this.display = 'block';
        this.position = 'absolute';
    }
    AutomatDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.service.getAutomat(+params['id']); })
            .subscribe(function (automat) { return _this.automat = automat; });
    };
    AutomatDetailComponent.prototype.play = function (id) {
        var _this = this;
        this.service.getGameResult(id)
            .subscribe(function (a) { return _this.automat = a; });
    };
    AutomatDetailComponent.prototype.gotoAutomats = function () {
        this.router.navigate(['/automats']);
    };
    return AutomatDetailComponent;
}());
__decorate([
    core_1.HostBinding('@routeAnimation'),
    __metadata("design:type", Object)
], AutomatDetailComponent.prototype, "routeAnimation", void 0);
__decorate([
    core_1.HostBinding('style.display'),
    __metadata("design:type", Object)
], AutomatDetailComponent.prototype, "display", void 0);
__decorate([
    core_1.HostBinding('style.position'),
    __metadata("design:type", Object)
], AutomatDetailComponent.prototype, "position", void 0);
AutomatDetailComponent = __decorate([
    core_1.Component({
        template: "\n  \n  <div *ngIf=\"automat\">\n    <h3>\"{{ automat.name }}\"</h3>\n    <div>\n        <h4>{{ automat.description }}</h4>\n    </div>\n      <div *ngIf=\"automat.isWon\">\n          <h1>You WON!!!!</h1>\n      </div>\n    <ul class=\"automat\" >\n      <li *ngFor=\"let slot of automat.slots\"><label><span class=\"badge\">{{ slot }}</span></label></li>\n    </ul>\n      \n      <p>\n          <button class=\"banner btn-play\" (click)=\"play(automat.id)\">Play</button>\n          <button class=\"btn-back\" (click)=\"gotoAutomats()\">Back</button>\n\n      </p>  \n  </div>\n  ",
        animations: [animations_1.slideInDownAnimation],
        styleUrls: ['./app/automats/automat.component.css']
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        automat_service_1.AutomatService])
], AutomatDetailComponent);
exports.AutomatDetailComponent = AutomatDetailComponent;
//# sourceMappingURL=automat-detail.component.js.map