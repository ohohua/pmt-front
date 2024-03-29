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
exports.SubjectService = void 0;
var common_1 = require("@nestjs/common");
var subject_entity_1 = require("./subject.entity");
var submit_entity_1 = require("./submit.entity");
var typeorm_1 = require("@nestjs/typeorm");
var SubjectService = /** @class */ (function () {
    function SubjectService(subjectRepository, submitRepository) {
        this.subjectRepository = subjectRepository;
        this.submitRepository = submitRepository;
    }
    SubjectService.prototype.allSubject = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.subjectRepository.find()];
            });
        });
    };
    SubjectService.prototype.computedGrade = function (userId, answer) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.subjectRepository
                            .query("select * from subject")
                            .then(function (res) {
                            var gradeArr = [];
                            var _loop_1 = function (a) {
                                var temp = res.find(function (r) {
                                    return a.titleId == r.id && a.ansFromUser == r.ans;
                                });
                                if (temp) {
                                    gradeArr.push(temp);
                                }
                            };
                            for (var _i = 0, answer_1 = answer; _i < answer_1.length; _i++) {
                                var a = answer_1[_i];
                                _loop_1(a);
                            }
                            var lastGrade = Math.floor(gradeArr.length / res.length);
                            // 将成绩保存到submit表
                            _this.submitRepository
                                .find({ where: { userId: userId } })
                                .then(function (result) {
                                if (!result.length) {
                                    // 没找到，说明没有，新建
                                    var data = _this.submitRepository.create({
                                        userId: userId,
                                        grade: gradeArr.length
                                    });
                                    _this.submitRepository.save(data);
                                }
                                else {
                                    // 找到了，更新
                                    _this.submitRepository.update({ userId: userId }, { grade: gradeArr.length });
                                }
                            });
                            switch (Math.floor(lastGrade * 10)) {
                                case 10:
                                case 9:
                                    return '心理素质极佳'; // 一个题一分
                                case 8:
                                case 7:
                                case 6:
                                    return '心理素质良好';
                                case 5:
                                case 4:
                                case 3:
                                case 2:
                                case 1:
                                case 0:
                                    return '心理素质较差';
                            }
                        })];
                    case 1: 
                    // 1.先根据ans的题目id找到题目，对比答案，正确分数+1
                    // 2.根据useId找submit表有没有。 有更新成绩， 没有插入成绩
                    return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SubjectService.prototype.loadGrade = function (userId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.submitRepository.find({ where: { userId: userId } })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SubjectService.prototype.loadAllSubject = function (title) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!title) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.subjectRepository.find({
                                where: { title: "" + title }
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2: return [4 /*yield*/, this.subjectRepository.query("select * from subject")];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SubjectService.prototype.delSubject = function (info) {
        return __awaiter(this, void 0, void 0, function () {
            var p, _i, info_1, item;
            return __generator(this, function (_a) {
                p = [];
                for (_i = 0, info_1 = info; _i < info_1.length; _i++) {
                    item = info_1[_i];
                    p.push(this.subjectRepository.query("delete from subject where id = " + item.id));
                }
                return [2 /*return*/, Promise.all(p).then(function () {
                        return '删除成功！';
                    })];
            });
        });
    };
    SubjectService.prototype.addSubject = function (subject) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.subjectRepository
                        .find({ where: { title: "" + subject.title } })
                        .then(function (res) {
                        if (res.length === 0) {
                            // 解决@BeforeInsert不会触发的问题
                            var entity = Object.assign(new subject_entity_1.Subject(), subject);
                            _this.subjectRepository.save(entity);
                        }
                        else {
                            return '已存在！';
                        }
                    })];
            });
        });
    };
    SubjectService.prototype.updateSubject = function (subject) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.subjectRepository
                        .find({ where: { title: "" + subject.title } })
                        .then(function (res) {
                        if (res.length === 0) {
                            return '没有该题目！';
                        }
                        else {
                            delete subject.key;
                            delete subject.isNew;
                            _this.subjectRepository.update({ title: "" + subject.title }, subject);
                            return '更改成功！';
                        }
                    })];
            });
        });
    };
    SubjectService = __decorate([
        common_1.Injectable(),
        __param(0, typeorm_1.InjectRepository(subject_entity_1.Subject)),
        __param(1, typeorm_1.InjectRepository(submit_entity_1.Submit))
    ], SubjectService);
    return SubjectService;
}());
exports.SubjectService = SubjectService;
