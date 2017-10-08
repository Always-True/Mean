(function () {
  'use strict';

  angular
    .module('ducs')
    .run(menuConfig);

  menuConfig.$inject = ['menuService'];

  function menuConfig(menuService) {
    // Set top bar menu items
    menuService.addMenuItem('topbar', {
      title: 'Ducs',
      state: 'ducs',
      type: 'dropdown',
      roles: ['user', 'admin']
    });

    // Add the dropdown list item
    menuService.addSubMenuItem('topbar', 'ducs', {
      title: 'List Ducs',
      state: 'ducs.list'
    });

    // Add the dropdown create item
    menuService.addSubMenuItem('topbar', 'ducs', {
      title: 'Create Duc',
      state: 'ducs.create',
      roles: ['user']
    });

    // Add DUC Admin entries to the existing Admin dropbown
    menuService.addSubMenuItem('topbar', 'admin', {
      title: 'View all Ducs',
      state: 'ducs.admin.list',
      roles: ['admin']
    });
    menuService.addSubMenuItem('topbar', 'admin', {
      title: 'County Map',
      state: 'ducs.admin.map',
      roles: ['admin']
    });
  }
}());
