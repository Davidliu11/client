(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html": 
        /*!******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
          \******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"kenko-dashboard\">\n    <mat-toolbar color=\"primary\" class=\"app-nav-bar mat-elevation-z6\">\n        <H5>English Words Test</H5>\n    </mat-toolbar>\n    <mat-sidenav-container class=\"kenko-main-content\">\n        <mat-sidenav class=\"side-nav\" mode=\"side\" [(opened)]=\"sideMenuOpened\">\n            <mat-toolbar>\n                <h6>All Members</h6>\n            </mat-toolbar>\n            <mat-list>\n                <ng-container *ngFor=\"let member of onlineMembers | orderBy: 'passedCount' : true\">\n                    <mat-list-item [ngClass]=\"getClass(member)\"\n                        (click)=\"selectMember(member)\">\n                        <ul class=\"test-result-indicator\">\n                            <ng-template ngFor let-item [ngForOf]=\"[1,1,1,1,1,1,1,1,1,1]\" let-i=\"index\">\n                                <li [ngClass]=\"{'passed-indicator': i < member.passedCount, 'failed-incicator': i >= member.passedCount && i < member.passedCount + member.failedCount}\"></li>\n                            </ng-template>\n                        </ul>\n                        <ngx-avatar name=\"{{member.name}}\"></ngx-avatar>\n                        <h4 mat-line><b>{{member.name}}</b></h4>\n                        <p mat-line> LAST TEST: <span style=\"color: green;\">{{member.rightAnswer}}</span>, <span\n                                style=\"color: red;\">{{member.wrongAnswer}}</span></p>\n                        <mat-divider></mat-divider>\n                    </mat-list-item>\n                </ng-container>\n            </mat-list>\n        </mat-sidenav>\n        <mat-sidenav-content class=\"side-nav-content\">\n            <div class=\"side-nav-control-anchor\" (click)=\"toggleNav()\">\n                <mat-icon *ngIf=\"sideMenuOpened\">keyboard_arrow_left</mat-icon>\n                <mat-icon *ngIf=\"!sideMenuOpened\">keyboard_arrow_right</mat-icon>\n            </div>\n            <mat-card class=\"card\">\n                <mat-card-header style=\"display: flex; justify-content: center;\">\n                    <mat-card-title *ngIf=\"currentTester\">\n                        CURRENT： {{currentTester?.name}}\n                    </mat-card-title>\n                    <mat-card-title *ngIf=\"!currentTester\">\n                        SELECT TESTER\n                    </mat-card-title>\n                    <countdown style=\"position: absolute; right: 10px;\" *ngIf=\"testStarted\" [config]=\"countDownConfig\" (event)=\"countDownEvent($event)\"></countdown>\n                </mat-card-header>\n                <ng-container *ngIf=\"currentTester && testStarted\">\n                    <mat-card-content>\n                        <div class=\"word-presentation\">\n                            {{allWords[currentWordIndex]}}\n                        </div>\n                    </mat-card-content>\n                    <mat-card-actions class=\"action-button-group\">\n                        <ng-container>\n                            <button mat-fab color=primary (click)=\"rightAnswer()\"> PASS </button>\n                            <button mat-fab color=warn (click)=\"wrongAnswer()\"> FAIL </button>\n                        </ng-container>\n                    </mat-card-actions>\n                </ng-container>\n                <ng-container *ngIf=\"currentTester && !testStarted\">\n                    <mat-card-actions class=\"action-button-group\">\n                        <button mat-raised-button color=primary (click)=\"startTest()\"> Start Test </button>\n                    </mat-card-actions>\n\n                </ng-container>\n            </mat-card>\n        </mat-sidenav-content>\n    </mat-sidenav-container>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/welcome-page/welcome-page.component.html": 
        /*!************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/welcome-page/welcome-page.component.html ***!
          \************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"welcome-page-wrraper\">\n    <div class=\"backdrop\"></div>\n    <div class=\"hello\">\n        Welcome To English Words Test!\n    </div>\n    <div class=\"avatar\"></div>\n    <a mat-raised-button color=warn class=\"navigate-btn\" [routerLink]=\"['/dashboard']\">START TEST</a>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/./dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
            /* harmony import */ var _welcome_page_welcome_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./welcome-page/welcome-page.component */ "./src/app/welcome-page/welcome-page.component.ts");
            // Components
            var routes = [
                {
                    path: 'dashboard',
                    component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]
                },
                {
                    path: 'welcome',
                    component: _welcome_page_welcome_page_component__WEBPACK_IMPORTED_MODULE_4__["WelcomePageComponent"]
                },
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent(router) {
                    this.router = router;
                    this.firstLoad = false;
                }
                AppComponent.prototype.ngOnInit = function () {
                    this.firstLoad = !(!!localStorage.getItem('lastLoginDate'));
                    if (!this.firstLoad) {
                        this.router.navigate(['dashboard']);
                    }
                    else {
                        this.router.navigate(['welcome']);
                    }
                };
                return AppComponent;
            }());
            AppComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: "<router-outlet></router-outlet>",
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var ngx_avatar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-avatar */ "./node_modules/ngx-avatar/fesm2015/ngx-avatar.js");
            /* harmony import */ var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-order-pipe */ "./node_modules/ngx-order-pipe/fesm2015/ngx-order-pipe.js");
            /* harmony import */ var ngx_countdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-countdown */ "./node_modules/ngx-countdown/fesm2015/ngx-countdown.js");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
            /* harmony import */ var _welcome_page_welcome_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./welcome-page/welcome-page.component */ "./src/app/welcome-page/welcome-page.component.ts");
            // Modules
            // Components
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                        _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["DashboardComponent"],
                        _welcome_page_welcome_page_component__WEBPACK_IMPORTED_MODULE_12__["WelcomePageComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                        ngx_avatar__WEBPACK_IMPORTED_MODULE_7__["AvatarModule"],
                        ngx_order_pipe__WEBPACK_IMPORTED_MODULE_8__["OrderModule"],
                        // Material
                        _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDividerModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                        ngx_countdown__WEBPACK_IMPORTED_MODULE_9__["CountdownModule"]
                    ],
                    providers: [],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/dashboard/dashboard.component.less": 
        /*!****************************************************!*\
          !*** ./src/app/dashboard/dashboard.component.less ***!
          \****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".kenko-dashboard .app-nav-bar {\n  position: fixed;\n  height: 64px;\n  z-index: 2;\n}\n.kenko-dashboard .kenko-main-content {\n  font-family: 'News Cycle', sans-serif;\n  position: absolute;\n  top: 64px;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.kenko-dashboard .kenko-main-content .side-nav {\n  width: 300px;\n}\n.kenko-dashboard .kenko-main-content .side-nav .highlighted-menu-item {\n  background-color: rgba(0, 0, 0, 0.12);\n}\n.kenko-dashboard .kenko-main-content .side-nav .test-result-indicator {\n  list-style: none;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  flex-direction: row;\n  margin: 0;\n  padding: 0;\n}\n.kenko-dashboard .kenko-main-content .side-nav .test-result-indicator li {\n  height: 5px;\n  width: 28px;\n  margin-right: 2px;\n}\n.kenko-dashboard .kenko-main-content .side-nav .test-result-indicator .passed-indicator {\n  background-color: green;\n}\n.kenko-dashboard .kenko-main-content .side-nav .test-result-indicator .failed-incicator {\n  background-color: red;\n}\n.kenko-dashboard .kenko-main-content .side-nav-content {\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.kenko-dashboard .kenko-main-content .side-nav-content .side-nav-control-anchor {\n  position: absolute;\n  width: 25px;\n  height: 70px;\n  left: 0;\n  top: calc(50% - 35px);\n  background-color: white;\n  border-radius: 0 5px 5px 0;\n  z-index: 2;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-width: 1px 1px 1px 0px;\n  box-shadow: 0 1px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);\n  cursor: pointer;\n}\n.kenko-dashboard .kenko-main-content .side-nav-content .card {\n  max-width: 800px;\n  min-width: 200px;\n  width: 90%;\n  margin: 20px;\n}\n.kenko-dashboard .kenko-main-content .side-nav-content .card .word-presentation {\n  font-size: 50px;\n  font-weight: bold;\n  padding: 30px 20px;\n  min-height: 150px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  letter-spacing: 4px;\n}\n.kenko-dashboard .kenko-main-content .side-nav-content .card .action-button-group {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n.kenko-dashboard .kenko-main-content .side-nav-content .card .action-button-group button {\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXZpZC93b3JrL2tlbmtvX2NpcmN1cy9jbGllbnQvc3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsZUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDQUY7QURKQTtFQU9RLHFDQUFBO0VBQ04sa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FDQUY7QURaQTtFQWNZLFlBQUE7QUNDWjtBRGZBO0VBZ0JnQixxQ0FBQTtBQ0VoQjtBRGxCQTtFQW1CZ0IsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDRWhCO0FEN0JBO0VBNkJvQixXQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FDR3BCO0FEbENBO0VBa0NvQix1QkFBQTtBQ0dwQjtBRHJDQTtFQXFDb0IscUJBQUE7QUNHcEI7QUR4Q0E7RUEwQ1ksYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FDQ1o7QUQ5Q0E7RUErQ2dCLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLDBCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0NBQUE7RUFDQSw2QkFBQTtFQUNBLCtHQUFBO0VBQ0EsZUFBQTtBQ0VoQjtBRC9EQTtFQWdFaUIsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FDRWpCO0FEckVBO0VBcUVvQixlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ0dwQjtBRC9FQTtFQStFb0IsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0dwQjtBRHJGQTtFQW9Gd0IsaUJBQUE7RUFDQSxrQkFBQTtBQ0l4QiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIua2Vua28tZGFzaGJvYXJkIHtcblx0LmFwcC1uYXYtYmFyIHtcblx0XHRwb3NpdGlvbjogZml4ZWQ7XG5cdFx0aGVpZ2h0OiA2NHB4O1xuXHRcdHotaW5kZXg6IDI7XG5cdH1cblx0LmtlbmtvLW1haW4tY29udGVudCB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTmV3cyBDeWNsZScsIHNhbnMtc2VyaWY7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdHRvcDogNjRweDtcblx0XHRib3R0b206IDA7XG5cdFx0bGVmdDogMDtcblx0XHRyaWdodDogMDtcblx0XHQuc2lkZS1uYXYge1xuICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICAgICAgLmhpZ2hsaWdodGVkLW1lbnUtaXRlbSB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuMTIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnRlc3QtcmVzdWx0LWluZGljYXRvciB7XG4gICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyOHB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnBhc3NlZC1pbmRpY2F0b3Ige1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmZhaWxlZC1pbmNpY2F0b3Ige1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5zaWRlLW5hdi1jb250ZW50IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAuc2lkZS1uYXYtY29udHJvbC1hbmNob3Ige1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDcwcHg7XG4gICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICB0b3A6IGNhbGMoNTAlIC0gMzVweCk7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCA1cHggNXB4IDA7XG4gICAgICAgICAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLDAsMCwwLjIpO1xuICAgICAgICAgICAgICAgIGJvcmRlci13aWR0aDogMXB4IDFweCAxcHggMHB4O1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDFweCAtMXB4IHJnYmEoMCwwLDAsLjIpLCAwIDFweCAxcHggMCByZ2JhKDAsMCwwLC4xNCksIDAgMXB4IDNweCAwIHJnYmEoMCwwLDAsLjEyKTtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgfVxuICAgICAgICAgICAgIC5jYXJkIHtcbiAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICAgICAgICAgbWFyZ2luOiAyMHB4O1xuICAgICAgICAgICAgICAgIC53b3JkLXByZXNlbnRhdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDMwcHggMjBweDtcbiAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogMTUwcHg7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuYWN0aW9uLWJ1dHRvbi1ncm91cCB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgfVxuICAgICAgICB9XG5cdH1cbn1cbiIsIi5rZW5rby1kYXNoYm9hcmQgLmFwcC1uYXYtYmFyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBoZWlnaHQ6IDY0cHg7XG4gIHotaW5kZXg6IDI7XG59XG4ua2Vua28tZGFzaGJvYXJkIC5rZW5rby1tYWluLWNvbnRlbnQge1xuICBmb250LWZhbWlseTogJ05ld3MgQ3ljbGUnLCBzYW5zLXNlcmlmO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNjRweDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cbi5rZW5rby1kYXNoYm9hcmQgLmtlbmtvLW1haW4tY29udGVudCAuc2lkZS1uYXYge1xuICB3aWR0aDogMzAwcHg7XG59XG4ua2Vua28tZGFzaGJvYXJkIC5rZW5rby1tYWluLWNvbnRlbnQgLnNpZGUtbmF2IC5oaWdobGlnaHRlZC1tZW51LWl0ZW0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuLmtlbmtvLWRhc2hib2FyZCAua2Vua28tbWFpbi1jb250ZW50IC5zaWRlLW5hdiAudGVzdC1yZXN1bHQtaW5kaWNhdG9yIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG4ua2Vua28tZGFzaGJvYXJkIC5rZW5rby1tYWluLWNvbnRlbnQgLnNpZGUtbmF2IC50ZXN0LXJlc3VsdC1pbmRpY2F0b3IgbGkge1xuICBoZWlnaHQ6IDVweDtcbiAgd2lkdGg6IDI4cHg7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xufVxuLmtlbmtvLWRhc2hib2FyZCAua2Vua28tbWFpbi1jb250ZW50IC5zaWRlLW5hdiAudGVzdC1yZXN1bHQtaW5kaWNhdG9yIC5wYXNzZWQtaW5kaWNhdG9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG59XG4ua2Vua28tZGFzaGJvYXJkIC5rZW5rby1tYWluLWNvbnRlbnQgLnNpZGUtbmF2IC50ZXN0LXJlc3VsdC1pbmRpY2F0b3IgLmZhaWxlZC1pbmNpY2F0b3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG4ua2Vua28tZGFzaGJvYXJkIC5rZW5rby1tYWluLWNvbnRlbnQgLnNpZGUtbmF2LWNvbnRlbnQge1xuICBwYWRkaW5nOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmtlbmtvLWRhc2hib2FyZCAua2Vua28tbWFpbi1jb250ZW50IC5zaWRlLW5hdi1jb250ZW50IC5zaWRlLW5hdi1jb250cm9sLWFuY2hvciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogNzBweDtcbiAgbGVmdDogMDtcbiAgdG9wOiBjYWxjKDUwJSAtIDM1cHgpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMCA1cHggNXB4IDA7XG4gIHotaW5kZXg6IDI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGJvcmRlci13aWR0aDogMXB4IDFweCAxcHggMHB4O1xuICBib3gtc2hhZG93OiAwIDFweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5rZW5rby1kYXNoYm9hcmQgLmtlbmtvLW1haW4tY29udGVudCAuc2lkZS1uYXYtY29udGVudCAuY2FyZCB7XG4gIG1heC13aWR0aDogODAwcHg7XG4gIG1pbi13aWR0aDogMjAwcHg7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogMjBweDtcbn1cbi5rZW5rby1kYXNoYm9hcmQgLmtlbmtvLW1haW4tY29udGVudCAuc2lkZS1uYXYtY29udGVudCAuY2FyZCAud29yZC1wcmVzZW50YXRpb24ge1xuICBmb250LXNpemU6IDUwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiAzMHB4IDIwcHg7XG4gIG1pbi1oZWlnaHQ6IDE1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IDRweDtcbn1cbi5rZW5rby1kYXNoYm9hcmQgLmtlbmtvLW1haW4tY29udGVudCAuc2lkZS1uYXYtY29udGVudCAuY2FyZCAuYWN0aW9uLWJ1dHRvbi1ncm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmtlbmtvLWRhc2hib2FyZCAua2Vua28tbWFpbi1jb250ZW50IC5zaWRlLW5hdi1jb250ZW50IC5jYXJkIC5hY3Rpb24tYnV0dG9uLWdyb3VwIGJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/dashboard/dashboard.component.ts": 
        /*!**************************************************!*\
          !*** ./src/app/dashboard/dashboard.component.ts ***!
          \**************************************************/
        /*! exports provided: DashboardComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () { return DashboardComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
            /* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
            var DashboardComponent = /** @class */ (function () {
                function DashboardComponent() {
                    this.sideMenuOpened = true;
                    this.allWords = __webpack_require__(/*! ../../assets/words/main.json */ "./src/assets/words/main.json");
                    this.currentWordIndex = 0;
                    this.onlineMembers = [
                        {
                            name: 'Amy Zhang',
                            rightAnswer: 0,
                            wrongAnswer: 0,
                            passed: false,
                            passedCount: 0,
                        },
                        {
                            name: 'Charles Yu',
                            rightAnswer: 0,
                            wrongAnswer: 0,
                            passed: false,
                            passedCount: 0,
                        },
                        {
                            name: 'David Liu',
                            rightAnswer: 0,
                            wrongAnswer: 0,
                            passed: false,
                            passedCount: 0,
                        },
                        {
                            name: 'Vivian Shen',
                            rightAnswer: 0,
                            wrongAnswer: 0,
                            passed: false,
                            passedCount: 0,
                        },
                        {
                            name: 'Jack Chen',
                            rightAnswer: 0,
                            wrongAnswer: 0,
                            passed: false,
                            passedCount: 0,
                        },
                        {
                            name: 'Novia Na',
                            rightAnswer: 0,
                            wrongAnswer: 0,
                            passed: false,
                            passedCount: 0,
                        },
                        {
                            name: 'Han Li',
                            rightAnswer: 0,
                            wrongAnswer: 0,
                            passed: false,
                            passedCount: 0,
                        },
                        {
                            name: 'Sander Li',
                            rightAnswer: 0,
                            wrongAnswer: 0,
                            passed: false,
                            passedCount: 0,
                        },
                        {
                            name: 'TaoLue Liu',
                            rightAnswer: 0,
                            wrongAnswer: 0,
                            passed: false,
                            passedCount: 0,
                        },
                        {
                            name: 'Joey Li',
                            rightAnswer: 0,
                            wrongAnswer: 0,
                            passed: false,
                            passedCount: 0,
                        },
                        {
                            name: 'Ginny Fan',
                            rightAnswer: 0,
                            wrongAnswer: 0,
                            passed: false,
                            passedCount: 0,
                        }
                    ];
                    this.testerLastStatus = true;
                    this.testStarted = false;
                    this.countDownConfig = {
                        leftTime: 60,
                    };
                }
                DashboardComponent.prototype.ngOnInit = function () { };
                DashboardComponent.prototype.selectMember = function (member) {
                    if (member === this.currentTester) {
                        this.currentTester = undefined;
                        if (!member.passed) {
                            this.resetTestStatus(member);
                        }
                        return;
                    }
                    this.currentTester = this.resetTestStatus(member);
                };
                DashboardComponent.prototype.resetTestStatus = function (member) {
                    member.passed = false;
                    member.rightAnswer = 0;
                    member.wrongAnswer = 0;
                    this.testerLastStatus = true;
                    this.testStarted = false;
                    return member;
                };
                DashboardComponent.prototype.toggleNav = function () {
                    this.sideMenuOpened = !this.sideMenuOpened;
                };
                DashboardComponent.prototype.rightAnswer = function () {
                    this.testerLastStatus = true;
                    this.currentTester.rightAnswer += 1;
                    if (this.currentTester.rightAnswer === 3) {
                        this.testStarted = false;
                        this.currentTester.passed = true;
                        if (!this.currentTester.passedCount) {
                            this.currentTester.passedCount = 0;
                        }
                        this.currentTester.passedCount += 1;
                        console.log(this.currentTester);
                        this.currentTester = undefined;
                        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Congratulations!', 'You passed this test!', 'success');
                    }
                    this.nextWords();
                };
                DashboardComponent.prototype.wrongAnswer = function () {
                    this.currentTester.wrongAnswer += 1;
                    if (this.testerLastStatus === false) {
                        this.terminateTest('You failed this test.');
                    }
                    else {
                        this.testerLastStatus = false;
                    }
                    this.nextWords();
                };
                DashboardComponent.prototype.terminateTest = function (reason) {
                    this.testStarted = false;
                    if (!this.currentTester.failedCount) {
                        this.currentTester.failedCount = 0;
                    }
                    this.currentTester.failedCount += 1;
                    this.currentTester = undefined;
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Sorry, test failed!', reason, 'error');
                };
                DashboardComponent.prototype.nextWords = function () {
                    this.currentWordIndex = this.currentWordIndex + 2 > this.allWords.length ? 0 : this.currentWordIndex + 1;
                };
                DashboardComponent.prototype.startTest = function () {
                    this.testStarted = true;
                };
                DashboardComponent.prototype.getClass = function (member) {
                    return {
                        'highlighted-menu-item': member === this.currentTester
                    };
                };
                DashboardComponent.prototype.countDownEvent = function (event) {
                    if (event.action === 'done') {
                        this.terminateTest('Time up!');
                    }
                };
                return DashboardComponent;
            }());
            DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-dashboard',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.less */ "./src/app/dashboard/dashboard.component.less")).default]
                })
            ], DashboardComponent);
            /***/ 
        }),
        /***/ "./src/app/welcome-page/welcome-page.component.less": 
        /*!**********************************************************!*\
          !*** ./src/app/welcome-page/welcome-page.component.less ***!
          \**********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".welcome-page-wrraper {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  background: no-repeat center / 100% url('wel-bg.jpg');\n  background-size: 100% 100%;\n}\n.welcome-page-wrraper .hello {\n  font-size: 50px;\n  color: white;\n  letter-spacing: 2px;\n  margin-top: -50px;\n  margin-bottom: 50px;\n  text-shadow: 5px 4px #558ABB;\n}\n.welcome-page-wrraper .backdrop {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 255, 0, 0.1);\n}\n.welcome-page-wrraper .avatar {\n  height: 150px;\n  width: 150px;\n  border-radius: 50%;\n  border: 5px solid white;\n  background: no-repeat center / 100% url('WechatIMG1.jpeg');\n}\n.welcome-page-wrraper .navigate-btn {\n  margin-top: 10px;\n  transition: all ease 0.3s;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXZpZC93b3JrL2tlbmtvX2NpcmN1cy9jbGllbnQvc3JjL2FwcC93ZWxjb21lLXBhZ2Uvd2VsY29tZS1wYWdlLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC93ZWxjb21lLXBhZ2Uvd2VsY29tZS1wYWdlLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EscURBQUE7RUFDQSwwQkFBQTtBQ0NKO0FEVEE7RUFVUSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0FDRVI7QURqQkE7RUFrQlEsa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esc0NBQUE7QUNFUjtBRHpCQTtFQTBCUSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSwwREFBQTtBQ0VSO0FEaENBO0VBaUNRLGdCQUFBO0VBQ0EseUJBQUE7QUNFUiIsImZpbGUiOiJzcmMvYXBwL3dlbGNvbWUtcGFnZS93ZWxjb21lLXBhZ2UuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZS1wYWdlLXdycmFwZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBiYWNrZ3JvdW5kOiBuby1yZXBlYXQgY2VudGVyLzEwMCUgdXJsKFwiLi4vLi4vYXNzZXRzL2ltZy93ZWwtYmcuanBnXCIpO1xuICAgIGJhY2tncm91bmQtc2l6ZToxMDAlIDEwMCU7XG4gICAgLmhlbGxvIHtcbiAgICAgICAgZm9udC1zaXplOiA1MHB4O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgICAgIG1hcmdpbi10b3A6IC01MHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgICAgICB0ZXh0LXNoYWRvdzogNXB4IDRweCAjNTU4QUJCO1xuICAgIH1cbiAgICAuYmFja2Ryb3Age1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDI1NSwwLCAuMSk7XG4gICAgfVxuICAgIC5hdmF0YXIge1xuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgYm9yZGVyOiA1cHggc29saWQgd2hpdGU7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vLXJlcGVhdCBjZW50ZXIvMTAwJSB1cmwoXCIuLi8uLi9hc3NldHMvaW1nL1dlY2hhdElNRzEuanBlZ1wiKTtcbiAgICB9XG4gICAgLm5hdmlnYXRlLWJ0biB7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCBlYXNlIDAuM3M7XG4gICAgfVxufVxuIiwiLndlbGNvbWUtcGFnZS13cnJhcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJhY2tncm91bmQ6IG5vLXJlcGVhdCBjZW50ZXIgLyAxMDAlIHVybChcIi4uLy4uL2Fzc2V0cy9pbWcvd2VsLWJnLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG59XG4ud2VsY29tZS1wYWdlLXdycmFwZXIgLmhlbGxvIHtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIG1hcmdpbi10b3A6IC01MHB4O1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICB0ZXh0LXNoYWRvdzogNXB4IDRweCAjNTU4QUJCO1xufVxuLndlbGNvbWUtcGFnZS13cnJhcGVyIC5iYWNrZHJvcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDI1NSwgMCwgMC4xKTtcbn1cbi53ZWxjb21lLXBhZ2Utd3JyYXBlciAuYXZhdGFyIHtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgd2lkdGg6IDE1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogNXB4IHNvbGlkIHdoaXRlO1xuICBiYWNrZ3JvdW5kOiBuby1yZXBlYXQgY2VudGVyIC8gMTAwJSB1cmwoXCIuLi8uLi9hc3NldHMvaW1nL1dlY2hhdElNRzEuanBlZ1wiKTtcbn1cbi53ZWxjb21lLXBhZ2Utd3JyYXBlciAubmF2aWdhdGUtYnRuIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UgMC4zcztcbn1cbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/welcome-page/welcome-page.component.ts": 
        /*!********************************************************!*\
          !*** ./src/app/welcome-page/welcome-page.component.ts ***!
          \********************************************************/
        /*! exports provided: WelcomePageComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePageComponent", function () { return WelcomePageComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var WelcomePageComponent = /** @class */ (function () {
                function WelcomePageComponent() {
                    localStorage.setItem('lastLoginDate', new Date().toDateString());
                }
                WelcomePageComponent.prototype.ngOnInit = function () {
                };
                return WelcomePageComponent;
            }());
            WelcomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-welcome-page',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./welcome-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/welcome-page/welcome-page.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./welcome-page.component.less */ "./src/app/welcome-page/welcome-page.component.less")).default]
                })
            ], WelcomePageComponent);
            /***/ 
        }),
        /***/ "./src/assets/words/main.json": 
        /*!************************************!*\
          !*** ./src/assets/words/main.json ***!
          \************************************/
        /*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, default */
        /***/ (function (module) {
            module.exports = JSON.parse("[\"Factor\",\"Creation\",\"Compaction\",\"Employment\",\"Segment\",\"Amplify\",\"Verify\",\"Clarify\",\"Confound\",\"Deploy\",\"Disappear\",\"Eliminate\",\"Exclusion\",\"Individual\",\"Resemble\",\"Refrain\",\"Restore\",\"Upgrade\",\"Scatter\",\"Identify\",\"Legacy\",\"Category\",\"Assessment\",\"Prediction\",\"Universal\",\"Encourage\",\"Standardize\",\"Invasive\",\"Ingenious\",\"Interlude\",\"Forebear\",\"Cooperation\",\"Coincident\",\"Delightful\",\"Encryption\",\"Modification\",\"Reflect\",\"Passionate\",\"tenacity\",\"grateful\",\"collective\",\"resilience\",\"Capability\",\"precisely\",\"sacrifice\",\"daunt\",\"Perspective\",\"tremendous\",\"Visibility\",\"vast\",\"momentum\",\"segment\",\"revenue\",\"Incessant\",\"advisor\",\"confidential\",\"stakeholder\",\"engage\",\"deck\",\"substantial\",\"emerge\",\"Tackle\",\"intrigue\",\"strategically\",\"Penetrate\",\"invest\",\"prospective\",\"Iguana\",\"Holistic\",\"diagnostic\",\"Interactive\",\"Granularity\",\"cohort\",\"predispose\",\"Accurate\",\"impact\",\"transparent\",\"stellar\",\"therapy\",\"Inertia\",\"Jaded\",\"Notorious\",\"bureaucracy\",\"faint\",\"enthusiastic\",\"scale\",\"ultimately\",\"refine\",\"prioritizing\",\"align\",\"sharpen\",\"lens\",\"dive\",\"complexity\",\"massive\",\"ramp\",\"compelling\",\"prioritize\",\"evolution\",\"leverage\",\"Accelerator\",\"Referral\",\"Optimization\",\"insurer\",\"evolve\",\"comprehensive\",\"corporate\",\"subset\",\"dedicated\",\"reconciliation\",\"parallel\",\"relevant\",\"bearing\",\"laser\",\"negotiation\",\"oriented\",\"competitor\",\"tailored\",\"capability\",\"engagement\",\"Assessment\",\"trajectory\",\"delighted\"]");
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! /Users/david/work/kenko_circus/client/src/main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map