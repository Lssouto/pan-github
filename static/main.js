(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_github_github_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/github/github.service */ "./src/app/services/github/github.service.ts");
/* harmony import */ var _store_actions_auth_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store/actions/auth.actions */ "./src/app/store/actions/auth.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = /** @class */ (function () {
    function AppComponent(githubService, store, router) {
        this.githubService = githubService;
        this.store = store;
        this.router = router;
        this.title = 'pan-github';
    }
    AppComponent.prototype.ngOnInit = function () {
        if (performance.navigation.type !== 1) {
            this.clearStorage();
        }
        else {
            this.validateToken();
        }
    };
    AppComponent.prototype.clearStorage = function () {
        window.sessionStorage.removeItem('pgAcessToken');
    };
    AppComponent.prototype.validateToken = function () {
        var _this = this;
        var savedToken = window.sessionStorage.getItem('pgAcessToken');
        if (savedToken !== 'null') {
            this.store.dispatch(new _store_actions_auth_actions__WEBPACK_IMPORTED_MODULE_2__["SuccessAuth"](savedToken));
            this.githubService.getRepoInformation()
                .subscribe(function (repos) {
                if (repos.length) {
                    console.log('Ok Token');
                }
                else {
                    console.log('Expired Token');
                    _this.store.dispatch(new _store_actions_auth_actions__WEBPACK_IMPORTED_MODULE_2__["FailureAuth"]());
                    _this.router.navigate(['/']);
                }
            });
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_github_github_service__WEBPACK_IMPORTED_MODULE_1__["GithubService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _views_views_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/views.module */ "./src/app/views/views.module.ts");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _services_services_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/services.module */ "./src/app/services/services.module.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _views_views_module__WEBPACK_IMPORTED_MODULE_5__["ViewsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_6__["ROUTES"]),
                _services_services_module__WEBPACK_IMPORTED_MODULE_7__["ServicesModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony import */ var _views_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/login/login.component */ "./src/app/views/login/login.component.ts");
/* harmony import */ var _views_repo_list_repo_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/repo-list/repo-list.component */ "./src/app/views/repo-list/repo-list.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");



var ROUTES = [
    {
        path: '',
        component: _views_login_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"],
    },
    {
        path: 'repositorios',
        component: _views_repo_list_repo_list_component__WEBPACK_IMPORTED_MODULE_1__["RepoListComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
    },
    {
        path: '**',
        component: _views_login_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"],
    },
];


/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authenticate_authenticate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authenticate/authenticate.service */ "./src/app/services/authenticate/authenticate.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        var isUserLoggedIn = false;
        this.authService.isUserLoggedIn()
            .subscribe(function (acessTknValue) {
            isUserLoggedIn = !!acessTknValue;
        });
        if (!isUserLoggedIn) {
            this.router.navigate(['/']);
        }
        return isUserLoggedIn;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_authenticate_authenticate_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/model/repo-info.model.ts":
/*!******************************************!*\
  !*** ./src/app/model/repo-info.model.ts ***!
  \******************************************/
/*! exports provided: RepoInfoModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepoInfoModel", function() { return RepoInfoModel; });
var RepoInfoModel = /** @class */ (function () {
    function RepoInfoModel(repoJson) {
        this.name = repoJson.name;
        this.qtdStars = repoJson.stargazers_count;
        this.qtdForks = repoJson.forks_count;
    }
    RepoInfoModel.prototype.get = function (field) {
        return this[field];
    };
    return RepoInfoModel;
}());



/***/ }),

/***/ "./src/app/pipes/capitalize/capitalize.pipe.ts":
/*!*****************************************************!*\
  !*** ./src/app/pipes/capitalize/capitalize.pipe.ts ***!
  \*****************************************************/
/*! exports provided: CapitalizePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapitalizePipe", function() { return CapitalizePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CapitalizePipe = /** @class */ (function () {
    function CapitalizePipe() {
    }
    CapitalizePipe.prototype.transform = function (value, args) {
        return (!!value) ? "" + value.substring(0, 1).toUpperCase() + value.substr(1) : value;
    };
    CapitalizePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'capitalize'
        })
    ], CapitalizePipe);
    return CapitalizePipe;
}());



