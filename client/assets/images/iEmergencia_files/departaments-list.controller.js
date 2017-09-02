'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  var DepartamentsListComponent = function () {
    function DepartamentsListComponent(departamentsService) {
      _classCallCheck(this, DepartamentsListComponent);

      this.message = 'Hello';
      this.departamentsService = departamentsService;
    }

    _createClass(DepartamentsListComponent, [{
      key: '$onInit',
      value: function $onInit() {
        var _this = this;

        this.departamentsService.query().$promise.then(function (response) {
          console.log('OK', response);
          _this.departaments = response;
        }).catch(function (err) {
          return console.log(err);
        });
      }
    }]);

    return DepartamentsListComponent;
  }();

  DepartamentsListComponent.$inject = ['departamentsService'];
  angular.module('startUpApp').component('departamentsList', {
    templateUrl: 'app/departaments/departaments-list/departaments-list.html',
    controller: DepartamentsListComponent,
    controllerAs: 'vm'
  });
})();
//# sourceMappingURL=departaments-list.controller.js.map
