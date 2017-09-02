'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  var CitiesListComponent = function () {
    function CitiesListComponent(citiesService) {
      _classCallCheck(this, CitiesListComponent);

      this.message = 'Hello';
      this.citiesService = citiesService;
    }

    _createClass(CitiesListComponent, [{
      key: '$onInit',
      value: function $onInit() {
        var _this = this;

        this.citiesService.query().$promise.then(function (response) {
          console.log('CIUDADES', response);
          _this.cities = response;
        }).catch(function (err) {
          return console.log(err);
        });
      }
    }]);

    return CitiesListComponent;
  }();

  CitiesListComponent.$inject = ['citiesService'];
  angular.module('startUpApp').component('citiesList', {
    templateUrl: 'app/cities/cities-list/cities-list.html',
    controller: CitiesListComponent,
    controllerAs: 'vm'
  });
})();
//# sourceMappingURL=cities-list.controller.js.map
