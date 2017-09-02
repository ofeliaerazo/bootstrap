'use strict';

function typeDocumentsService($resource, API) {
  // AngularJS will instantiate a singleton by cang "new" on this function
  return $resource(API + '/api/documents_types/:id', {
    id: '@id'
  }, {
    update: {
      method: 'PUT'
    }
  });
}

angular.module('startUpApp').factory('typeDocumentsService', typeDocumentsService);
//# sourceMappingURL=typeDocuments.service.js.map
