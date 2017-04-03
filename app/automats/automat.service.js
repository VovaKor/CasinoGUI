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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
var AutomatService = (function () {
    function AutomatService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:8080/automats';
    }
    AutomatService.prototype.getAutomats = function () {
        var automats$ = this.http
            .get(this.baseUrl + "/all", { headers: this.getHeaders() })
            .map(mapAutomats)
            .catch(handleError);
        return automats$;
    };
    AutomatService.prototype.getAutomat = function (id) {
        var automat$ = this.http
            .get(this.baseUrl + "/byId/" + id, { headers: this.getHeaders() })
            .map(mapAutomat)
            .catch(handleError);
        return automat$;
    };
    AutomatService.prototype.getHeaders = function () {
        var headers = new http_1.Headers();
        headers.append('Accept', 'application/json');
        return headers;
    };
    AutomatService.prototype.getGameResult = function (id) {
        var automat$ = this.http
            .get(this.baseUrl + "/byId/" + id + "/play", { headers: this.getHeaders() })
            .map(mapAutomat)
            .catch(handleError);
        return automat$;
    };
    return AutomatService;
}());
AutomatService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AutomatService);
exports.AutomatService = AutomatService;
function mapAutomat(response) {
    var automats = mapAutomats(response);
    return automats.pop();
}
function mapAutomats(response) {
    // The response of the API has a results
    // property with the actual results
    return response.json().automats.map(toAutomat);
}
function toAutomat(a) {
    var automat = ({
        id: a.automatId,
        name: a.automatName,
        description: a.description,
        slots: a.slots,
        isWon: a.isWon
    });
    console.log('Parsed automat:', automat);
    return automat;
}
function handleError(error) {
    // log error
    // could be something more sofisticated
    var errorMsg = error.message || "Yikes! There was a problem and we couldn't retrieve your data!";
    console.error(errorMsg);
    // throw an application level error
    return Rx_1.Observable.throw(errorMsg);
}
//# sourceMappingURL=automat.service.js.map