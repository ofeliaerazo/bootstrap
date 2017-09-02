'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  var OurServicesComponent = function OurServicesComponent() {
    _classCallCheck(this, OurServicesComponent);

    this.message = 'Hello';
  };

  angular.module('startUpApp').component('ourServices', {
    templateUrl: 'app/ourServices/ourServices.html',
    controller: OurServicesComponent,
    controllerAs: 'ourServicesCtrl'
  });
})();
//# sourceMappingURL=ourServices.controller.js.map