/***/ }),

/***/ "./src/app/pipes/order-by/order-by.pipe.ts":
/*!*************************************************!*\
  !*** ./src/app/pipes/order-by/order-by.pipe.ts ***!
  \*************************************************/
/*! exports provided: OrderByPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderByPipe", function() { return OrderByPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var OrderByPipe = /** @class */ (function () {
    function OrderByPipe() {
    }
    OrderByPipe.prototype.transform = function (value, param) {
        if (!value || !value.length) {
            return value;
        }
        return Object(lodash_es__WEBPACK_IMPORTED_MODULE_1__["orderBy"])(value, [function (val) {
                return (typeof val[param] === 'string')
                    ? val[param].toLowerCase()
                    : val[param];
            }], ['asc']);
    };
    OrderByPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'orderBy'
        })
    ], OrderByPipe);
    return OrderByPipe;
}());



/***/ }),

/***/ "./src/app/pipes/pipes.module.ts":
/*!***************************************!*\
  !*** ./src/app/pipes/pipes.module.ts ***!
  \***************************************/
/*! exports provided: PipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesModule", function() { return PipesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _capitalize_capitalize_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./capitalize/capitalize.pipe */ "./src/app/pipes/capitalize/capitalize.pipe.ts");
/* harmony import */ var _order_by_order_by_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order-by/order-by.pipe */ "./src/app/pipes/order-by/order-by.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [
                _capitalize_capitalize_pipe__WEBPACK_IMPORTED_MODULE_2__["CapitalizePipe"],
                _order_by_order_by_pipe__WEBPACK_IMPORTED_MODULE_3__["OrderByPipe"]
            ],
            exports: [
                _capitalize_capitalize_pipe__WEBPACK_IMPORTED_MODULE_2__["CapitalizePipe"],
                _order_by_order_by_pipe__WEBPACK_IMPORTED_MODULE_3__["OrderByPipe"],
            ],
        })
    ], PipesModule);
    return PipesModule;
}());



/***/ }),

/***/ "./src/app/services/authenticate/authenticate.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/services/authenticate/authenticate.service.ts ***!
  \***************************************************************/
/*! exports provided: AuthenticateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticateService", function() { return AuthenticateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _http_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http/http.service */ "./src/app/services/http/http.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var src_app_store_actions_auth_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/store/actions/auth.actions */ "./src/app/store/actions/auth.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthenticateService = /** @class */ (function () {
    function AuthenticateService(httpService, store) {
        this.httpService = httpService;
        this.store = store;
        this.isUserAuthenticate = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])('acessTkn'));
    }
    AuthenticateService.prototype.githubAuthenticate = function (code) {
        var _this = this;
        return this.httpService.post('/login', {
            client_id: 'c63b5ef5b81e7610914a',
            client_secret: '32f6b8910137569d316eae627e3947b1aa37d77b',
            code: code,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            console.log(response);
            if (response.error) {
                _this.commitAuthState('');
            }
            else {
                _this.commitAuthState(response.access_token);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_this.isUserLoggedIn);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            _this.commitAuthState('');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(error);
        }));
    };
    AuthenticateService.prototype.commitAuthState = function (acessToken) {
        if (!!acessToken) {
            this.store.dispatch(new src_app_store_actions_auth_actions__WEBPACK_IMPORTED_MODULE_5__["SuccessAuth"](acessToken));
        }
        else {
            this.store.dispatch(new src_app_store_actions_auth_actions__WEBPACK_IMPORTED_MODULE_5__["FailureAuth"]());
        }
    };
    AuthenticateService.prototype.logoff = function () {
        this.store.dispatch(new src_app_store_actions_auth_actions__WEBPACK_IMPORTED_MODULE_5__["LogoutAuth"]());
        return this.isUserAuthenticate;
    };
    AuthenticateService.prototype.isUserLoggedIn = function () {
        return this.isUserAuthenticate;
    };
    AuthenticateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_http_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]])
    ], AuthenticateService);
    return AuthenticateService;
}());



/***/ }),

/***/ "./src/app/services/github/github.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/github/github.service.ts ***!
  \***************************************************/
