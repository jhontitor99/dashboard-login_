"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_homelogin_homelogin_module_ts"],{

/***/ 3871:
/*!*******************************************************!*\
  !*** ./src/app/homelogin/homelogin-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeloginPageRoutingModule": () => (/* binding */ HomeloginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _homelogin_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homelogin.page */ 397);




const routes = [
    {
        path: '',
        component: _homelogin_page__WEBPACK_IMPORTED_MODULE_0__.HomeloginPage
    }
];
let HomeloginPageRoutingModule = class HomeloginPageRoutingModule {
};
HomeloginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HomeloginPageRoutingModule);



/***/ }),

/***/ 5519:
/*!***********************************************!*\
  !*** ./src/app/homelogin/homelogin.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeloginPageModule": () => (/* binding */ HomeloginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _homelogin_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homelogin-routing.module */ 3871);
/* harmony import */ var _homelogin_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homelogin.page */ 397);







let HomeloginPageModule = class HomeloginPageModule {
};
HomeloginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _homelogin_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomeloginPageRoutingModule
        ],
        declarations: [_homelogin_page__WEBPACK_IMPORTED_MODULE_1__.HomeloginPage]
    })
], HomeloginPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_homelogin_homelogin_module_ts.js.map