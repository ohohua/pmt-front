"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Subject = void 0;
var typeorm_1 = require("typeorm");
var Subject = /** @class */ (function () {
    function Subject() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], Subject.prototype, "id");
    __decorate([
        typeorm_1.Column('text', { "default": function () { return null; } })
    ], Subject.prototype, "title");
    __decorate([
        typeorm_1.Column('text', { "default": function () { return null; } })
    ], Subject.prototype, "A");
    __decorate([
        typeorm_1.Column('text', { "default": function () { return null; } })
    ], Subject.prototype, "B");
    __decorate([
        typeorm_1.Column('text', { "default": function () { return null; } })
    ], Subject.prototype, "C");
    __decorate([
        typeorm_1.Column('text', { "default": function () { return null; } })
    ], Subject.prototype, "D");
    __decorate([
        typeorm_1.Column('text', { "default": function () { return null; } })
    ], Subject.prototype, "res");
    __decorate([
        typeorm_1.Column('simple-enum', { "enum": ['A', 'B', 'C', 'D'], select: false })
    ], Subject.prototype, "ans");
    __decorate([
        typeorm_1.CreateDateColumn({})
    ], Subject.prototype, "createTime");
    __decorate([
        typeorm_1.UpdateDateColumn({})
    ], Subject.prototype, "updateTime");
    Subject = __decorate([
        typeorm_1.Entity('subject')
    ], Subject);
    return Subject;
}());
exports.Subject = Subject;
