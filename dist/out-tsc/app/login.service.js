var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
var LoginService = (function () {
    function LoginService(http) {
        this.http = http;
    }
    LoginService.prototype.sendCredential = function (username, password) {
        var url = "http://localhost:8080/index";
        var params = 'username=' + username + '&password=' + password;
        var headers = new Headers({
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        return this.http.post(url, params, { headers: headers, withCredentials: true });
    };
    LoginService.prototype.logout = function () {
        var url = "http://localhost:8080/logout";
        return this.http.get(url, { withCredentials: true });
    };
    return LoginService;
}());
LoginService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], LoginService);
export { LoginService };
//# sourceMappingURL=/Users/zoomout/work/idea/Source/Source Code/AdminPortal/src/app/login.service.js.map