'use strict';

require('helpers/shims');
require('angular');
require('angular-uuid');

var _AmazingApp = angular.module('AmazingApp', ['angular-uuid']);
    
_AmazingApp.factory('idService', ['uuid', require('./modules/services/id-service')]);
_AmazingApp.controller('IDViewController', ['$scope', 'idService', require('./modules/controllers/id-view-controller')]);