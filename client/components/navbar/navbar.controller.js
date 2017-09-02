'use strict';

class NavbarController {
  //start-non-standard
    ocultarCollapse(){
  $('.navbar-collapse').collapse('hide');

}

}

angular.module('bootstrapApp')
  .controller('NavbarController', NavbarController);
