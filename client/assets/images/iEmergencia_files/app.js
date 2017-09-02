'use strict';

angular.module('startUpApp', ['startUpApp.constants', 'ngCookies', 'ngResource', 'ngSanitize', 'ngAnimate', 'ngMessages', 'ui.router', 'ui.bootstrap', 'satellizer']).constant('API', 'http://localhost:8080/iemergencia_backend')
/*
+*  Estructura para la configuración de satellizer
+*/
.config(function (API, $authProvider) {
  $authProvider.loginUrl = API + '/api/auth/login';
  $authProvider.tokenName = 'token';
  $authProvider.tokenPrefix = 'startUpApp';
}).config(function ($urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/');

  $locationProvider.html5Mode(true);
});
//# sourceMappingURL=app.js.map
