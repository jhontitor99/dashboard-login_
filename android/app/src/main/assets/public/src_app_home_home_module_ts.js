"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_home_module_ts"],{

/***/ 2003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 2003);







let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 2267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page.html?ngResource */ 3853);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 1020);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let HomePage = class HomePage {
    constructor() { }
};
HomePage.ctorParameters = () => [];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-home',
        template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);



/***/ }),

/***/ 1020:
/*!************************************************!*\
  !*** ./src/app/home/home.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\nh1 {\n  text-align: center;\n}\n\np {\n  margin-left: 25%;\n  margin-right: 25%;\n  padding: 10px;\n  font-family: fantasy;\n  border: rgb(240, 227, 227) 2px solid;\n}\n\nion-content {\n  --ion-background-color:#050505;\n}\n\nbutton {\n  box-shadow: 0 8px 16px 0 rgba(255, 255, 255, 0.2), 0 6px 20px 0 rgba(251, 249, 249, 0.19);\n}\n\n.button-8 {\n  background-color: #e1ecf4;\n  border-radius: 3px;\n  border: 1px solid #9dff00;\n  box-shadow: rgba(200, 255, 0, 0.7) 0 1px 0 0 inset;\n  box-sizing: border-box;\n  color: #39739d;\n  cursor: pointer;\n  display: inline-block;\n  font-family: -apple-system, system-ui, \"Segoe UI\", \"Liberation Sans\", sans-serif;\n  font-size: 13px;\n  font-weight: 400;\n  line-height: 1.15385;\n  margin: 0;\n  outline: none;\n  padding: 8px 0.8em;\n  position: relative;\n  text-align: center;\n  text-decoration: none;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  vertical-align: baseline;\n  white-space: nowrap;\n}\n\n.button-8:hover,\n.button-8:focus {\n  background-color: #b3d3ea;\n  color: #2c5777;\n}\n\n.button-8:focus {\n  box-shadow: 0 0 0 4px rgba(77, 77, 77, 0.15);\n}\n\n.button-8:active {\n  background-color: #a0c7e4;\n  box-shadow: none;\n  color: #2c5777;\n}\n\n.content1 {\n  display: plex;\n  justify-content: center;\n}\n\n.center {\n  margin: 0 auto;\n  width: 100p;\n}\n\n.button-38 {\n  background-color: #FFFFFF;\n  border: 0;\n  border-radius: 0.5rem;\n  box-sizing: border-box;\n  color: #111827;\n  font-family: \"Inter var\", ui-sans-serif, system-ui, -apple-system, system-ui, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  font-size: 0.875rem;\n  font-weight: 600;\n  line-height: 1.25rem;\n  padding: 0.75rem 1rem;\n  text-align: center;\n  -webkit-text-decoration: none #D1D5DB solid;\n          text-decoration: none #D1D5DB solid;\n  text-decoration-thickness: auto;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  cursor: pointer;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n}\n\n.button-38:hover {\n  background-color: rgb(249, 250, 251);\n}\n\n.button-38:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n\n.button-38:focus-visible {\n  box-shadow: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FBRkY7O0FBS0E7RUFDRSxxQkFBQTtBQUZGOztBQU1FO0VBQ0Usa0JBQUE7QUFISjs7QUFLRTtFQUFLLGdCQUFBO0VBQ0wsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQ0FBQTtBQURGOztBQUdFO0VBQWEsOEJBQUE7QUFDZjs7QUFFRTtFQUNFLHlGQUFBO0FBQ0o7O0FBRUU7RUFFRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxrREFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGdGQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUdFOztFQUVFLHlCQUFBO0VBQ0EsY0FBQTtBQUFKOztBQUdFO0VBQ0UsNENBQUE7QUFBSjs7QUFHRTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBQUo7O0FBR0U7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUFBSjs7QUFPRTtFQUNFLGNBQUE7RUFDQyxXQUFBO0FBSkw7O0FBT0E7RUFDRSx5QkFBQTtFQUNBLFNBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGdPQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLDJDQUFBO1VBQUEsbUNBQUE7RUFDQSwrQkFBQTtFQUNBLDJFQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtBQUpGOztBQU9BO0VBQ0Usb0NBQUE7QUFKRjs7QUFPQTtFQUNFLDhCQUFBO0VBQ0EsbUJBQUE7QUFKRjs7QUFPQTtFQUNFLGdCQUFBO0FBSkYiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbiNjb250YWluZXIgc3Ryb25nIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cblxuI2NvbnRhaW5lciBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcblxuICBjb2xvcjogIzhjOGM4YztcblxuICBtYXJnaW46IDA7XG59XG5cbiNjb250YWluZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuXG4gIGgxIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgcCB7ICBtYXJnaW4tbGVmdDogMjUlO1xuICBtYXJnaW4tcmlnaHQ6IDI1JTtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1mYW1pbHk6IGZhbnRhc3k7XG4gIGJvcmRlcjogcmdiKDI0MCwgMjI3LCAyMjcpIDJweCBzb2xpZDt9XG5cbiAgaW9uLWNvbnRlbnR7IC0taW9uLWJhY2tncm91bmQtY29sb3I6IzA1MDUwNTsgfVxuXG5cbiAgYnV0dG9uIHtcbiAgICBib3gtc2hhZG93OiAwIDhweCAxNnB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgyNTEsIDI0OSwgMjQ5LCAwLjE5KTtcbiAgfVxuXG4gIC5idXR0b24tOCB7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFlY2Y0O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOWRmZjAwO1xuICAgIGJveC1zaGFkb3c6IHJnYmEoMjAwLCAyNTUsIDAsIDAuNykgMCAxcHggMCAwIGluc2V0O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgY29sb3I6ICMzOTczOWQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSxzeXN0ZW0tdWksXCJTZWdvZSBVSVwiLFwiTGliZXJhdGlvbiBTYW5zXCIsc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBsaW5lLWhlaWdodDogMS4xNTM4NTtcbiAgICBtYXJnaW46IDA7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBwYWRkaW5nOiA4cHggLjhlbTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB9XG4gIFxuICAuYnV0dG9uLTg6aG92ZXIsXG4gIC5idXR0b24tODpmb2N1cyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2IzZDNlYTtcbiAgICBjb2xvcjogIzJjNTc3NztcbiAgfVxuICBcbiAgLmJ1dHRvbi04OmZvY3VzIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMCA0cHggcmdiYSg3NywgNzcsIDc3LCAwLjE1KTtcbiAgfVxuICBcbiAgLmJ1dHRvbi04OmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2EwYzdlNDtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIGNvbG9yOiAjMmM1Nzc3O1xuICB9XG5cbiAgLmNvbnRlbnQxe1xuICAgIGRpc3BsYXk6cGxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuXG5cbiAgfVxuXG5cbiAgLmNlbnRlciB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgIHdpZHRoOjEwMHA7XG59XG5cbi5idXR0b24tMzgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IC41cmVtO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBjb2xvcjogIzExMTgyNztcbiAgZm9udC1mYW1pbHk6IFwiSW50ZXIgdmFyXCIsdWktc2Fucy1zZXJpZixzeXN0ZW0tdWksLWFwcGxlLXN5c3RlbSxzeXN0ZW0tdWksXCJTZWdvZSBVSVwiLFJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsQXJpYWwsXCJOb3RvIFNhbnNcIixzYW5zLXNlcmlmLFwiQXBwbGUgQ29sb3IgRW1vamlcIixcIlNlZ29lIFVJIEVtb2ppXCIsXCJTZWdvZSBVSSBTeW1ib2xcIixcIk5vdG8gQ29sb3IgRW1vamlcIjtcbiAgZm9udC1zaXplOiAuODc1cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMS4yNXJlbTtcbiAgcGFkZGluZzogLjc1cmVtIDFyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lICNEMUQ1REIgc29saWQ7XG4gIHRleHQtZGVjb3JhdGlvbi10aGlja25lc3M6IGF1dG87XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC4xKSwgMCAxcHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjA2KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XG59XG5cbi5idXR0b24tMzg6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ5LDI1MCwyNTEpO1xufVxuXG4uYnV0dG9uLTM4OmZvY3VzIHtcbiAgb3V0bGluZTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBvdXRsaW5lLW9mZnNldDogMnB4O1xufVxuXG4uYnV0dG9uLTM4OmZvY3VzLXZpc2libGUge1xuICBib3gtc2hhZG93OiBub25lO1xufSJdfQ== */";

/***/ }),

/***/ 3853:
/*!************************************************!*\
  !*** ./src/app/home/home.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "\n<ion-header>\n  \n</ion-header>\n\n<ion-content >\n\n  <ion-header>\n\n  \n    <ion-toolbar color=\"secundary\" >\n     \n      </ion-toolbar>\n  </ion-header>\n  <br>\n  <br>\n  <br>\n  <br>\n\n  <div >\n  <img src=\"assets/foto.png\">\n</div>\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n\n  \n\n    \n  <div style=\"margin: 0 auto; width:100px\">  \n    \n    <button class=\"button-38\" style=\"margin-left: 16px\" role=\"button\" ><ion-router-link href=\"/login1\" color=\"Dark\">Login</ion-router-link></button >\n    <br>\n    <br>\n    <button class=\"button-38\"  role=\"button\" ><ion-router-link href=\"/registro\"  color=\"Dark\">Registrarse</ion-router-link></button>\n  </div>\n\n\n<br>\n\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map