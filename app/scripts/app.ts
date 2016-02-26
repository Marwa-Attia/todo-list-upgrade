
'use strict';
declare var angular: any;
angular.module('todoListWorkshopApp', [
    'ngRoute'
  ])
  .config(($routeProvider) => {
    $routeProvider
      .when('/', {
        template: `<todo-app></todo-app>`
      })
      .otherwise({
        redirectTo: '/'
      });
  });
