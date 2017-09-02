'use strict';

function citiesService($resource, API) {
  return $resource(API + '/api/cities/:id', {
    id: '@id'
  }, {
    update: {
      method: 'PUT'
    },
    getCities: { //TRAE LAS CIUDADES AL SELECT EN LISTA
      url: API + '/api/cities/find',
      method: 'GET',
      isArray: true
    }
  });
}

citiesService.$inject = ['$resource', 'API'];
angular.module('startUpApp').factory('citiesService', citiesService);
//# sourceMappingURL=cities.service.js.map
