'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  var LoginComponent = function () {
    function LoginComponent(authService) {
      _classCallCheck(this, LoginComponent);

      this.authService = authService;
    }

    _createClass(LoginComponent, [{
      key: 'login',
      value: function login() {
        console.log('DATOS DE LOGIN ', this.user);
        this.authService.login(this.user);
      }
    }]);

    return LoginComponent;
  }();

  LoginComponent.$inject = ['authService'];
  angular.module('startUpApp').component('login', {
    templateUrl: 'app/login/login.html',
    controller: LoginComponent,
    controllerAs: 'vm'
  });
})();
//# sourceMappingURL=login.controller.js.map
