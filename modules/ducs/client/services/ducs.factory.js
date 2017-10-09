angular.module('ducs').factory('Ducs', ['$http', 
  function($http) {
    var methods = {
      getAll: function() {
        return $http.get('http://localhost:8080/api/listings');
      },

      create: function(data) {
        return $http.post('/api/measurements', data);
      }, 

      read: function(id) {
        return $http.get('http://localhost:8080/api/listings/' + id);
      }, 

      update: function(id, listing) {
        return $http.put('http://localhost:8080/api/listings/' + id, listing);
      }, 

      delete: function(id) {
        return $http.delete('http://localhost:8080/api/listings/' + id);
      }
    };

    return methods;
  }
]);