/*! exports provided: GithubService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GithubService", function() { return GithubService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _http_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http/http.service */ "./src/app/services/http/http.service.ts");
/* harmony import */ var src_app_model_repo_info_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/model/repo-info.model */ "./src/app/model/repo-info.model.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _authenticate_authenticate_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../authenticate/authenticate.service */ "./src/app/services/authenticate/authenticate.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GithubService = /** @class */ (function () {
    function GithubService(httpService, authService) {
        this.httpService = httpService;
        this.authService = authService;
    }
    GithubService.prototype.getRepoInformation = function () {
        return this.httpService.get('/user/repos')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            return response.map(function (res) {
                return new src_app_model_repo_info_model__WEBPACK_IMPORTED_MODULE_3__["RepoInfoModel"](res);
            });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(error);
        }));
    };
    GithubService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_http_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _authenticate_authenticate_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticateService"]])
    ], GithubService);
    return GithubService;
}());



/***/ }),

/***/ "./src/app/services/http/http.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/http/http.service.ts ***!
  \***********************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HttpService = /** @class */ (function () {
    function HttpService(http, store) {
        this.http = http;
        this.store = store;
        this.timeoutTime = 30 * 1000; // 30s
        this.locationUrl = "https://" + window.location.hostname + ":8080/api";
        this.acessToken = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])('acessTkn'));
    }
    HttpService.prototype.get = function (url) {
        // Subject to easy control the response
        var httpResponse = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        var timeout = setTimeout(function () {
            httpResponse.error({ message: 'Não foi possível conectar. Por favor verifique sua conexão' });
        }, this.timeoutTime);
        this.http.get("" + this.locationUrl + url, { headers: this.getHeaders() })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            httpResponse.error(error);
            clearTimeout(timeout);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
        }))
            .subscribe(function (response) {
            clearTimeout(timeout);
            httpResponse.next(response);
        });
        return httpResponse;
    };
    HttpService.prototype.post = function (url, body) {
        // Subject to easy control the response
        var httpResponse = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        var timeout = setTimeout(function () {
            httpResponse.error({ message: 'Não foi possível conectar. Por favor verifique sua conexão' });
        }, this.timeoutTime);
        this.http.post("" + this.locationUrl + url, body, { headers: this.getHeaders() })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            httpResponse.error(error);
            clearTimeout(timeout);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
        }))
            .subscribe(function (response) {
            clearTimeout(timeout);
            httpResponse.next(response);
        });
        return httpResponse;
    };
    HttpService.prototype.getHeaders = function () {
        var headers;
        this.acessToken
            .subscribe(function (acessTokenValue) {
            if (acessTokenValue) {
                headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Accept': 'application/json',
                    'Content-type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Authorization': "token " + acessTokenValue
                });
            }
            else {
                headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Accept': 'application/json',
                    'Content-type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                });
            }
        });
        return headers;
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/services/services.module.ts":
/*!*********************************************!*\
  !*** ./src/app/services/services.module.ts ***!
  \*********************************************/
/*! exports provided: ServicesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesModule", function() { return ServicesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _authenticate_authenticate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authenticate/authenticate.service */ "./src/app/services/authenticate/authenticate.service.ts");
/* harmony import */ var _github_github_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./github/github.service */ "./src/app/services/github/github.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/reducers/auth.reducer */ "./src/app/store/reducers/auth.reducer.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ServicesModule = /** @class */ (function () {
    function ServicesModule() {
    }
    ServicesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forRoot({ acessTkn: _store_reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_5__["authReducer"] })
            ],
            providers: [
                _authenticate_authenticate_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticateService"],
                _github_github_service__WEBPACK_IMPORTED_MODULE_3__["GithubService"],
            ],
        })
    ], ServicesModule);
    return ServicesModule;
}());



/***/ }),

/***/ "./src/app/store/actions/auth.actions.ts":
/*!***********************************************!*\
  !*** ./src/app/store/actions/auth.actions.ts ***!
  \***********************************************/
