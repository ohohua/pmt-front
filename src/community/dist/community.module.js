"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CommunityModule = void 0;
var common_1 = require("@nestjs/common");
var community_controller_1 = require("./community.controller");
var community_service_1 = require("./community.service");
var community_entity_1 = require("./community.entity");
var typeorm_1 = require("@nestjs/typeorm");
var passport_1 = require("@nestjs/passport");
var jwt_strategy_1 = require("src/auth/jwt.strategy");
var jwt_1 = require("@nestjs/jwt");
var jwt_contants_1 = require("src/auth/jwt.contants");
var login_entity_1 = require("src/login/login.entity");
var subComment_entity_1 = require("./subComment.entity");
var CommunityModule = /** @class */ (function () {
    function CommunityModule() {
    }
    CommunityModule = __decorate([
        common_1.Module({
            imports: [
                typeorm_1.TypeOrmModule.forFeature([community_entity_1.Community, login_entity_1.User, subComment_entity_1.SubComment]),
                passport_1.PassportModule,
                jwt_strategy_1.JwtStorage,
                jwt_1.JwtModule.register({
                    secret: jwt_contants_1.jwtContants.secret
                }),
            ],
            controllers: [community_controller_1.CommunityController],
            providers: [community_service_1.CommunityService]
        })
    ], CommunityModule);
    return CommunityModule;
}());
exports.CommunityModule = CommunityModule;
