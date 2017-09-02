'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  var TypeDocumentsListComponent = function () {
    function TypeDocumentsListComponent(typeDocumentsService) {
      _classCallCheck(this, TypeDocumentsListComponent);

      this.typeDocumentsService = typeDocumentsService;
    }

    _createClass(TypeDocumentsListComponent, [{
      key: '$onInit',
      value: function $onInit() {
        var _this = this;

        this.typeDocumentsService.query().$promise.then(function (response) {
          console.log('TYPEDOCUMENT OK', response);
          _this.typeDocument = response;
        }).catch(function (err) {
          console.log('ERROR', err);
        });
      }
    }]);

    return TypeDocumentsListComponent;
  }();

  angular.module('startUpApp').component('typeDocumentsList', {
    templateUrl: 'app/typeDocuments/typeDocuments-list/typeDocuments-list.html',
    controller: TypeDocumentsListComponent,
    controllerAs: 'typeDocumentsListCtrl'
  });
})();
//# sourceMappingURL=typeDocuments-list.controller.js.map
