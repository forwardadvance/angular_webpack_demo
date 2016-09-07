
var angular = require('angular');
var Controller = require('./cat.controller');

module.exports =
  angular.module('cat', [])
    .controller('catController', Controller)
    .name
