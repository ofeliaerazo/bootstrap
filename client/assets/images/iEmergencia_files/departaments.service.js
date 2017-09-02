'use strict';

function departamentsService($resource, API) {
  return $resource(API + '/api/departaments/:id', { id: '@id' }, { update: { method: 'PUT' }
  });
}

angular.module('startUpApp').service('departamentsService', departamentsService);
//# sourceMappingURL=departaments.service.js.map
