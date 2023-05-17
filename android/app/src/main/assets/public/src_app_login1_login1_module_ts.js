"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_login1_login1_module_ts"],{

/***/ 1491:
/*!********************************!*\
  !*** ./src/app/api.service.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiService": () => (/* binding */ ApiService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



let ApiService = class ApiService {
    constructor(http) {
        this.http = http;
    }
    login(nombre, password) {
        return this.http.post('login1', { nombre, password });
    }
};
ApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
ApiService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root',
    })
], ApiService);



/***/ }),

/***/ 2891:
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 8759);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.service */ 1491);





let AuthService = class AuthService {
    constructor(apiService) {
        this.apiService = apiService;
        this._isLoggedIn$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(false);
        this.isLoggedIn$ = this._isLoggedIn$.asObservable();
        const token = localStorage.getItem('usuario');
        this._isLoggedIn$.next(!!token);
    }
    login(nombre, password) {
        return this.apiService.login(nombre, password).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)((response) => {
            this._isLoggedIn$.next(true);
            localStorage.setItem('usuario', response.token);
        }));
    }
};
AuthService.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService }
];
AuthService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root',
    })
], AuthService);



/***/ }),

/***/ 9837:
/*!*************************************************!*\
  !*** ./src/app/login1/login1-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Login1PageRoutingModule": () => (/* binding */ Login1PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _login1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login1.page */ 2570);




const routes = [
    {
        path: '',
        component: _login1_page__WEBPACK_IMPORTED_MODULE_0__.Login1Page
    }
];
let Login1PageRoutingModule = class Login1PageRoutingModule {
};
Login1PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], Login1PageRoutingModule);



/***/ }),

/***/ 8965:
/*!*****************************************!*\
  !*** ./src/app/login1/login1.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Login1PageModule": () => (/* binding */ Login1PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _login1_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login1-routing.module */ 9837);
/* harmony import */ var _login1_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login1.page */ 2570);








let Login1PageModule = class Login1PageModule {
};
Login1PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login1_routing_module__WEBPACK_IMPORTED_MODULE_0__.Login1PageRoutingModule
        ],
        declarations: [_login1_page__WEBPACK_IMPORTED_MODULE_1__.Login1Page]
    })
], Login1PageModule);



/***/ }),

/***/ 2570:
/*!***************************************!*\
  !*** ./src/app/login1/login1.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Login1Page": () => (/* binding */ Login1Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _login1_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login1.page.html?ngResource */ 8735);
/* harmony import */ var _login1_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login1.page.scss?ngResource */ 341);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ 2891);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ 2785);









let Login1Page = class Login1Page {
    constructor(userService, authService, router, fb, alertController) {
        this.userService = userService;
        this.authService = authService;
        this.router = router;
        this.fb = fb;
        this.alertController = alertController;
        this.formularioLogin = this.fb.group({
            'nombre': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required)
        });
    }
    ngOnInit() {
    }
    /*async ingresar(){
      
     var f = this.formularioLogin.value;
   
     var usuario = JSON.parse(localStorage.getItem('usuario'));
   
     if(usuario.nombre == f.nombre && usuario.password == f.password){
       
      console.log('Ingresado');
        this.router.navigate(['/homelogin']);
       // this.authService
       // .login(this.formularioLogin.get('nombre')?.value, this.formularioLogin.get('password')?.value)
       // .subscribe((response) => {
       //   this.router.navigate(['/homelogin']);
       // });
    }else{
       const alert = await this.alertController.create({
         header: 'Datos incorrectos',
         message: 'Los datos que ingresaste son incorrectos.',
         buttons: ['Aceptar']
       });
   
       await alert.present();
    }
   
   
   }*/
    onSubmit() {
        this.userService.loginapp(this.formularioLogin.value)
            .then(Response => { this.router.navigate(['/homelogin']); })
            .catch(error => console.log(error));
    }
};
Login1Page.ctorParameters = () => [
    { type: _user_service__WEBPACK_IMPORTED_MODULE_3__.UserService },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController }
];
Login1Page = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-login1',
        template: _login1_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login1_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Login1Page);



/***/ }),

