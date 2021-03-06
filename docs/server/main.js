(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("K011");


/***/ }),

/***/ "0S4P":
/***/ (function(module, exports) {

module.exports = require("@angular/common");

/***/ }),

/***/ "47LT":
/***/ (function(module, exports) {

module.exports = require("@angular/platform-server");

/***/ }),

/***/ "9gj6":
/***/ (function(module, exports) {

module.exports = require("@angular/animations");

/***/ }),

/***/ "HPJh":
/***/ (function(module, exports) {

module.exports = require("@angular/http");

/***/ }),

/***/ "JAnZ":
/***/ (function(module, exports) {

module.exports = require("@angular/router");

/***/ }),

/***/ "K011":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "@angular/core"
var core_ = __webpack_require__("vOrQ");

// EXTERNAL MODULE: external "@angular/router"
var router_ = __webpack_require__("JAnZ");

// CONCATENATED MODULE: ./src/app/app-shell/app-shell.component.ts

var AppShellComponent = /** @class */ (function () {
    function AppShellComponent() {
    }
    AppShellComponent.prototype.ngOnInit = function () {
    };
    return AppShellComponent;
}());


// CONCATENATED MODULE: ./src/app/app.server.module.ts


var routes = [{ path: 'shell', component: AppShellComponent }];
var AppServerModule = /** @class */ (function () {
    function AppServerModule() {
    }
    return AppServerModule;
}());


// CONCATENATED MODULE: ./src/app/app.component.ts
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ng-pwa-sample';
    }
    return AppComponent;
}());


// CONCATENATED MODULE: ./node_modules/@angular/router/router.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 


var RouterModuleNgFactory = core_["ɵcmf"](router_["RouterModule"], [], function (_l) { return core_["ɵmod"]([core_["ɵmpd"](512, core_["ComponentFactoryResolver"], core_["ɵCodegenComponentFactoryResolver"], [[8, [ɵEmptyOutletComponentNgFactory]], [3, core_["ComponentFactoryResolver"]], core_["NgModuleRef"]]), core_["ɵmpd"](1073742336, router_["RouterModule"], router_["RouterModule"], [[2, router_["ɵangular_packages_router_router_a"]], [2, router_["Router"]]])]); });

var styles_ɵEmptyOutletComponent = [];
var RenderType_ɵEmptyOutletComponent = core_["ɵcrt"]({ encapsulation: 2, styles: styles_ɵEmptyOutletComponent, data: {} });

