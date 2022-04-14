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
exports.UserController = void 0;
var common_1 = require("@nestjs/common");
var passport_1 = require("@nestjs/passport");
var swagger_1 = require("@nestjs/swagger");
var platform_express_1 = require("@nestjs/platform-express");
var multer = require('multer');
var fs = require('fs');
var fsExtra = require('fs-extra');
var fileRootPath = './public';
var UserController = /** @class */ (function () {
    function UserController(userService) {
        this.userService = userService;
    }
    UserController.prototype.getUserInfo = function (req) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // console.log(await this.userService.getUser(req.user))
                return [2 /*return*/, this.userService.getUser(req.user)];
            });
        });
    };
    /**
     * 根据用户类型返回所有的该类型的数据
     * @param role root | patient | doctor
     * @param req
     * @returns
     */
    UserController.prototype.getParticularUserInfo = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.userService.getParticularUser(user)];
            });
        });
    };
    /**
     * 保存病例信息
     * @param disease Object
     */
    UserController.prototype.saveSymptom = function (disease) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.userService.saveSymptom(disease)];
            });
        });
    };
    /**
     * 更新点赞量，回答人数
     * @param user {username必传}
     * @param req
     * @returns
     */
    UserController.prototype.updateMessage = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.userService.updateMessage(user)];
            });
        });
    };
    UserController.prototype.loadAboutDocUnderPatient = function (req) {
        return __awaiter(this, void 0, void 0, function () {
            var doc;
            return __generator(this, function (_a) {
                if (req.user.role !== 'doctor') {
                    return [2 /*return*/, '该用户不是医生'];
                }
                doc = req.user.username;
                return [2 /*return*/, this.userService.loadAboutDocUnderPatient(doc)];
            });
        });
    };
    /**
     * 获取病例信息
     * @param param0
     * @returns
     */
    UserController.prototype.loaBbyName = function (_a) {
        var username = _a.username;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                return [2 /*return*/, this.userService.loaBbyName(username)];
            });
        });
    };
    UserController.prototype.saveResponse = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.userService.saveResponse(user)];
            });
        });
    };
    /**
     * 保存上传的头像
     * @param file 上传的图片信息
     * @param req 解析token中的个人信息
     * @returns null
     */
    UserController.prototype.uploadAvatar = function (file, req) {
        var path = file.path;
        var data = {
            id: req.user.id,
            avatar: "http://localhost:9088/user/" + path.split('\\')[2]
        };
        return this.userService.uploadAvatar(data);
    };
    /**
     * 修改用户信息
     * @param user 新用户信息
     */
    UserController.prototype.uploadUser = function (user, req) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                data = {
                    id: req.user.id,
                    username: user.username,
                    nickname: user.nickname
                };
                return [2 /*return*/, this.userService.uploadUser(data)];
            });
        });
    };
    /**
     * 获取所有用户 | 根据参数获取特定用户
     * @param param0 用户名
     * @param req token分析
     * @returns promise
     */
    UserController.prototype.loadAllUser = function (_a, req) {
        var username = _a.username;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                if (req.user.role !== 'root') {
                    return [2 /*return*/, '没有权限！'];
                }
                return [2 /*return*/, this.userService.loadAllUser(username)];
            });
        });
    };
    /**
     * 增加用户
     * @param param0 用户信息
     * @param req token分析
     * @returns promise
     */
    UserController.prototype.addUser = function (user, req) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (req.user.role !== 'root') {
                    return [2 /*return*/, '没有权限！'];
                }
                return [2 /*return*/, this.userService.addUser(user)];
            });
        });
    };
    /**
     * 更改用户
     * @param param0 用户信息
     * @param req token分析
     * @returns promise
     */
    UserController.prototype.updateUser = function (user, req) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (req.user.role !== 'root') {
                    return [2 /*return*/, '没有权限！'];
                }
                return [2 /*return*/, this.userService.updateUser(user)];
            });
        });
    };
    /**
     * 删除用户，根据username
     * @param user  Array
     * @param req
     * @returns promise
     */
    UserController.prototype.userDel = function (user, req) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (req.user.role !== 'root') {
                    return [2 /*return*/, '没有权限！'];
                }
                return [2 /*return*/, this.userService.userDel(user)];
            });
        });
    };
    /**
     * 获取所有病例 | 根据参数获取特定病例
     * @param param0 用户名
     * @param req token分析
     * @returns promise
     */
    UserController.prototype.loadAllDisease = function (_a, req) {
        var name = _a.name;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                if (req.user.role !== 'root') {
                    return [2 /*return*/, '没有权限！'];
                }
                return [2 /*return*/, this.userService.loadAllDisease(name)];
            });
        });
    };
    /**
     * 删除病例
     * @param param0 病例信息
     * @param req token分析
     * @returns promise
     */
    UserController.prototype.delDisease = function (disease, req) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (req.user.role !== 'root') {
                    return [2 /*return*/, '没有权限！'];
                }
                return [2 /*return*/, this.userService.delDisease(disease)];
            });
        });
    };
    /**
     * 更改病例
     * @param param0 用户信息
     * @param req token分析
     * @returns promise
     */
    UserController.prototype.updateDisease = function (user, req) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (req.user.role !== 'root') {
                    return [2 /*return*/, '没有权限！'];
                }
                return [2 /*return*/, this.userService.updateDisease(user)];
            });
        });
    };
    __decorate([
        swagger_1.ApiOperation({ summary: '根据token解析某个用户信息' }),
        swagger_1.ApiBearerAuth() // swagger文档设置token
        ,
        common_1.UseGuards(passport_1.AuthGuard('jwt')) // 添加jwt认证守卫：
        ,
        common_1.Get(),
        __param(0, common_1.Req())
    ], UserController.prototype, "getUserInfo");
    __decorate([
        swagger_1.ApiOperation({ summary: '获取特定角色用户信息' }),
        common_1.UseGuards(passport_1.AuthGuard('jwt')),
        common_1.Post('role'),
        __param(0, common_1.Body())
    ], UserController.prototype, "getParticularUserInfo");
    __decorate([
        swagger_1.ApiOperation({ summary: '保存病例信息' }),
        common_1.UseGuards(passport_1.AuthGuard('jwt')),
        common_1.Post('save-symptom'),
        __param(0, common_1.Body())
    ], UserController.prototype, "saveSymptom");
    __decorate([
        swagger_1.ApiOperation({ summary: '更新点赞量，回答人数' }),
        common_1.UseGuards(passport_1.AuthGuard('jwt')),
        common_1.Put('updateDetail'),
        __param(0, common_1.Body())
    ], UserController.prototype, "updateMessage");
    __decorate([
        swagger_1.ApiOperation({ summary: '医生去获取名下的病人' }),
        common_1.UseGuards(passport_1.AuthGuard('jwt')),
        common_1.Get('underDoc'),
        __param(0, common_1.Req())
    ], UserController.prototype, "loadAboutDocUnderPatient");
    __decorate([
        swagger_1.ApiOperation({ summary: '通过病人username获取病例信息' }),
        common_1.UseGuards(passport_1.AuthGuard('jwt')),
        common_1.Get('loadByName'),
        __param(0, common_1.Query())
    ], UserController.prototype, "loaBbyName");
    __decorate([
        swagger_1.ApiOperation({ summary: '保存医生的治疗建议' }),
        common_1.UseGuards(passport_1.AuthGuard('jwt')),
        common_1.Post('saveResponse'),
        __param(0, common_1.Body())
    ], UserController.prototype, "saveResponse");
    __decorate([
        swagger_1.ApiOperation({ summary: '上传头像' }),
        common_1.UseGuards(passport_1.AuthGuard('jwt')),
        common_1.Post('upload'),
        common_1.UseInterceptors(platform_express_1.FileInterceptor('file', {
            storage: multer.diskStorage({
                destination: function (req, file, cb) { return __awaiter(void 0, void 0, void 0, function () {
                    var path;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                path = fileRootPath + "/user";
                                // ensureDir 确保目录的存在。如果目录结构不存在,就创建一个
                                return [4 /*yield*/, fsExtra.ensureDir(path)];
                            case 1:
                                // ensureDir 确保目录的存在。如果目录结构不存在,就创建一个
                                _a.sent();
                                if (!fs.existsSync(path)) {
                                    fs.mkdirSync(path);
                                }
                                cb(null, path);
                                return [2 /*return*/];
                        }
                    });
                }); },
                filename: function (req, file, cb) {
                    cb(null, file.originalname);
                }
            })
        })),
        __param(0, common_1.UploadedFile()), __param(1, common_1.Req())
    ], UserController.prototype, "uploadAvatar");
    __decorate([
        swagger_1.ApiOperation({ summary: '修改用户信息' }),
        common_1.UseGuards(passport_1.AuthGuard('jwt')),
        common_1.Put('updateUser'),
        __param(0, common_1.Body()), __param(1, common_1.Req())
    ], UserController.prototype, "uploadUser");
    __decorate([
        swagger_1.ApiOperation({ summary: '获取所有用户 | 根据参数获取特定用户' }),
        common_1.UseGuards(passport_1.AuthGuard('jwt')),
        common_1.Get('loadAllUser'),
        __param(0, common_1.Query()), __param(1, common_1.Req())
    ], UserController.prototype, "loadAllUser");
    __decorate([
        swagger_1.ApiOperation({ summary: '添加用户' }),
        common_1.UseGuards(passport_1.AuthGuard('jwt')),
        common_1.Post('addUser'),
        __param(0, common_1.Body()), __param(1, common_1.Req())
    ], UserController.prototype, "addUser");
    __decorate([
        swagger_1.ApiOperation({ summary: '修改用户' }),
        common_1.UseGuards(passport_1.AuthGuard('jwt')),
        common_1.Post('updateUser'),
        __param(0, common_1.Body()), __param(1, common_1.Req())
    ], UserController.prototype, "updateUser");
    __decorate([
        swagger_1.ApiOperation({ summary: '删除用户' }),
        common_1.UseGuards(passport_1.AuthGuard('jwt')),
        common_1.Post('del'),
        __param(0, common_1.Body()), __param(1, common_1.Req())
    ], UserController.prototype, "userDel");
    __decorate([
        swagger_1.ApiOperation({ summary: '获取所有病例 | 根据参数获取特定病例' }),
        common_1.UseGuards(passport_1.AuthGuard('jwt')),
        common_1.Get('loadAllDisease'),
        __param(0, common_1.Query()), __param(1, common_1.Req())
    ], UserController.prototype, "loadAllDisease");
    __decorate([
        swagger_1.ApiOperation({ summary: '删除病例' }),
        common_1.UseGuards(passport_1.AuthGuard('jwt')),
        common_1.Post('delDisease'),
        __param(0, common_1.Body()), __param(1, common_1.Req())
    ], UserController.prototype, "delDisease");
    __decorate([
        swagger_1.ApiOperation({ summary: '修改病例' }),
        common_1.UseGuards(passport_1.AuthGuard('jwt')),
        common_1.Post('updateDisease'),
        __param(0, common_1.Body()), __param(1, common_1.Req())
    ], UserController.prototype, "updateDisease");
    UserController = __decorate([
        swagger_1.ApiTags('用户信息'),
        common_1.Controller('user')
    ], UserController);
    return UserController;
}());
exports.UserController = UserController;
