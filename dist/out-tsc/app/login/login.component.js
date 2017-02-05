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
var LoginComponent = (function () {
    function LoginComponent(loginService) {
        this.loginService = loginService;
        if (localStorage.getItem('PortalAdminHasLoggedIn') == '' || localStorage.getItem('PortalAdminHasLoggedIn') == null) {
            this.loggedIn = false;
        }
        else {
            this.loggedIn = true;
        }
    }
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loginService.sendCredential(this.username, this.password).subscribe(function (res) {
            _this.loggedIn = true;
            localStorage.setItem('PortalAdminHasLoggedIn', 'true');
            location.reload();
        }, function (err) { return console.log(err); });
    };
    LoginComponent.prototype.ngOnInit = function () { };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css']
    }),
    __metadata("design:paramtypes", [LoginService])
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=/Users/zoomout/work/idea/Source/Source Code/AdminPortal/src/app/login/login.component.js.map