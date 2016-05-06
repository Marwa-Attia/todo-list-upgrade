
'use strict';

angular.module('todoListWorkshopApp')
  .controller('MainCtrl', function($scope, todosService) {
    $scope.todos = todosService.getTodos();

    $scope.add = function(value) {
      $scope.todos.push(value);
      $scope.newItem = '';
    };
  });
