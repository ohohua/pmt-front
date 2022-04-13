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
exports.SubjectController = void 0;
var common_1 = require("@nestjs/common");
var passport_1 = require("@nestjs/passport");
var swagger_1 = require("@nestjs/swagger");
var SubjectController = /** @class */ (function () {
    function SubjectController(subjectService) {
        this.subjectService = subjectService;
    }
    SubjectController.prototype.loadGrade = function (req) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log(req.user);
                return [2 /*return*/, this.subjectService.loadGrade(req.user.id)];
            });
        });
    };
    SubjectController.prototype.updateThump = function (dto) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.subjectService.allSubject()];
            });
        });
    };
    SubjectController.prototype.submitAns = function (req, ans) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // req { user }
                /*
                  user: {
                      id: 'e068d36e-cc4c-4290-8e53-54f542e3f72d',
                      username: 'lirui',
                      role: 'patient',
                      iat: 1648656877
                      }
                */
                // ans
                /*
                [
                  { titleId: '1', ansFromUser: 'A' },
                  { titleId: '2', ansFromUser: 'C' }
                ]
                */
                return [2 /*return*/, this.subjectService.computedGrade(req.user.id, ans)];
            });
        });
    };
    SubjectController.prototype.loadAllSubject = function (req, _a) {
        var title = _a.title;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                if (req.user.role !== 'root') {
                    return [2 /*return*/, '没有权限！'];
                }
                return [2 /*return*/, this.subjectService.loadAllSubject(title)];
            });
        });
    };
    SubjectController.prototype.delSubject = function (req, info) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (req.user.role !== 'root') {
                    return [2 /*return*/, '没有权限！'];
                }
                return [2 /*return*/, this.subjectService.delSubject(info)];
            });
        });
    };
    SubjectController.prototype.subject = function (sub, req) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (req.user.role !== 'root') {
                    return [2 /*return*/, '没有权限！'];
                }
                return [2 /*return*/, this.subjectService.addSubject(sub)];
            });
        });
    };
    /**
     * 更改题目信息
     * @param param0 题目信息
     * @param req token分析
     * @returns promise
     */
    SubjectController.prototype.updateSubject = function (subject, req) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (req.user.role !== 'root') {
                    return [2 /*return*/, '没有权限！'];
                }
                return [2 /*return*/, this.subjectService.updateSubject(subject)];
            });
        });
    };
    __decorate([
        swagger_1.ApiOperation({ summary: '获取心理测试成绩' }),
        swagger_1.ApiBearerAuth(),
        common_1.UseGuards(passport_1.AuthGuard('jwt')),
        common_1.Get('loadGrade'),
        __param(0, common_1.Req())
    ], SubjectController.prototype, "loadGrade");
    __decorate([
        swagger_1.ApiOperation({ summary: '获取题目' }),
        swagger_1.ApiBearerAuth(),
        common_1.UseGuards(passport_1.AuthGuard('jwt')),
        common_1.Get(),
        __param(0, common_1.Body())
    ], SubjectController.prototype, "updateThump");
    __decorate([
        swagger_1.ApiOperation({ summary: '提交答案' }),
        swagger_1.ApiBearerAuth(),
        common_1.UseGuards(passport_1.AuthGuard('jwt')),
        common_1.Post(),
        __param(0, common_1.Req()), __param(1, common_1.Body())
    ], SubjectController.prototype, "submitAns");
    __decorate([
        swagger_1.ApiOperation({ summary: '加载所有题目' }),
        swagger_1.ApiBearerAuth(),
        common_1.UseGuards(passport_1.AuthGuard('jwt')),
        common_1.Get('loadAllSubject'),
        __param(0, common_1.Req()), __param(1, common_1.Query())
    ], SubjectController.prototype, "loadAllSubject");
    __decorate([
        swagger_1.ApiOperation({ summary: '删除题目' }),
        swagger_1.ApiBearerAuth(),
        common_1.UseGuards(passport_1.AuthGuard('jwt')),
        common_1.Post('delSubject'),
        __param(0, common_1.Req()), __param(1, common_1.Body())
    ], SubjectController.prototype, "delSubject");
    __decorate([
        swagger_1.ApiOperation({ summary: '添加题目' }),
        common_1.UseGuards(passport_1.AuthGuard('jwt')),
        common_1.Post('addSubject'),
        __param(0, common_1.Body()), __param(1, common_1.Req())
    ], SubjectController.prototype, "subject");
    __decorate([
        swagger_1.ApiOperation({ summary: '修改题目信息' }),
        common_1.UseGuards(passport_1.AuthGuard('jwt')),
        common_1.Post('updateSubject'),
        __param(0, common_1.Body()), __param(1, common_1.Req())
    ], SubjectController.prototype, "updateSubject");
    SubjectController = __decorate([
        swagger_1.ApiTags('题目'),
        common_1.Controller('subject')
    ], SubjectController);
    return SubjectController;
}());
exports.SubjectController = SubjectController;
