'use strict';

/**
 * Module dependencies
 */
var acl = require('acl');

// Using the memory backend
acl = new acl(new acl.memoryBackend());

/**
 * Invoke Ducs Permissions
 */
exports.invokeRolesPolicies = function () {
  acl.allow([{
    roles: ['admin'],
    allows: [{
      resources: '/api/measurements',
      permissions: '*'
    }, {
      resources: '/api/measurements/export',
      permissions: '*'
    }, {
      resources: '/api/measurements/count',
      permissions: '*'
    },{
      resources: '/api/measurements/count/:year',
      permissions: '*'
    }, {
      resources: '/api/measurements/activeYears',
      permissions: '*'
    }, {
      resources: '/api/measurements/:measureId',
      permissions: '*'
    }, {
      resources: '/api/email-result/:measureId',
      permissions: '*'
    }]
  }, {
    roles: ['user'],
    allows: [{
      resources: '/api/measurements',
      permissions: ['post']
    }, {
      resources: '/api/measurements/export',
      permissions: []
    }, {
      resources: '/api/measurements/count',
      permissions: []
    }, {
      resources: '/api/measurements/:measureId',
      permissions: ['get']
    }, {
      resources: '/api/email-result/:measureId',
      permissions: '*'
    }]
  }, {
    roles: ['guest'],
    allows: [{
      resources: '/api/measurements',
      permissions: []
    }, {
      resources: '/api/measurements/export',
      permissions: []
    }, {
      resources: '/api/measurements/count',
      permissions: []
    }, {
      resources: '/api/measurements/:measureId',
      permissions: []
    }, {
      resources: '/api/email-result/:measureId',
      permissions: []
    }]
  }]);
};

/**
 * Check If Ducs Policy Allows
 */
exports.isAllowed = function (req, res, next) {
  var roles = (req.user) ? req.user.roles : ['guest'];

  // If an Duc is being processed and the current user created it then allow any manipulation
  /*if (req.measurements && req.user && req.measurements.user && req.measurements.user.id === req.user.id) {
    return next();
  }*/

  // Check for user roles
  acl.areAnyRolesAllowed(roles, req.route.path, req.method.toLowerCase(), function (err, isAllowed) {
    if (err) {
      // An authorization error occurred
      return res.status(500).send('Unexpected authorization error');
    } else {
      if (isAllowed) {
        // Access granted! Invoke next middleware
         next();
      } else {
        return res.status(403).json({
          message: 'User is not authorized'
        });
      }
    }
  });
};
