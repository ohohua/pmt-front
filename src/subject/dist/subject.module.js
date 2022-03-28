"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SubjectModule = void 0;
var common_1 = require("@nestjs/common");
var subject_controller_1 = require("./subject.controller");
var subject_service_1 = require("./subject.service");
var subject_entity_1 = require("./subject.entity");
var submit_entity_1 = require("./submit.entity");
var typeorm_1 = require("@nestjs/typeorm");
var passport_1 = require("@nestjs/passport");
var jwt_strategy_1 = require("src/auth/jwt.strategy");
var jwt_1 = require("@nestjs/jwt");
var jwt_contants_1 = require("src/auth/jwt.contants");
var login_entity_1 = require("src/login/login.entity");
var SubjectModule = /** @class */ (function () {
    function SubjectModule() {
    }
    SubjectModule = __decorate([
        common_1.Module({
            controllers: [subject_controller_1.SubjectController],
            providers: [subject_service_1.SubjectService],
            imports: [
                typeorm_1.TypeOrmModule.forFeature([subject_entity_1.Subject, login_entity_1.User, submit_entity_1.Submit]),
                passport_1.PassportModule,
                jwt_strategy_1.JwtStorage,
                jwt_1.JwtModule.register({
                    secret: jwt_contants_1.jwtContants.secret
                }),
            ]
        })
    ], SubjectModule);
    return SubjectModule;
}());
exports.SubjectModule = SubjectModule;
