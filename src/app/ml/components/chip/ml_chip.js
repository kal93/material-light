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
var core_1 = require("@angular/core");
var MlChip = (function () {
    function MlChip() {
        this.visible = true;
    }
    MlChip.prototype.deleteChip = function ($event) {
        //todo: remove from dom?
        this.visible = !this.visible;
        this.action ? this.action() : console.log('Chip deleted. No further action defined.');
        return false;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MlChip.prototype, "deletable", void 0);
    __decorate([
        core_1.Input('delete-action'), 
        __metadata('design:type', Function)
    ], MlChip.prototype, "action", void 0);
    __decorate([
        core_1.Input('contact-image'), 
        __metadata('design:type', String)
    ], MlChip.prototype, "img", void 0);
    __decorate([
        core_1.Input('contact-letter'), 
        __metadata('design:type', String)
    ], MlChip.prototype, "letter", void 0);
    MlChip = __decorate([
        core_1.Component({
            selector: 'ml-chip',
            moduleId: module.id.toString(),
            styleUrls: ['./ml_chip.css'],
            template: "\n\n<span *ngIf=\"visible\" class=\"mdl-chip\" \n      [ngClass]=\"{'mdl-chip--contact': img || letter, 'mdl-chip--deletable': deletable}\">\n  \n  <span *ngIf=\"letter\" class=\"mdl-chip__contact mdl-color--teal mdl-color-text--white\">{{letter}}</span>\n  \n  <img *ngIf=\"img\" class=\"mdl-chip__contact\" [src]=\"img\"/>\n  \n  <span class=\"mdl-chip__text\">\n    <ng-content></ng-content>\n  </span>\n    \n  <a *ngIf=\"deletable\" href=\"#\" class=\"mdl-chip__action\" (click)=\"deleteChip($event)\">\n    <i class=\"material-icons\">cancel</i>\n  </a>\n</span>\n\n" //template
        }), 
        __metadata('design:paramtypes', [])
    ], MlChip);
    return MlChip;
}());
exports.MlChip = MlChip;
//# sourceMappingURL=C:/Users/Yago/WebstormProjects/material-light-demo-webpack/src/app/ml/components/chip/ml_chip.js.map