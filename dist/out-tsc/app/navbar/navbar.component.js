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
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
var NavbarComponent = (function () {
    function NavbarComponent(loginService, router) {
        this.loginService = loginService;
        this.router = router;
        if (localStorage.getItem('PortalAdminHasLoggedIn') == '') {
            this.loggedIn = false;
        }
        else {
            this.loggedIn = true;
        }
    }
    NavbarComponent.prototype.logout = function () {
        this.loginService.logout().subscribe(function (res) {
            localStorage.setItem('PortalAdminHasLoggedIn', '');
        }, function (err) { return console.log(err); });
        location.reload();
        this.router.navigate(['/login']);
    };
    NavbarComponent.prototype.getDisplay = function () {
        if (!this.loggedIn) {
            return "none";
        }
        else {
            return "";
        }
    };
    NavbarComponent.prototype.ngOnInit = function () {
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Component({
        selector: 'app-navbar',
        templateUrl: './navbar.component.html',
        styleUrls: ['./navbar.component.css']
    }),
    __metadata("design:paramtypes", [LoginService, Router])
], NavbarComponent);
export { NavbarComponent };
//# sourceMappingURL=/Users/zoomout/work/idea/Source/Source Code/AdminPortal/src/app/navbar/navbar.component.js.map