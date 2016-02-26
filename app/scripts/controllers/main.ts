/// <reference path="../app.ts" />

'use strict';

angular.module('todoListWorkshopApp')
  .controller('MainCtrl', function($scope) {
    $scope.todos = ['item1', 'item2', 'item3'];

    $scope.add = function(value) {
      $scope.todos.push(value);
      $scope.newItem = '';
    };
  });