/*! exports provided: ActionTypes, SuccessAuth, FailureAuth, LogoutAuth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionTypes", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessAuth", function() { return SuccessAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FailureAuth", function() { return FailureAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutAuth", function() { return LogoutAuth; });
var ActionTypes;
(function (ActionTypes) {
    ActionTypes["Success"] = "[Auth API] Login Success";
    ActionTypes["Failure"] = "[Auth API] Login Fail";
    ActionTypes["Logout"] = "[Auth API] Logout";
})(ActionTypes || (ActionTypes = {}));
var SuccessAuth = /** @class */ (function () {
    function SuccessAuth(token) {
        this.token = token;
        this.type = ActionTypes.Success;
    }
    return SuccessAuth;
}());

var FailureAuth = /** @class */ (function () {
    function FailureAuth() {
        this.type = ActionTypes.Failure;
    }
    return FailureAuth;
}());

var LogoutAuth = /** @class */ (function () {
    function LogoutAuth() {
        this.type = ActionTypes.Logout;
    }
    return LogoutAuth;
}());



/***/ }),

/***/ "./src/app/store/reducers/auth.reducer.ts":
/*!************************************************!*\
  !*** ./src/app/store/reducers/auth.reducer.ts ***!
  \************************************************/
/*! exports provided: initialState, authReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authReducer", function() { return authReducer; });
/* harmony import */ var _actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/auth.actions */ "./src/app/store/actions/auth.actions.ts");

var initialState = '';
function authReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].Success:
            state = action.token;
            window.sessionStorage.setItem('pgAcessToken', state);
            return state;
        case _actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].Logout:
        case _actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].Failure:
            state = '';
            window.sessionStorage.setItem('pgAcessToken', state);
            return state;
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/views/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/views/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-background bg-primary\" [style.minHeight]=\"windowMinHeight\">\n  <div class=\"centered-container\">\n      <div class=\"relative\">\n          <div class=\"logo\">\n              <span class=\"icon icon-logo\"></span>\n          </div>\n      </div>\n      <div class=\"centered-container-body\">\n        <div class=\"text\">\n            Logue-se para exibir seus repositórios\n        </div>\n          <a  href=\"https://github.com/login/oauth/authorize?scope=user:email&client_id=c63b5ef5b81e7610914a\"\n              class=\"btn btn-github bg-black\">\n              Logar-se com o \n              <span class=\"icon icon-github\"></span>\n        </a>\n          <!--<button class=\"btn btn-github bg-black\" (click)=\"login()\">Login</button>-->\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/views/login/login.component.scss":
/*!**************************************************!*\
  !*** ./src/app/views/login/login.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".centered-container {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  height: 129px;\n  width: 129px;\n  padding: 2px;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  border-radius: 50%;\n  background-color: #fff;\n  box-shadow: 0 0 10px 1px rgba(38, 39, 48, 0.4);\n  transition: width 0.7s cubic-bezier(0.4, 0.42, 0.56, 1.2), height 0.7s cubic-bezier(0.4, 0.42, 0.56, 1.2), border-radius 0.7s cubic-bezier(0.4, 0.42, 0.56, 1.2), padding 0.7s cubic-bezier(0.4, 0.42, 0.56, 1.2); }\n  .centered-container .logo {\n    height: 125px;\n    width: 125px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    border: 1px solid #1b84aa;\n    background-color: #fff;\n    border-radius: 50%;\n    position: absolute;\n    left: 50%;\n    -webkit-transform: translate3d(-50%, 0, 0);\n            transform: translate3d(-50%, 0, 0);\n    transition: -webkit-transform 1.3s cubic-bezier(0, 0.47, 0.6, 1) 0.5s;\n    transition: transform 1.3s cubic-bezier(0, 0.47, 0.6, 1) 0.5s;\n    transition: transform 1.3s cubic-bezier(0, 0.47, 0.6, 1) 0.5s, -webkit-transform 1.3s cubic-bezier(0, 0.47, 0.6, 1) 0.5s;\n    box-shadow: 0 0 3px 1px rgba(38, 39, 48, 0.2); }\n  .centered-container .logo .icon-logo {\n      width: 100%;\n      text-align: center;\n      font-size: 60px;\n      margin-top: 4px; }\n  .centered-container .centered-container-body {\n    margin-top: 80px;\n    opacity: 0;\n    transition: all 0.5s cubic-bezier(0, 0.47, 0.6, 1) 1.1s;\n    color: #3b3b3b;\n    text-align: center;\n    font-size: 20px; }\n  .centered-container .centered-container-body .btn-github {\n      margin-top: 30px;\n      width: 100%; }\n  .centered-container .centered-container-body .btn-github span {\n        margin-left: 4px; }\n  .centered-container.active {\n    width: 300px;\n    height: 300px;\n    border-radius: 22px;\n    padding: 25px; }\n  .centered-container.active .centered-container-body {\n      opacity: 1; }\n  .centered-container.active .logo {\n      border-color: #fff;\n      -webkit-transform: translate3d(-50%, -55%, 0);\n              transform: translate3d(-50%, -55%, 0); }\n"

/***/ }),

