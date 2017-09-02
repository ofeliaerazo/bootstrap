'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  var UsuariosUpdateComponent = function () {
    function UsuariosUpdateComponent(usuariosService, $state, $stateParams, typeDocumentsService, departamentsService, citiesService) {
      _classCallCheck(this, UsuariosUpdateComponent);

      this.usuariosService = usuariosService;
      this.$state = $state;
      this.$stateParams = $stateParams;
      this.typeDocumentsService = typeDocumentsService;
      this.departamentsService = departamentsService;
      this.citiesService = citiesService;
    }

    _createClass(UsuariosUpdateComponent, [{
      key: '$onInit',
      value: function $onInit() {
        var _this = this;

        this.usuariosService.get({ id: this.$stateParams.idUsers }).$promise.then(function (response) {
          _this.users = response;
          console.log(_this.users);
        }).catch(function (err) {
          return console.error(err);
        });

        this.typeDocumentsService.query().$promise.then(function (response) {
          console.log('TYPEDOCUMENT OK', response);
          _this.documentType = response;
        }).catch(function (err) {
          return console.log('ERROR', err);
        });

        this.departamentsService.query().$promise.then(function (response) {
          console.log('DEPARTAMENTS', response);
          _this.departamentsList = response;
        }).catch(function (err) {
          return console.log(err, 'Error');
        });
      }
    }, {
      key: 'getCities',
      value: function getCities() {
        var _this2 = this;

        console.log(this.idDepartaments);
        this.citiesService.getCities({ idDepartaments: this.idDepartaments }).$promise.then(function (response) {
          console.log('Ciudades', response);
          _this2.cities = response;

          _this2.nombreciudad = _this2.users.idCities.id;
          console.log(_this2.nombreciudad);
        }).catch(function (err) {
          return console.error(err);
        });
      }
    }, {
      key: 'updateUser',
      value: function updateUser() {
        var _this3 = this;

        console.log(this.users);
        this.usuariosService.update({ id: this.users.id }, this.users).$promise.then(function (response) {
          console.log("Usuario Actualizado Correctamente...!!!");
          _this3.$state.go('usuarios-list');
        }).catch(function (err) {
          console.error(err);
        });
      }
    }]);

    return UsuariosUpdateComponent;
  }();

  UsuariosUpdateComponent.$inject = ['usuariosService', '$state', '$stateParams', 'typeDocumentsService', 'departamentsService', 'citiesService'];

  angular.module('startUpApp').component('usuariosUpdate', {
    templateUrl: 'app/usuarios/usuarios-update/usuarios-update.html',
    controller: UsuariosUpdateComponent,
    controllerAs: 'vm'
  });
})();
//# sourceMappingURL=usuarios-update.controller.js.map
