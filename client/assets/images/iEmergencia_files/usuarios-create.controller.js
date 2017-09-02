'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  var UsuariosCreateComponent = function () {
    function UsuariosCreateComponent(usuariosService, citiesService, typeDocumentsService, $state, departamentsService) {
      _classCallCheck(this, UsuariosCreateComponent);

      this.usuariosService = usuariosService;
      this.citiesService = citiesService;
      this.typeDocumentsService = typeDocumentsService;
      this.$state = $state;
      this.departamentsService = departamentsService;
      this.mensaje = "";
      this.errors = {
        doc: false,
        email: false
      };
    }

    _createClass(UsuariosCreateComponent, [{
      key: '$onInit',
      value: function $onInit() {
        var _this = this;

        this.citiesService.query().$promise.then(function (response) {
          console.log('CITY OK', response);
          _this.city = response;
        }).catch(function (err) {
          console.log('ERROR', err);
        });

        this.typeDocumentsService.query().$promise.then(function (response) {
          console.log('TYPEDOCUMENT OK', response);
          _this.documentType = response;
        }).catch(function (err) {
          console.log('ERROR', err);
        });

        this.departamentsService.query().$promise.then(function (response) {
          console.log('DEPARTAMENTS', response);
          _this.departamentsList = response;
        }).catch(function (err) {
          console.log(err, 'Error');
        });
      }
    }, {
      key: 'changeDoc',
      value: function changeDoc() {
        console.log("si esta en changeDoc");

        for (var i = 0; i < this.documentType.length; i++) {
          if (this.documentType[i].id == this.users.idDocumentsTypes.id) {
            this.selecDoc = this.documentType[i].id;
            console.log("id de tipo doc " + this.selecDoc);
          }
        }
      }
    }, {
      key: 'docSelec',
      value: function docSelec() {
        console.log("esta en docSelec");
        if (this.selecDoc == 2) {
          return true;
          console.log("true");
        } else {
          return false;
          console.log("false");
        }
      }
    }, {
      key: 'createUser',
      value: function createUser() {
        var _this2 = this;

        this.users.active = 1;
        /*
            this.newUsuario=this.usuariosService.query();
            for (var i = 0; i < this.newUsuario.length; i++) {
              if(this.user.numDocumento===this.newUsuario[i].numDocumento){
        
                this.mensaje="el numero ya existe";
              }
            }
        
        */
        console.log(this.users);
        //console.log(this.users.documentNumber);

        this.usuariosService.save(this.users).$promise.then(function (response) {
          console.log('CREATE OK', response);
          _this2.$state.go('login');
        }).catch(function (err) {
          console.log('ERROR', err);
          if (err.data == "DOC") {
            _this2.errors.doc = true;
          }
        });
      }
    }, {
      key: 'getCities',
      value: function getCities() {
        var _this3 = this;

        console.log(this.idDepartaments);
        this.citiesService.getCities({ idDepartaments: this.idDepartaments }).$promise.then(function (response) {
          console.log('Ciudades', response);
          _this3.cities = response;
        }).catch(function (err) {
          return console.error(err);
        });
      }
    }]);

    return UsuariosCreateComponent;
  }();

  UsuariosCreateComponent.$inject = ['usuariosService', 'citiesService', 'typeDocumentsService', '$state', 'departamentsService'];
  angular.module('startUpApp').component('usuariosCreate', {
    templateUrl: 'app/usuarios/usuarios-create/usuarios-create.html',
    controller: UsuariosCreateComponent,
    controllerAs: 'vm'
  });
})();
//# sourceMappingURL=usuarios-create.controller.js.map
