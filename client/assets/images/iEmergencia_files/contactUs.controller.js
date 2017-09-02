'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  var ContactUsComponent = function ContactUsComponent() {
    _classCallCheck(this, ContactUsComponent);

    this.message = 'Hello';
  };

  angular.module('startUpApp').component('contactUs', {
    templateUrl: 'app/contactUs/contactUs.html',
    controller: ContactUsComponent,
    controllerAs: 'contactUsCtrl'
  });
})();
//# sourceMappingURL=contactUs.controller.js.map