function View_ɵEmptyOutletComponent_0(_l) { return core_["ɵvid"](0, [(_l()(), core_["ɵeld"](0, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), core_["ɵdid"](1, 212992, null, 0, router_["RouterOutlet"], [router_["ChildrenOutletContexts"], core_["ViewContainerRef"], core_["ComponentFactoryResolver"], [8, null], core_["ChangeDetectorRef"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_ɵEmptyOutletComponent_Host_0(_l) { return core_["ɵvid"](0, [(_l()(), core_["ɵeld"](0, 0, null, null, 1, "ng-component", [], null, null, null, View_ɵEmptyOutletComponent_0, RenderType_ɵEmptyOutletComponent)), core_["ɵdid"](1, 49152, null, 0, router_["ɵEmptyOutletComponent"], [], null, null)], null, null); }
var ɵEmptyOutletComponentNgFactory = core_["ɵccf"]("ng-component", router_["ɵEmptyOutletComponent"], View_ɵEmptyOutletComponent_Host_0, {}, {}, []);


// CONCATENATED MODULE: ./src/app/app.component.scss.shim.ngstyle.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [""];


// CONCATENATED MODULE: ./src/app/app.component.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




var styles_AppComponent = [styles];
var RenderType_AppComponent = core_["ɵcrt"]({ encapsulation: 0, styles: styles_AppComponent, data: {} });

function View_AppComponent_0(_l) { return core_["ɵvid"](0, [(_l()(), core_["ɵeld"](0, 0, null, null, 3, "div", [["style", "text-align:center"]], null, null, null, null, null)), (_l()(), core_["ɵeld"](1, 0, null, null, 1, "h1", [], null, null, null, null, null)), (_l()(), core_["ɵted"](2, null, [" Welcome to ", "! "])), (_l()(), core_["ɵeld"](3, 0, null, null, 0, "img", [["alt", "lifewood Logo"], ["src", "assets/icons/icon_256.png"], ["width", "300"]], null, null, null, null, null)), (_l()(), core_["ɵeld"](4, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), core_["ɵted"](-1, null, ["lifewood sample "])), (_l()(), core_["ɵeld"](6, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), core_["ɵdid"](7, 212992, null, 0, router_["RouterOutlet"], [router_["ChildrenOutletContexts"], core_["ViewContainerRef"], core_["ComponentFactoryResolver"], [8, null], core_["ChangeDetectorRef"]], null, null)], function (_ck, _v) { _ck(_v, 7, 0); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.title; _ck(_v, 2, 0, currVal_0); }); }
function View_AppComponent_Host_0(_l) { return core_["ɵvid"](0, [(_l()(), core_["ɵeld"](0, 0, null, null, 1, "app-root", [], null, null, null, View_AppComponent_0, RenderType_AppComponent)), core_["ɵdid"](1, 49152, null, 0, AppComponent, [], null, null)], null, null); }
var AppComponentNgFactory = core_["ɵccf"]("app-root", AppComponent, View_AppComponent_Host_0, {}, {}, []);


// CONCATENATED MODULE: ./src/app/app-shell/app-shell.component.css.shim.ngstyle.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var app_shell_component_css_shim_ngstyle_styles = [""];


// CONCATENATED MODULE: ./src/app/app-shell/app-shell.component.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



var styles_AppShellComponent = [app_shell_component_css_shim_ngstyle_styles];
var RenderType_AppShellComponent = core_["ɵcrt"]({ encapsulation: 0, styles: styles_AppShellComponent, data: {} });

function View_AppShellComponent_0(_l) { return core_["ɵvid"](0, [(_l()(), core_["ɵeld"](0, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), core_["ɵted"](-1, null, [" app-shell works!\n"]))], null, null); }
function View_AppShellComponent_Host_0(_l) { return core_["ɵvid"](0, [(_l()(), core_["ɵeld"](0, 0, null, null, 1, "app-app-shell", [], null, null, null, View_AppShellComponent_0, RenderType_AppShellComponent)), core_["ɵdid"](1, 114688, null, 0, AppShellComponent, [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var AppShellComponentNgFactory = core_["ɵccf"]("app-app-shell", AppShellComponent, View_AppShellComponent_Host_0, {}, {}, []);


// EXTERNAL MODULE: external "@angular/common"
var common_ = __webpack_require__("0S4P");

// EXTERNAL MODULE: external "@angular/platform-browser"
var platform_browser_ = __webpack_require__("vG+p");

// EXTERNAL MODULE: external "@angular/platform-server"
var platform_server_ = __webpack_require__("47LT");

// EXTERNAL MODULE: external "@angular/animations/browser"
var browser_ = __webpack_require__("v5i9");

// EXTERNAL MODULE: external "@angular/platform-browser/animations"
var animations_ = __webpack_require__("Xwin");

// EXTERNAL MODULE: external "@angular/service-worker"
var service_worker_ = __webpack_require__("W1sg");

// EXTERNAL MODULE: external "@angular/http"
var http_ = __webpack_require__("HPJh");

// EXTERNAL MODULE: external "@angular/common/http"
var common_http_ = __webpack_require__("jyyq");

// EXTERNAL MODULE: external "@angular/animations"
var external_angular_animations_ = __webpack_require__("9gj6");

// CONCATENATED MODULE: ./src/app/app-routing.module.ts

var app_routing_module_routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());


// CONCATENATED MODULE: ./src/app/app.module.ts
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    return AppModule;
}());


// CONCATENATED MODULE: ./src/app/app.server.module.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



















var AppServerModuleNgFactory = core_["ɵcmf"](AppServerModule, [AppComponent], function (_l) { return core_["ɵmod"]([core_["ɵmpd"](512, core_["ComponentFactoryResolver"], core_["ɵCodegenComponentFactoryResolver"], [[8, [ɵEmptyOutletComponentNgFactory, AppComponentNgFactory, AppShellComponentNgFactory]], [3, core_["ComponentFactoryResolver"]], core_["NgModuleRef"]]), core_["ɵmpd"](5120, core_["LOCALE_ID"], core_["ɵangular_packages_core_core_s"], [[3, core_["LOCALE_ID"]]]), core_["ɵmpd"](4608, common_["NgLocalization"], common_["NgLocaleLocalization"], [core_["LOCALE_ID"], [2, common_["ɵangular_packages_common_common_a"]]]), core_["ɵmpd"](5120, core_["IterableDiffers"], core_["ɵangular_packages_core_core_q"], []), core_["ɵmpd"](5120, core_["KeyValueDiffers"], core_["ɵangular_packages_core_core_r"], []), core_["ɵmpd"](4608, platform_browser_["DomSanitizer"], platform_browser_["ɵDomSanitizerImpl"], [common_["DOCUMENT"]]), core_["ɵmpd"](6144, core_["Sanitizer"], null, [platform_browser_["DomSanitizer"]]), core_["ɵmpd"](4608, platform_browser_["HAMMER_GESTURE_CONFIG"], platform_browser_["HammerGestureConfig"], []), core_["ɵmpd"](5120, platform_browser_["EVENT_MANAGER_PLUGINS"], function (p0_0, p0_1, p0_2, p1_0, p2_0, p2_1, p2_2, p2_3, p3_0) { return [new platform_browser_["ɵDomEventsPlugin"](p0_0, p0_1, p0_2), new platform_browser_["ɵKeyEventsPlugin"](p1_0), new platform_browser_["ɵHammerGesturesPlugin"](p2_0, p2_1, p2_2, p2_3), new platform_server_["ɵangular_packages_platform_server_platform_server_d"](p3_0)]; }, [common_["DOCUMENT"], core_["NgZone"], core_["PLATFORM_ID"], common_["DOCUMENT"], common_["DOCUMENT"], platform_browser_["HAMMER_GESTURE_CONFIG"], core_["ɵConsole"], [2, platform_browser_["HAMMER_LOADER"]], platform_browser_["DOCUMENT"]]), core_["ɵmpd"](4608, platform_browser_["EventManager"], platform_browser_["EventManager"], [platform_browser_["EVENT_MANAGER_PLUGINS"], core_["NgZone"]]), core_["ɵmpd"](135680, platform_browser_["ɵDomSharedStylesHost"], platform_browser_["ɵDomSharedStylesHost"], [common_["DOCUMENT"]]), core_["ɵmpd"](4608, platform_browser_["ɵDomRendererFactory2"], platform_browser_["ɵDomRendererFactory2"], [platform_browser_["EventManager"], platform_browser_["ɵDomSharedStylesHost"], core_["APP_ID"]]), core_["ɵmpd"](4608, platform_server_["ɵangular_packages_platform_server_platform_server_c"], platform_server_["ɵangular_packages_platform_server_platform_server_c"], [platform_browser_["DOCUMENT"], [2, platform_browser_["ɵTRANSITION_ID"]]]), core_["ɵmpd"](6144, platform_browser_["ɵSharedStylesHost"], null, [platform_server_["ɵangular_packages_platform_server_platform_server_c"]]), core_["ɵmpd"](4608, platform_server_["ɵServerRendererFactory2"], platform_server_["ɵServerRendererFactory2"], [platform_browser_["EventManager"], core_["NgZone"], platform_browser_["DOCUMENT"], platform_browser_["ɵSharedStylesHost"]]), core_["ɵmpd"](4608, browser_["AnimationDriver"], browser_["ɵNoopAnimationDriver"], []), core_["ɵmpd"](5120, browser_["ɵAnimationStyleNormalizer"], animations_["ɵangular_packages_platform_browser_animations_animations_b"], []), core_["ɵmpd"](4608, browser_["ɵAnimationEngine"], animations_["ɵInjectableAnimationEngine"], [common_["DOCUMENT"], browser_["AnimationDriver"], browser_["ɵAnimationStyleNormalizer"]]), core_["ɵmpd"](5120, core_["RendererFactory2"], platform_server_["ɵangular_packages_platform_server_platform_server_a"], [platform_server_["ɵServerRendererFactory2"], browser_["ɵAnimationEngine"], core_["NgZone"]]), core_["ɵmpd"](4352, core_["Testability"], null, []), core_["ɵmpd"](5120, router_["ActivatedRoute"], router_["ɵangular_packages_router_router_g"], [router_["Router"]]), core_["ɵmpd"](4608, router_["NoPreloading"], router_["NoPreloading"], []), core_["ɵmpd"](6144, router_["PreloadingStrategy"], null, [router_["NoPreloading"]]), core_["ɵmpd"](135680, router_["RouterPreloader"], router_["RouterPreloader"], [router_["Router"], core_["NgModuleFactoryLoader"], core_["Compiler"], core_["Injector"], router_["PreloadingStrategy"]]), core_["ɵmpd"](4608, router_["PreloadAllModules"], router_["PreloadAllModules"], []), core_["ɵmpd"](4608, common_["ViewportScroller"], common_["ɵNullViewportScroller"], []), core_["ɵmpd"](5120, router_["ɵangular_packages_router_router_n"], router_["ɵangular_packages_router_router_c"], [router_["Router"], common_["ViewportScroller"], router_["ROUTER_CONFIGURATION"]]), core_["ɵmpd"](5120, router_["ROUTER_INITIALIZER"], router_["ɵangular_packages_router_router_j"], [router_["ɵangular_packages_router_router_h"]]), core_["ɵmpd"](5120, core_["APP_BOOTSTRAP_LISTENER"], function (p0_0, p1_0) { return [p0_0, p1_0]; }, [router_["ROUTER_INITIALIZER"], router_["ROUTER_INITIALIZER"]]), core_["ɵmpd"](5120, service_worker_["ɵangular_packages_service_worker_service_worker_a"], service_worker_["ɵangular_packages_service_worker_service_worker_e"], [service_worker_["ɵangular_packages_service_worker_service_worker_b"], core_["PLATFORM_ID"]]), core_["ɵmpd"](4608, service_worker_["SwPush"], service_worker_["SwPush"], [service_worker_["ɵangular_packages_service_worker_service_worker_a"]]), core_["ɵmpd"](4608, service_worker_["SwUpdate"], service_worker_["SwUpdate"], [service_worker_["ɵangular_packages_service_worker_service_worker_a"]]), core_["ɵmpd"](4608, http_["BrowserXhr"], platform_server_["ɵangular_packages_platform_server_platform_server_e"], []), core_["ɵmpd"](4608, http_["ResponseOptions"], http_["BaseResponseOptions"], []), core_["ɵmpd"](4608, http_["XSRFStrategy"], platform_server_["ɵangular_packages_platform_server_platform_server_f"], []), core_["ɵmpd"](4608, http_["XHRBackend"], http_["XHRBackend"], [http_["BrowserXhr"], http_["ResponseOptions"], http_["XSRFStrategy"]]), core_["ɵmpd"](4608, http_["RequestOptions"], http_["BaseRequestOptions"], []), core_["ɵmpd"](5120, http_["Http"], platform_server_["ɵangular_packages_platform_server_platform_server_g"], [http_["XHRBackend"], http_["RequestOptions"]]), core_["ɵmpd"](4608, common_http_["HttpXsrfTokenExtractor"], common_http_["ɵangular_packages_common_http_http_g"], [common_["DOCUMENT"], core_["PLATFORM_ID"], common_http_["ɵangular_packages_common_http_http_e"]]), core_["ɵmpd"](4608, common_http_["ɵangular_packages_common_http_http_h"], common_http_["ɵangular_packages_common_http_http_h"], [common_http_["HttpXsrfTokenExtractor"], common_http_["ɵangular_packages_common_http_http_f"]]), core_["ɵmpd"](5120, common_http_["HTTP_INTERCEPTORS"], function (p0_0) { return [p0_0]; }, [common_http_["ɵangular_packages_common_http_http_h"]]), core_["ɵmpd"](4608, common_http_["XhrFactory"], platform_server_["ɵangular_packages_platform_server_platform_server_e"], []), core_["ɵmpd"](4608, common_http_["HttpXhrBackend"], common_http_["HttpXhrBackend"], [common_http_["XhrFactory"]]), core_["ɵmpd"](6144, common_http_["HttpBackend"], null, [common_http_["HttpXhrBackend"]]), core_["ɵmpd"](5120, common_http_["HttpHandler"], platform_server_["ɵangular_packages_platform_server_platform_server_h"], [common_http_["HttpBackend"], core_["Injector"]]), core_["ɵmpd"](4608, common_http_["HttpClient"], common_http_["HttpClient"], [common_http_["HttpHandler"]]), core_["ɵmpd"](4608, common_http_["ɵangular_packages_common_http_http_d"], common_http_["ɵangular_packages_common_http_http_d"], []), core_["ɵmpd"](4608, external_angular_animations_["AnimationBuilder"], animations_["ɵBrowserAnimationBuilder"], [core_["RendererFactory2"], platform_browser_["DOCUMENT"]]), core_["ɵmpd"](1073742336, common_["CommonModule"], common_["CommonModule"], []), core_["ɵmpd"](1024, core_["ErrorHandler"], platform_browser_["ɵangular_packages_platform_browser_platform_browser_a"], []), core_["ɵmpd"](1024, core_["NgProbeToken"], function () { return [router_["ɵangular_packages_router_router_b"](), router_["ɵangular_packages_router_router_b"]()]; }, []), core_["ɵmpd"](512, router_["ɵangular_packages_router_router_h"], router_["ɵangular_packages_router_router_h"], [core_["Injector"]]), core_["ɵmpd"](256, core_["APP_ID"], "serverApp", []), core_["ɵmpd"](2048, platform_browser_["ɵTRANSITION_ID"], null, [core_["APP_ID"]]), core_["ɵmpd"](256, service_worker_["ɵangular_packages_service_worker_service_worker_c"], "ngsw-worker.js", []), core_["ɵmpd"](256, service_worker_["ɵangular_packages_service_worker_service_worker_b"], { enabled: true }, []), core_["ɵmpd"](1024, core_["APP_INITIALIZER"], function (p0_0, p1_0, p2_0, p2_1, p2_2, p3_0, p3_1, p3_2, p3_3, p4_0) { return [platform_browser_["ɵangular_packages_platform_browser_platform_browser_j"](p0_0), router_["ɵangular_packages_router_router_i"](p1_0), platform_browser_["ɵangular_packages_platform_browser_platform_browser_h"](p2_0, p2_1, p2_2), service_worker_["ɵangular_packages_service_worker_service_worker_d"](p3_0, p3_1, p3_2, p3_3), router_["ɵangular_packages_router_router_i"](p4_0)]; }, [[2, core_["NgProbeToken"]], router_["ɵangular_packages_router_router_h"], platform_browser_["ɵTRANSITION_ID"], common_["DOCUMENT"], core_["Injector"], core_["Injector"], service_worker_["ɵangular_packages_service_worker_service_worker_c"], service_worker_["ɵangular_packages_service_worker_service_worker_b"], core_["PLATFORM_ID"], router_["ɵangular_packages_router_router_h"]]), core_["ɵmpd"](512, core_["ApplicationInitStatus"], core_["ApplicationInitStatus"], [[2, core_["APP_INITIALIZER"]]]), core_["ɵmpd"](131584, core_["ApplicationRef"], core_["ApplicationRef"], [core_["NgZone"], core_["ɵConsole"], core_["Injector"], core_["ErrorHandler"], core_["ComponentFactoryResolver"], core_["ApplicationInitStatus"]]), core_["ɵmpd"](1073742336, core_["ApplicationModule"], core_["ApplicationModule"], [core_["ApplicationRef"]]), core_["ɵmpd"](1073742336, platform_browser_["BrowserModule"], platform_browser_["BrowserModule"], [[3, platform_browser_["BrowserModule"]]]), core_["ɵmpd"](1024, router_["ɵangular_packages_router_router_a"], router_["ɵangular_packages_router_router_e"], [[3, router_["Router"]]]), core_["ɵmpd"](512, router_["UrlSerializer"], router_["DefaultUrlSerializer"], []), core_["ɵmpd"](512, router_["ChildrenOutletContexts"], router_["ChildrenOutletContexts"], []), core_["ɵmpd"](256, router_["ROUTER_CONFIGURATION"], {}, []), core_["ɵmpd"](1024, common_["LocationStrategy"], router_["ɵangular_packages_router_router_d"], [common_["PlatformLocation"], [2, common_["APP_BASE_HREF"]], router_["ROUTER_CONFIGURATION"]]), core_["ɵmpd"](512, common_["Location"], common_["Location"], [common_["LocationStrategy"]]), core_["ɵmpd"](512, core_["Compiler"], core_["Compiler"], []), core_["ɵmpd"](512, core_["NgModuleFactoryLoader"], core_["SystemJsNgModuleLoader"], [core_["Compiler"], [2, core_["SystemJsNgModuleLoaderConfig"]]]), core_["ɵmpd"](1024, router_["ROUTES"], function () { return [[], [{ path: "shell", component: AppShellComponent }]]; }, []), core_["ɵmpd"](1024, router_["Router"], router_["ɵangular_packages_router_router_f"], [core_["ApplicationRef"], router_["UrlSerializer"], router_["ChildrenOutletContexts"], common_["Location"], core_["Injector"], core_["NgModuleFactoryLoader"], core_["Compiler"], router_["ROUTES"], router_["ROUTER_CONFIGURATION"], [2, router_["UrlHandlingStrategy"]], [2, router_["RouteReuseStrategy"]]]), core_["ɵmpd"](1073742336, router_["RouterModule"], router_["RouterModule"], [[2, router_["ɵangular_packages_router_router_a"]], [2, router_["Router"]]]), core_["ɵmpd"](1073742336, AppRoutingModule, AppRoutingModule, []), core_["ɵmpd"](1073742336, service_worker_["ServiceWorkerModule"], service_worker_["ServiceWorkerModule"], []), core_["ɵmpd"](1073742336, AppModule, AppModule, []), core_["ɵmpd"](1073742336, http_["HttpModule"], http_["HttpModule"], []), core_["ɵmpd"](1073742336, common_http_["HttpClientXsrfModule"], common_http_["HttpClientXsrfModule"], []), core_["ɵmpd"](1073742336, common_http_["HttpClientModule"], common_http_["HttpClientModule"], []), core_["ɵmpd"](1073742336, animations_["NoopAnimationsModule"], animations_["NoopAnimationsModule"], []), core_["ɵmpd"](1073742336, platform_server_["ServerModule"], platform_server_["ServerModule"], []), core_["ɵmpd"](1073742336, AppServerModule, AppServerModule, []), core_["ɵmpd"](256, core_["ɵAPP_ROOT"], true, []), core_["ɵmpd"](256, common_http_["ɵangular_packages_common_http_http_e"], "XSRF-TOKEN", []), core_["ɵmpd"](256, common_http_["ɵangular_packages_common_http_http_f"], "X-XSRF-TOKEN", []), core_["ɵmpd"](256, animations_["ANIMATION_MODULE_TYPE"], "NoopAnimations", [])]); });


// CONCATENATED MODULE: ./src/environments/environment.ts
var environment = {
    production: true
};

// CONCATENATED MODULE: ./src/main.server.ts
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAZY_MODULE_MAP", function() { return LAZY_MODULE_MAP; });
/* concated harmony reexport AppServerModuleNgFactory */__webpack_require__.d(__webpack_exports__, "AppServerModuleNgFactory", function() { return AppServerModuleNgFactory; });
/* concated harmony reexport AppServerModule */__webpack_require__.d(__webpack_exports__, "AppServerModule", function() { return AppServerModule; });



if (environment.production) {
    Object(core_["enableProdMode"])();
}

var LAZY_MODULE_MAP = {};


/***/ }),

/***/ "W1sg":
/***/ (function(module, exports) {

module.exports = require("@angular/service-worker");

/***/ }),

/***/ "Xwin":
/***/ (function(module, exports) {

module.exports = require("@angular/platform-browser/animations");

/***/ }),

/***/ "jyyq":
/***/ (function(module, exports) {

module.exports = require("@angular/common/http");

/***/ }),

/***/ "v5i9":
/***/ (function(module, exports) {

module.exports = require("@angular/animations/browser");

/***/ }),

/***/ "vG+p":
/***/ (function(module, exports) {

module.exports = require("@angular/platform-browser");

/***/ }),

/***/ "vOrQ":
/***/ (function(module, exports) {

module.exports = require("@angular/core");

/***/ })

/******/ })));