'use strict';

angular.module('todoListWorkshopApp').service('todosService', () => {
  const getTodos = () => {
    return ['item1', 'item2', 'item3'];
  }

  return {
    getTodos: getTodos
  }
})
