(function () {
  'use strict';

  angular
    .module('ducs')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider'];

  function routeConfig($stateProvider) {
    $stateProvider
      .state('ducs', {
        abstract: true,
        url: '/ducs',
        template: '<ui-view/>'
      })
      .state('ducs.list', {
        url: '',
        templateUrl: '/modules/ducs/client/views/list-ducs.client.view.html',
        controller: 'DucsListController',
        controllerAs: 'vm',
        data: {
          pageTitle: 'Ducs List'
        }
      })
      .state('ducs.create', {
        url: '/create',
        templateUrl: '/modules/ducs/client/views/form-duc.client.view.html',
        controller: 'DucsController',
        controllerAs: 'vm',
        data: {
          roles: ['user', 'admin'],
          pageTitle: 'Ducs Create'
        }
      })

      .state('ducs.result', {
        url: '/result',
        templateUrl: '/modules/ducs/client/views/results-ducs.client.view.html',
        controller: 'DucsResultController',
        controllerAs: 'vm',
        params: {object_id: null,
                 metric: null},
        data: {
          roles: ['user', 'admin'],
          pageTitle: 'Ducs Result'
        }
      })
      .state('ducs.edit', {
        url: '/:ducId/edit',
        templateUrl: '/modules/ducs/client/views/form-duc.client.view.html',
        controller: 'DucsController',
        controllerAs: 'vm',
        resolve: {
          ducResolve: getDuc
        },
        data: {
          roles: ['user', 'admin'],
          pageTitle: 'Edit Duc {{ ducResolve.name }}'
        }
      })
      .state('ducs.view', {
        url: '/:ducId',
        templateUrl: '/modules/ducs/client/views/view-duc.client.view.html',
        controller: 'DucsController',
        controllerAs: 'vm',
        resolve: {
          ducResolve: getDuc
        },
        data: {
          pageTitle: 'Duc {{ ducResolve.name }}'
        }
      })
      .state('ducs.admin-map', {
        url: '/admin/map',
        templateUrl: '/modules/ducs/client/views/admin.map.client.view.html',
        controller: 'AdminMapController',
        controllerAs: 'vm',
        data: {
          roles: ['user', 'admin'],
          pageTitle: 'Duc County Map'
        }
      })
      .state('ducs.admin-list', {
        url: '/admin/list',
        templateUrl: '/modules/ducs/client/views/admin.list-ducs.client.view.html',
        controller: 'DucsListController',
        controllerAs: 'vm',
        data: {
          roles: ['user', 'admin'],
          pageTitle: 'View all Ducs'
        }
      });
  }

  getDuc.$inject = ['$stateParams', 'DucsService'];

  function getDuc($stateParams, DucsService) {
    return DucsService.get({
      ducId: $stateParams.ducId
    }).$promise;
  }

  newDuc.$inject = ['DucsService'];

  function newDuc(DucsService) {
    return new DucsService();
  }
}());
