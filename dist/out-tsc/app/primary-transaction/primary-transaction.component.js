var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
var PrimaryTransactionComponent = (function () {
    function PrimaryTransactionComponent(route, userService) {
        var _this = this;
        this.route = route;
        this.userService = userService;
        this.route.params.forEach(function (params) {
            _this.username = params['username'];
        });
        this.getPrimaryTransactionList();
    }
    PrimaryTransactionComponent.prototype.getPrimaryTransactionList = function () {
        var _this = this;
        this.userService.getPrimaryTransactionList(this.username).subscribe(function (res) {
            console.log(JSON.parse(JSON.stringify(res))._body);
            _this.primaryTransactionList = JSON.parse(JSON.parse(JSON.stringify(res))._body);
        }, function (error) { return console.log(error); });
    };
    PrimaryTransactionComponent.prototype.ngOnInit = function () { };
    return PrimaryTransactionComponent;
}());
PrimaryTransactionComponent = __decorate([
    Component({
        selector: 'app-primary-transaction',
        templateUrl: './primary-transaction.component.html',
        styleUrls: ['./primary-transaction.component.css']
    }),
    __metadata("design:paramtypes", [ActivatedRoute, UserService])
], PrimaryTransactionComponent);
export { PrimaryTransactionComponent };
//# sourceMappingURL=/Users/zoomout/work/idea/Source/Source Code/AdminPortal/src/app/primary-transaction/primary-transaction.component.js.map