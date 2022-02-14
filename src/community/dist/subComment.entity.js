"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SubComment = void 0;
var typeorm_1 = require("typeorm");
var community_entity_1 = require("./community.entity");
// 子评论表
var SubComment = /** @class */ (function () {
    function SubComment() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('uuid')
    ], SubComment.prototype, "id");
    __decorate([
        typeorm_1.Column({ length: 100 })
    ], SubComment.prototype, "userId");
    __decorate([
        typeorm_1.Column({ length: 100, "default": function () { return null; } })
    ], SubComment.prototype, "content");
    __decorate([
        typeorm_1.Column({ length: 100, "default": function () { return null; } })
    ], SubComment.prototype, "nickname");
    __decorate([
        typeorm_1.Column({ length: 100, "default": function () { return null; } })
    ], SubComment.prototype, "avatar");
    __decorate([
        typeorm_1.ManyToOne(function () { return community_entity_1.Community; }, function (community) { return community.subComments; })
    ], SubComment.prototype, "community");
    SubComment = __decorate([
        typeorm_1.Entity('subComment')
    ], SubComment);
    return SubComment;
}());
exports.SubComment = SubComment;
