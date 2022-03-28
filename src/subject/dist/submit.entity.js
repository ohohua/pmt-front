"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Submit = void 0;
// 保存用户提交的答案实体
var typeorm_1 = require("typeorm");
var Submit = /** @class */ (function () {
    function Submit() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], Submit.prototype, "id");
    __decorate([
        typeorm_1.Column({ length: 100 })
    ], Submit.prototype, "title");
    __decorate([
        typeorm_1.Column('text', { "default": function () { return null; } })
    ], Submit.prototype, "userId");
    __decorate([
        typeorm_1.Column('simple-enum', { "enum": ['A', 'B', 'C', 'D'] })
    ], Submit.prototype, "ansFromUser");
    __decorate([
        typeorm_1.CreateDateColumn({})
    ], Submit.prototype, "createTime");
    __decorate([
        typeorm_1.UpdateDateColumn({})
    ], Submit.prototype, "updateTime");
    Submit = __decorate([
        typeorm_1.Entity('submit')
    ], Submit);
    return Submit;
}());
exports.Submit = Submit;