/***/ "./src/app/views/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/views/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_authenticate_authenticate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/authenticate/authenticate.service */ "./src/app/services/authenticate/authenticate.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, routeParams) {
        this.authService = authService;
        this.router = router;
        this.routeParams = routeParams;
        this.windowMinHeight = window.innerHeight + "px";
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            document.querySelector('.centered-container').classList.add('active');
            _this.validateLogin();
        }, 500);
    };
    LoginComponent.prototype.validateLogin = function () {
        if (!!this.routeParams.snapshot.queryParams.code) {
            this.login(this.routeParams.snapshot.queryParams.code);
        }
    };
    LoginComponent.prototype.login = function (code) {
        var _this = this;
        this.authService.githubAuthenticate(code)
            .subscribe(function (response) {
            if (!response) {
                _this.router.navigate(['/']);
            }
            else {
                _this.router.navigate(['./repositorios']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/views/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/views/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_authenticate_authenticate_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/views/repo-list/repo-list-header/repo-list-header.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/views/repo-list/repo-list-header/repo-list-header.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg bg-black\">\n  <a class=\"navbar-brand\">LSSouto</a>\n  <button class=\"navbar-toggler\"\n          type=\"button\"\n          data-toggle=\"collapse\"\n          aria-label=\"Toggle navigation\"\n          (click)=\"isCollapsed = !isCollapsed\">\n    <span class=\"caret\"></span>\n    <span class=\"caret\"></span>\n    <span class=\"caret\"></span>\n  </button>\n\n  <div class=\"navbar-collapse\" [ngClass]=\"{'collapse': isCollapsed}\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item dropdown\" dropdown>\n        <a class=\"nav-link dropdown-toggle\" \n            data-toggle=\"dropdown\" \n            aria-expanded=\"false\"\n            dropdownToggle>\n          Visualizar como\n        </a>\n        <div class=\"dropdown-menu\" *dropdownMenu>\n          <a class=\"dropdown-item\" (click)=\"toggleListClass('__list')\">\n            <span class=\"icon icon-menu\"></span> Lista\n          </a>\n          <a class=\"dropdown-item\" (click)=\"toggleListClass('__card')\">\n            <span class=\"icon icon-checkbox-unchecked\"></span> Cards\n          </a>\n        </div>\n      </li>\n      <li class=\"nav-item dropdown\" dropdown>\n        <a class=\"nav-link dropdown-toggle\" \n            data-toggle=\"dropdown\" \n            aria-expanded=\"false\"\n            dropdownToggle>\n          Ordernar Por\n        </a>\n        <div class=\"dropdown-menu\" *dropdownMenu>\n          <a class=\"dropdown-item\" (click)=\"toggleOrder('name')\">Nome</a>\n          <a class=\"dropdown-item\" (click)=\"toggleOrder('qtdStars')\">Stars</a>\n          <a class=\"dropdown-item\" (click)=\"toggleOrder('qtdForks')\">Forks</a>\n        </div>\n      </li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/repo-list/repo-list-header/repo-list-header.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/views/repo-list/repo-list-header/repo-list-header.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar .dropdown-menu > a:active, .navbar .dropdown-menu > a:focus {\n  background-color: #ebebeb;\n  color: #262730; }\n\n.navbar {\n  margin-bottom: 20px; }\n\n.navbar-toggler {\n    border-color: #fff;\n    padding: 0.25rem 0.5rem; }\n\n.navbar-toggler .caret {\n      border-radius: 2px;\n      height: 2px;\n      width: 25px;\n      background-color: #fff;\n      margin: 5px 0;\n      display: block; }\n\n@media (max-width: 768px) {\n  .navbar .dropdown-menu {\n    background-color: #31333e;\n    padding: 0;\n    margin-left: -1rem;\n    margin-right: -1rem; }\n    .navbar .dropdown-menu .dropdown-item {\n      color: #fff;\n      transition: all 0.12s cubic-bezier(0.4, 0, 0.2, 1) 0s; }\n      .navbar .dropdown-menu .dropdown-item:not(:last-child) {\n        border-bottom: 1px solid #fff; }\n      .navbar .dropdown-menu .dropdown-item:hover {\n        color: #262730; } }\n"

/***/ }),

/***/ "./src/app/views/repo-list/repo-list-header/repo-list-header.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/views/repo-list/repo-list-header/repo-list-header.component.ts ***!
  \********************************************************************************/
/*! exports provided: RepoListHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepoListHeaderComponent", function() { return RepoListHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RepoListHeaderComponent = /** @class */ (function () {
    function RepoListHeaderComponent() {
        this.filterOptions = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.filterConfig = {
            classStyle: '__card',
            order: 'name'
        };
        this.isCollapsed = true;
        this.emitEvent();
    }
    RepoListHeaderComponent.prototype.ngOnInit = function () {
    };
    RepoListHeaderComponent.prototype.toggleListClass = function (type) {
        this.filterConfig.classStyle = type;
        this.emitEvent();
    };
    RepoListHeaderComponent.prototype.toggleOrder = function (type) {
        this.filterConfig.order = type;
        this.emitEvent();
    };
    RepoListHeaderComponent.prototype.emitEvent = function () {
        this.filterOptions.emit(this.filterConfig);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], RepoListHeaderComponent.prototype, "filterOptions", void 0);
    RepoListHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-repo-list-header',
            template: __webpack_require__(/*! ./repo-list-header.component.html */ "./src/app/views/repo-list/repo-list-header/repo-list-header.component.html"),
            styles: [__webpack_require__(/*! ./repo-list-header.component.scss */ "./src/app/views/repo-list/repo-list-header/repo-list-header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RepoListHeaderComponent);
    return RepoListHeaderComponent;
}());



/***/ }),

/***/ "./src/app/views/repo-list/repo-list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/views/repo-list/repo-list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-repo-list-header (filterOptions)=\"filterOptionsHandler($event)\"></app-repo-list-header>\n<div class=\"container\">\n\n  <ul class=\"repo-info-list\" [ngClass]=\"activeListClassStyle\">\n    <li *ngFor=\"let repoInfo of reposInformationArray | orderBy:orderParams\">\n      <div class=\"card-name\">\n        <span class=\"card-identifier\">Nome</span>\n        {{ repoInfo.name | capitalize }}\n      </div>\n      <div class=\"card-count-information\">\n        <div class=\"card-stars\">\n          <span class=\"card-information-description\">\n            <span class=\"icon icon-star-solid\"></span>\n          </span>\n          {{ repoInfo.qtdStars }}\n        </div>\n        <div class=\"card-forks\">\n            <span class=\"card-information-description\">\n                <span class=\"icon icon-fork\"></span>\n            </span>\n            {{ repoInfo.qtdForks }}\n        </div>\n      </div>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/views/repo-list/repo-list.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/views/repo-list/repo-list.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".repo-info-list.__card {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  justify-content: space-between; }\n  .repo-info-list.__card > * {\n    flex: 0 1 25%; }\n  @media (min-width: 768px) {\n    .repo-info-list.__card {\n      flex-direction: row; } }\n  .repo-info-list.__card > li {\n    border-radius: 6px;\n    box-shadow: 0 2px 3px 1px rgba(38, 39, 48, 0.1);\n    padding: 25px 15px 10px 15px;\n    position: relative; }\n  .repo-info-list.__card .card-name {\n    display: block;\n    font-size: 19px; }\n  .repo-info-list.__card .card-count-information {\n    position: absolute;\n    right: 10px;\n    top: 3px; }\n  .repo-info-list.__card .card-count-information > * {\n      display: inline-block;\n      font-size: 12px; }\n  .repo-info-list.__card .card-identifier {\n    display: none; }\n  .repo-info-list.__card .card-information-description {\n    display: inline-block;\n    margin-right: -2px;\n    margin-left: 8px; }\n  .repo-info-list > li {\n  margin: 10px 25px;\n  display: inline-block; }\n  .repo-info-list.__list > li {\n  display: block;\n  border-bottom: 1px solid #ebebeb;\n  padding: 20px 0;\n  position: relative;\n  margin: 0;\n  display: flex; }\n  @media (max-width: 768px) {\n    .repo-info-list.__list > li {\n      flex-wrap: wrap; }\n      .repo-info-list.__list > li > * {\n        padding: 0 15px; }\n      .repo-info-list.__list > li .card-count-information {\n        margin-top: 5px; }\n        .repo-info-list.__list > li .card-count-information > * {\n          display: inline-block;\n          margin-right: 8px; }\n      .repo-info-list.__list > li .card-count-information, .repo-info-list.__list > li .card-name {\n        flex: 1 1 100%; } }\n  .repo-info-list.__list .card-name {\n  display: block;\n  font-size: 19px;\n  flex: 1 1 33%; }\n  .repo-info-list.__list .card-count-information {\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 66%; }\n  .repo-info-list.__list .card-count-information > * {\n    flex: 1 1 50%; }\n  @media (min-width: 768px) {\n    .repo-info-list.__list .card-count-information {\n      flex-direction: row; } }\n  .repo-info-list.__list .card-identifier {\n  display: block;\n  margin-right: 6px;\n  margin-left: -6px;\n  color: #1b84aa; }\n"

/***/ }),

/***/ "./src/app/views/repo-list/repo-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/views/repo-list/repo-list.component.ts ***!
  \********************************************************/
/*! exports provided: RepoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepoListComponent", function() { return RepoListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_github_github_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/github/github.service */ "./src/app/services/github/github.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RepoListComponent = /** @class */ (function () {
    function RepoListComponent(githubService) {
        this.githubService = githubService;
        this.reposInformationArray = [];
        this.activeListClassStyle = '__card';
        this.orderParams = 'name';
    }
    RepoListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.githubService.getRepoInformation()
            .subscribe(function (informationArray) {
            _this.reposInformationArray = informationArray;
        });
    };
    RepoListComponent.prototype.filterOptionsHandler = function (val) {
        this.activeListClassStyle = val.classStyle;
        this.orderParams = val.order;
    };
    RepoListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-repo-list',
            template: __webpack_require__(/*! ./repo-list.component.html */ "./src/app/views/repo-list/repo-list.component.html"),
            styles: [__webpack_require__(/*! ./repo-list.component.scss */ "./src/app/views/repo-list/repo-list.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_github_github_service__WEBPACK_IMPORTED_MODULE_1__["GithubService"]])
    ], RepoListComponent);
    return RepoListComponent;
}());



