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
var automat_service_1 = require("./automat.service");
var AutomatListComponent = (function () {
    // private selectedId: number;
    function AutomatListComponent(service, route, router) {
        this.service = service;
        this.route = route;
        this.router = router;
    }
    AutomatListComponent.prototype.ngOnInit = function () {
        this.automats = this.service.getAutomats();
    };
    // isSelected(automat: Automat) { return automat.roleId === this.selectedId; }
    AutomatListComponent.prototype.onSelect = function (automat) {
        this.router.navigate(['/automats', automat.id]);
    };
    return AutomatListComponent;
}());
AutomatListComponent = __decorate([
    core_1.Component({
        template: "\n    <h2>AUTOMATS</h2>\n    <ul class=\"items\">\n      <li *ngFor=\"let automat of automats | async\" (click)=\"onSelect(automat)\">\n        <!--[class.selected]=\"isSelected(automat)\"-->\n        \n        <span class=\"badge\">{{ automat.id }}</span> {{ automat.name }}\n      </li>\n    </ul>\n  ",
        styleUrls: ['./app/automats/automat.component.css']
    }),
    __metadata("design:paramtypes", [automat_service_1.AutomatService,
        router_1.ActivatedRoute,
        router_1.Router])
], AutomatListComponent);
exports.AutomatListComponent = AutomatListComponent;
//# sourceMappingURL=automat-list.component.js.map