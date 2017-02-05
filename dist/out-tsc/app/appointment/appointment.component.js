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
import { AppointmentService } from '../appointment.service';
var AppointmentComponent = (function () {
    function AppointmentComponent(appointmentService) {
        this.appointmentService = appointmentService;
        this.getAppointmentList();
    }
    AppointmentComponent.prototype.getAppointmentList = function () {
        var _this = this;
        this.appointmentService.getAppointmentList().subscribe(function (res) {
            _this.appointmentList = JSON.parse(JSON.parse(JSON.stringify(res))._body);
        }, function (error) { return console.log(error); });
    };
    AppointmentComponent.prototype.confirmAppointment = function (id) {
        this.appointmentService.confirmAppointment(id).subscribe();
        location.reload();
    };
    AppointmentComponent.prototype.ngOnInit = function () { };
    return AppointmentComponent;
}());
AppointmentComponent = __decorate([
    Component({
        selector: 'app-appointment',
        templateUrl: './appointment.component.html',
        styleUrls: ['./appointment.component.css']
    }),
    __metadata("design:paramtypes", [AppointmentService])
], AppointmentComponent);
export { AppointmentComponent };
//# sourceMappingURL=/Users/zoomout/work/idea/Source/Source Code/AdminPortal/src/app/appointment/appointment.component.js.map