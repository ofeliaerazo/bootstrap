'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  var CountriesListComponent = function () {
    function CountriesListComponent(countriesService) {
      _classCallCheck(this, CountriesListComponent);

      this.message = 'Hello';
      this.countriesService = countriesService;
    }

    _createClass(CountriesListComponent, [{
      key: '$onInit',
      value: function $onInit() {
        var _this = this;

        this.countriesService.query().$promise.then(function (response) {
          console.log('OK', response);
          _this.countries = response;
        }).catch(function (err) {
          return console.log(err);
        });
      }
    }]);

    return CountriesListComponent;
  }();

  CountriesListComponent.$inject = ['countriesService'];
  angular.module('startUpApp').component('countriesList', {
    templateUrl: 'app/countries/countries-list/countries-list.html',
    controller: CountriesListComponent,
    controllerAs: 'vm'
  });
})();
//# sourceMappingURL=countries-list.controller.js.map
