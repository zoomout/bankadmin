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
var SavingsTransactionComponent = (function () {
    function SavingsTransactionComponent(route, userService) {
        var _this = this;
        this.route = route;
        this.userService = userService;
        this.route.params.forEach(function (params) {
            _this.username = params['username'];
        });
        this.getSavingsTransactionList();
    }
    SavingsTransactionComponent.prototype.getSavingsTransactionList = function () {
        var _this = this;
        this.userService.getSavingsTransactionList(this.username).subscribe(function (res) {
            console.log(JSON.parse(JSON.stringify(res))._body);
            _this.savingsTransactionList = JSON.parse(JSON.parse(JSON.stringify(res))._body);
        }, function (error) { return console.log(error); });
    };
    SavingsTransactionComponent.prototype.ngOnInit = function () { };
    return SavingsTransactionComponent;
}());
SavingsTransactionComponent = __decorate([
    Component({
        selector: 'app-savings-transaction',
        templateUrl: './savings-transaction.component.html',
        styleUrls: ['./savings-transaction.component.css']
    }),
    __metadata("design:paramtypes", [ActivatedRoute, UserService])
], SavingsTransactionComponent);
export { SavingsTransactionComponent };
//# sourceMappingURL=/Users/zoomout/work/idea/Source/Source Code/AdminPortal/src/app/savings-transaction/savings-transaction.component.js.map