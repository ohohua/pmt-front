"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Community = void 0;
var typeorm_1 = require("typeorm");
var subComment_entity_1 = require("./subComment.entity");
var Community = /** @class */ (function () {
    function Community() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], Community.prototype, "id");
    __decorate([
        typeorm_1.Column({ length: 100 })
    ], Community.prototype, "userId");
    __decorate([
        typeorm_1.Column({ length: 100, "default": function () { return null; } })
    ], Community.prototype, "content");
    __decorate([
        typeorm_1.Column({ length: 100, "default": function () { return null; } })
    ], Community.prototype, "nickname");
    __decorate([
        typeorm_1.Column({ length: 100, "default": function () { return null; } })
    ], Community.prototype, "avatar");
    __decorate([
        typeorm_1.Column({ "default": function () { return 0; } })
    ], Community.prototype, "praiseQuantity");
    __decorate([
        typeorm_1.CreateDateColumn({})
    ], Community.prototype, "createTime");
    __decorate([
        typeorm_1.UpdateDateColumn({})
    ], Community.prototype, "updateTime");
    __decorate([
        typeorm_1.OneToMany(function () { return subComment_entity_1.SubComment; }, function (subComment) { return subComment.community; })
    ], Community.prototype, "subComments");
    Community = __decorate([
        typeorm_1.Entity('community')
    ], Community);
    return Community;
}());
exports.Community = Community;
