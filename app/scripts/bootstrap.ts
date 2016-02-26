declare var angular: any;

import {UpgradeAdapter} from 'angular2/upgrade';
import {TodoList} from "./components/todo-list";
import {TodoInput} from "./components/todo-input";
import {TodoApp} from "./components/todo-app";

let adapter = new UpgradeAdapter();

angular.module('todoListWorkshopApp').directive('todoList', adapter.downgradeNg2Component(TodoList));

angular.module('todoListWorkshopApp').directive('todoInput', adapter.downgradeNg2Component(TodoInput));

angular.module('todoListWorkshopApp').directive('todoApp', adapter.downgradeNg2Component(TodoApp));

adapter.bootstrap(document.body, ['todoListWorkshopApp']);