/***/ 341:
/*!****************************************************!*\
  !*** ./src/app/login1/login1.page.scss?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = ".button-8 {\n  background-color: #e1ecf4;\n  border-radius: 3px;\n  border: 1px solid #9dff00;\n  box-shadow: rgba(200, 255, 0, 0.7) 0 1px 0 0 inset;\n  box-sizing: border-box;\n  color: #39739d;\n  cursor: pointer;\n  display: inline-block;\n  font-family: -apple-system, system-ui, \"Segoe UI\", \"Liberation Sans\", sans-serif;\n  font-size: 13px;\n  font-weight: 400;\n  line-height: 1.15385;\n  margin: 0;\n  outline: none;\n  padding: 8px 0.8em;\n  position: relative;\n  text-align: center;\n  text-decoration: none;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  vertical-align: baseline;\n  white-space: nowrap;\n}\n\n.button-8:hover,\n.button-8:focus {\n  background-color: #b3d3ea;\n  color: #2c5777;\n}\n\n.button-8:focus {\n  box-shadow: 0 0 0 4px rgba(77, 77, 77, 0.15);\n}\n\n.button-8:active {\n  background-color: #a0c7e4;\n  box-shadow: none;\n  color: #2c5777;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luMS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxrREFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGdGQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUdFOztFQUVFLHlCQUFBO0VBQ0EsY0FBQTtBQUFKOztBQUdFO0VBQ0UsNENBQUE7QUFBSjs7QUFHRTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBQUoiLCJmaWxlIjoibG9naW4xLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b24tOCB7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UxZWNmNDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5ZGZmMDA7XHJcbiAgICBib3gtc2hhZG93OiByZ2JhKDIwMCwgMjU1LCAwLCAwLjcpIDAgMXB4IDAgMCBpbnNldDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBjb2xvcjogIzM5NzM5ZDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLHN5c3RlbS11aSxcIlNlZ29lIFVJXCIsXCJMaWJlcmF0aW9uIFNhbnNcIixzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjE1Mzg1O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDhweCAuOGVtO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIH1cclxuICBcclxuICAuYnV0dG9uLTg6aG92ZXIsXHJcbiAgLmJ1dHRvbi04OmZvY3VzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiM2QzZWE7XHJcbiAgICBjb2xvcjogIzJjNTc3NztcclxuICB9XHJcbiAgXHJcbiAgLmJ1dHRvbi04OmZvY3VzIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDRweCByZ2JhKDc3LCA3NywgNzcsIDAuMTUpO1xyXG4gIH1cclxuICBcclxuICAuYnV0dG9uLTg6YWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhMGM3ZTQ7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgY29sb3I6ICMyYzU3Nzc7XHJcbiAgfSJdfQ== */";

/***/ }),

/***/ 8735:
/*!****************************************************!*\
  !*** ./src/app/login1/login1.page.html?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "<style>\r\n    h1 {\r\n      text-align: center;\r\n    }\r\n    p {  margin-left: 25%;\r\n    margin-right: 25%;\r\n    padding: 10px;\r\n    font-family: fantasy;\r\n    border: rgb(240, 227, 227) 2px solid;}\r\n  \r\n    </style>\r\n<ion-header>\r\n\r\n    <ion-toolbar>\r\n        <ion-title  ><h1 style=\"color: #ff0101;\">\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\</h1></ion-title>\r\n      </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n\r\n\r\n<ion-content>\r\n    <br>\r\n    <ion-item>\r\n        <ion-label>\r\n<h1 style=\"color: #ff0101;\"><p>Inicio de sesion</p></h1>\r\n        </ion-label>\r\n      </ion-item>\r\n    <br>\r\n    <br>\r\n    <br>\r\n   <br>\r\n   <form  [formGroup]=\"formularioLogin\">\r\n    <ion-item>\r\n         <ion-label>Usuario: </ion-label>\r\n        <ion-input  formControlName=\"nombre\" placeholder=\"\" type=\"text\"></ion-input>\r\n     </ion-item>\r\n<br>\r\n\r\n\r\n     <ion-item>\r\n        <ion-label>Contraseña: </ion-label>\r\n        <ion-input  formControlName=\"password\"  placeholder=\"\" type=\"password\"></ion-input>\r\n      </ion-item>\r\n    </form>\r\n<br>\r\n<div style=\"margin: 0 auto; width:100px\">\r\n  <ion-button (click)=\"onSubmit()\" fill=\"outline\"  color=\"danger\" expand=\"center\" size=\"small\">Iniciar <br> sesión<ion-icon name=\"caret-forward-circle-outline\"></ion-icon></ion-button>\r\n</div>\r\n<br>\r\n<br>\r\n<br>\r\n\r\n<ion-footer>\r\n    <ion-toolbar color=\"light\">\r\n      \r\n        <ion-button expand=\"full\" fill=\"outline\"  color=\"danger\" [routerLink]=\"['/registro']\">Registrarse</ion-button>\r\n\r\n\r\n\r\n\r\n    </ion-toolbar>\r\n  </ion-footer>\r\n</ion-content>\r\n\r\n\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_login1_login1_module_ts.js.map