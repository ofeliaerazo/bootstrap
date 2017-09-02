'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  var UsuariosListComponent = function () {
    function UsuariosListComponent(usuariosService) {
      _classCallCheck(this, UsuariosListComponent);

      this.usuariosService = usuariosService;
    }

    _createClass(UsuariosListComponent, [{
      key: '$onInit',
      value: function $onInit() {
        var _this = this;

        this.usuariosService.query().$promise.then(function (response) {
          console.log('Usuarios OK', response);
          _this.arreglo = response;
        }).catch(function (err) {
          console.log('ERROR', err);
        });
      }
    }]);

    return UsuariosListComponent;
  }();

  UsuariosListComponent.$inject = ['usuariosService'];
  angular.module('startUpApp').component('usuariosList', {
    templateUrl: 'app/usuarios/usuarios-list/usuarios-list.html',
    controller: UsuariosListComponent,
    controllerAs: 'vm'
  });
})();
//# sourceMappingURL=usuarios-list.controller.js.map
