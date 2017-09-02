'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NavbarController =
//start-non-standard
function NavbarController(authService) {
  _classCallCheck(this, NavbarController);

  this.isCollapsed = true;
  this.authService = authService;
  this.menu = [{
    'title': 'Inicio',
    'state': 'main'
  }, {
    'title': 'Quienes Somos',
    'state': 'aboutUs'
  }, {
    'title': 'Nuestros Servicios',
    'state': 'ourServices'
  }, {
    'title': 'Contáctenos',
    'state': 'contactUs'
  }];
};

NavbarController.$inject = ['authService'];
angular.module('startUpApp').component('navbar', {
  templateUrl: 'components/navbar/navbar.html',
  controller: NavbarController,
  controllerAs: 'vm'
});

//
// 'use strict';
// (function(){
//
//   class NavbarController {
//
//    constructor(authService){
//      this.isCollapsed = true;
//      this.authService = authService;
//    }
//
//   $onInit(){
//
//   }
// }
// NavbarController.$inject=['authService'];
// angular.module('startUpApp')
//   .component('navbar', {
//     templateUrl: 'components/navbar/navbar.html',
//     controller: NavbarController,
//     controllerAs: 'vm'
//   });
//# sourceMappingURL=navbar.controller.js.map
