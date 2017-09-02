'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  var AboutUsComponent = function AboutUsComponent() {
    _classCallCheck(this, AboutUsComponent);

    this.message = 'Hello';
  };

  angular.module('startUpApp').component('aboutUs', {
    templateUrl: 'app/aboutUs/aboutUs.html',
    controller: AboutUsComponent,
    controllerAs: 'aboutUsCtrl'
  });
})();
//# sourceMappingURL=aboutUs.controller.js.map
