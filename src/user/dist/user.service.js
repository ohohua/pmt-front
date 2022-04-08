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
exports.UserService = void 0;
var common_1 = require("@nestjs/common");
var login_entity_1 = require("../login/login.entity");
var disease_entity_1 = require("./disease.entity");
var typeorm_1 = require("@nestjs/typeorm");
var UserService = /** @class */ (function () {
    function UserService(userRepository, diseaseRepository) {
        this.userRepository = userRepository;
        this.diseaseRepository = diseaseRepository;
    }
    UserService.prototype.getUser = function (user) {
        return __awaiter(this, void 0, Promise, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userRepository.findOne({
                            where: { username: user.username, role: user.role }
                        })];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data];
                }
            });
        });
    };
    UserService.prototype.getParticularUser = function (user) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!user.sort) {
                            user.sort = 'updateTime';
                        }
                        if (!user.isNew) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.userRepository.query("SELECT id,username,role,nickname,avatar,createTime,updateTime, praiseQuantity, answerNumber, isNew FROM USER WHERE role='" + user.role + "' AND isNew=1 ORDER BY " + user.sort + " DESC")];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2: return [4 /*yield*/, this.userRepository.query("SELECT id,username,role,nickname,avatar,createTime,updateTime, praiseQuantity, answerNumber, isNew FROM USER WHERE role='" + user.role + "' ORDER BY " + user.sort + " DESC")];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UserService.prototype.saveSymptom = function (disease) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.diseaseRepository.save(disease)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UserService.prototype.updateMessage = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!user.praiseQuantity && !user.answerNumber) {
                            return [2 /*return*/, '必要参数未传递'];
                        }
                        if (!user.praiseQuantity) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.userRepository.update({ username: user.username }, { praiseQuantity: user.praiseQuantity })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2:
                        if (!user.answerNumber) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.userRepository.update({ username: user.username }, { answerNumber: user.answerNumber })];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/, '更新成功'];
                }
            });
        });
    };
    UserService.prototype.loadAboutDocUnderPatient = function (doc) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userRepository.query("\n    SELECT username, name, age,sex, bloodType, phone, symptom, createTime, updateDate, doctorUsername FROM DISEASE WHERE doctorUsername='" + doc + "' AND response = \"\"")];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UserService.prototype.loaBbyName = function (username) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userRepository.query("\n    SELECT username, name, age,sex, bloodType, phone, symptom, createTime, updateDate, doctorUsername FROM DISEASE WHERE username='" + username + "'")];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UserService.prototype.saveResponse = function (user) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.diseaseRepository.update({ username: user.username }, { response: user.response })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UserService.prototype.uploadAvatar = function (data) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userRepository.update({ id: data.id }, { avatar: data.avatar })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UserService.prototype.uploadUser = function (data) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userRepository.update({ id: data.id }, { username: data.username, nickname: data.nickname })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, '修改成功！'];
                }
            });
        });
    };
    UserService.prototype.loadAllUser = function (username) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!username) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.userRepository.find({
                                where: { username: "" + username }
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2: return [4 /*yield*/, this.userRepository.find()];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UserService.prototype.addUser = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.userRepository
                        .find({ where: { username: "" + user.username } })
                        .then(function (res) {
                        if (res.length === 0) {
                            // 解决@BeforeInsert不会触发的问题
                            var entity = Object.assign(new login_entity_1.User(), user);
                            // 避免将password返回, 只有select设置了排除password字段
                            _this.userRepository.save(entity).then(function () {
                                return _this.userRepository.findOne({
                                    where: { username: user.username }
                                });
                            });
                        }
                        else {
                            return '已存在！';
                        }
                    })];
            });
        });
    };
    UserService.prototype.updateUser = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.userRepository
                        .find({ where: { username: "" + user.username } })
                        .then(function (res) {
                        if (res.length === 0) {
                            return '没有该账户！';
                        }
                        else {
                            delete user.key;
                            delete user.password;
                            var entity = Object.assign(new login_entity_1.User(), user);
                            _this.userRepository.update({ username: "" + user.username }, user);
                            return '更改成功！';
                        }
                    })];
            });
        });
    };
    UserService.prototype.userDel = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var p, _i, user_1, i;
            return __generator(this, function (_a) {
                p = [];
                for (_i = 0, user_1 = user; _i < user_1.length; _i++) {
                    i = user_1[_i];
                    p.push(this.userRepository["delete"]({ username: "" + i.username }));
                }
                return [2 /*return*/, Promise.all(p).then(function (res) {
                        return '删除成功！';
                    })];
            });
        });
    };
    UserService = __decorate([
        common_1.Injectable(),
        __param(0, typeorm_1.InjectRepository(login_entity_1.User)),
        __param(1, typeorm_1.InjectRepository(disease_entity_1.Disease))
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
