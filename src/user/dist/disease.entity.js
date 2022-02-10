"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Disease = void 0;
var typeorm_1 = require("typeorm");
var Disease = /** @class */ (function () {
    function Disease() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('uuid')
    ], Disease.prototype, "id");
    __decorate([
        typeorm_1.Column({ "default": function () { return null; } })
    ], Disease.prototype, "username");
    __decorate([
        typeorm_1.Column()
    ], Disease.prototype, "doctorUsername");
    __decorate([
        typeorm_1.Column({ "default": function () { return null; } })
    ], Disease.prototype, "name");
    __decorate([
        typeorm_1.Column({ "default": function () { return 0; } })
    ], Disease.prototype, "age");
    __decorate([
        typeorm_1.Column({
            type: 'enum',
            "enum": ['男', '女', '未知'],
            "default": '未知'
        })
    ], Disease.prototype, "sex");
    __decorate([
        typeorm_1.Column({
            type: 'enum',
            "enum": ['A型', 'B型', 'O型', 'AB型', '不详'],
            "default": '不详'
        })
    ], Disease.prototype, "bloodType");
    __decorate([
        typeorm_1.Column({ "default": function () { return null; } })
    ], Disease.prototype, "phone");
    __decorate([
        typeorm_1.Column('text', { "default": function () { return null; } })
    ], Disease.prototype, "symptom");
    __decorate([
        typeorm_1.Column('text', { "default": function () { return null; } })
    ], Disease.prototype, "response");
    __decorate([
        typeorm_1.CreateDateColumn({})
    ], Disease.prototype, "createTime");
    __decorate([
        typeorm_1.UpdateDateColumn({})
    ], Disease.prototype, "updateDate");
    Disease = __decorate([
        typeorm_1.Entity('disease')
    ], Disease);
    return Disease;
}());
exports.Disease = Disease;