/***/ }),

/***/ "./src/app/views/views.module.ts":
/*!***************************************!*\
  !*** ./src/app/views/views.module.ts ***!
  \***************************************/
/*! exports provided: ViewsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewsModule", function() { return ViewsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ "./src/app/views/login/login.component.ts");
/* harmony import */ var _repo_list_repo_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./repo-list/repo-list.component */ "./src/app/views/repo-list/repo-list.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _repo_list_repo_list_header_repo_list_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./repo-list/repo-list-header/repo-list-header.component */ "./src/app/views/repo-list/repo-list-header/repo-list-header.component.ts");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ViewsModule = /** @class */ (function () {
    function ViewsModule() {
    }
    ViewsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"],
                _repo_list_repo_list_component__WEBPACK_IMPORTED_MODULE_2__["RepoListComponent"],
                _repo_list_repo_list_header_repo_list_header_component__WEBPACK_IMPORTED_MODULE_6__["RepoListHeaderComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipesModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_7__["BsDropdownModule"].forRoot(),
            ],
            exports: [
                _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"],
                _repo_list_repo_list_header_repo_list_header_component__WEBPACK_IMPORTED_MODULE_6__["RepoListHeaderComponent"],
            ],
        })
    ], ViewsModule);
    return ViewsModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/lucasdasilvasouto/Documents/Fatec/pan-github/front/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map