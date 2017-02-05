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
import { Router } from '@angular/router';
import { UserService } from '../user.service';
var UserAccountComponent = (function () {
    function UserAccountComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.getUsers();
    }
    UserAccountComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService.getUsers().subscribe(function (res) {
            _this.userList = JSON.parse(JSON.parse(JSON.stringify(res))._body);
        }, function (error) { return console.log(error); });
    };
    UserAccountComponent.prototype.onSelectPrimary = function (username) {
        this.router.navigate(['/primaryTransaction', username]);
    };
    UserAccountComponent.prototype.onSelectSavings = function (username) {
        this.router.navigate(['/savingsTransaction', username]);
    };
    UserAccountComponent.prototype.enableUser = function (username) {
        this.userService.enableUser(username).subscribe();
        location.reload();
    };
    UserAccountComponent.prototype.disableUser = function (username) {
        this.userService.disableUser(username).subscribe();
        location.reload();
    };
    UserAccountComponent.prototype.ngOnInit = function () {
    };
    return UserAccountComponent;
}());
UserAccountComponent = __decorate([
    Component({
        selector: 'app-user-account',
        templateUrl: './user-account.component.html',
        styleUrls: ['./user-account.component.css']
    }),
    __metadata("design:paramtypes", [UserService, Router])
], UserAccountComponent);
export { UserAccountComponent };
//# sourceMappingURL=/Users/zoomout/work/idea/Source/Source Code/AdminPortal/src/app/user-account/user-account.component.js.map