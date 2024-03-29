"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.CommunityService = void 0;
var common_1 = require("@nestjs/common");
var community_entity_1 = require("./community.entity");
var typeorm_1 = require("@nestjs/typeorm");
var login_entity_1 = require("src/login/login.entity");
var subComment_entity_1 = require("./subComment.entity");
var CommunityService = /** @class */ (function () {
    function CommunityService(userRepository, cRepository, subRepository) {
        this.userRepository = userRepository;
        this.cRepository = cRepository;
        this.subRepository = subRepository;
    }
    CommunityService.prototype.createCommunity = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.cRepository.save(data)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CommunityService.prototype.createSub = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.subRepository.save(data)];
                    case 1: 
                    // return await this.subRepository.query(`INSERT INTO subcomment values(${data.content, data.userId, data.community})`);
                    return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CommunityService.prototype.loadCommunity = function (type) {
        return __awaiter(this, void 0, void 0, function () {
            var sql;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(type === 'NEW')) return [3 /*break*/, 2];
                        sql = this.cRepository
                            .createQueryBuilder('community')
                            .leftJoinAndSelect('community.subComments', 'subComment')
                            .orderBy('community.createTime', 'DESC');
                        return [4 /*yield*/, this.cRepository
                                .createQueryBuilder('community')
                                .leftJoinAndSelect('community.subComments', 'subComment')
                                .orderBy('community.createTime', 'DESC')
                                .getMany()];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        if (!(type === 'HOT')) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.cRepository
                                .createQueryBuilder('community')
                                .leftJoinAndSelect('community.subComments', 'subComment')
                                .orderBy('praiseQuantity', 'DESC')
                                .getMany()];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CommunityService.prototype.updateThump = function (dto) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.cRepository.update({ id: dto.id }, { praiseQuantity: dto.praiseQuantity })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CommunityService.prototype.searchCommit = function (nickname) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!!nickname) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.cRepository.find({ where: { nickname: nickname } })];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2: return [4 /*yield*/, this.cRepository.find()];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CommunityService.prototype.delComment = function (info) {
        return __awaiter(this, void 0, void 0, function () {
            var p, _i, info_1, i;
            return __generator(this, function (_a) {
                p = [];
                for (_i = 0, info_1 = info; _i < info_1.length; _i++) {
                    i = info_1[_i];
                    p.push(this.cRepository["delete"]({ id: i.id }));
                }
                return [2 /*return*/, Promise.all(p).then(function () {
                        return '删除成功！';
                    })];
            });
        });
    };
    CommunityService.prototype.updateComment = function (info) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.cRepository.find({ where: { id: info.id } }).then(function (res) {
                        if (res.length === 0) {
                            return '没有该评论！';
                        }
                        else {
                            delete info.key;
                            // delete info.password;
                            // const entity = Object.assign(new User(), Community);
                            _this.cRepository.update({ id: info.id }, info);
                            return '更改成功！';
                        }
                    })];
            });
        });
    };
    CommunityService = __decorate([
        common_1.Injectable(),
        __param(0, typeorm_1.InjectRepository(login_entity_1.User)),
        __param(1, typeorm_1.InjectRepository(community_entity_1.Community)),
        __param(2, typeorm_1.InjectRepository(subComment_entity_1.SubComment))
    ], CommunityService);
    return CommunityService;
}());
exports.CommunityService = CommunityService;
