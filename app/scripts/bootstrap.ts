declare var angular: any;

import {UpgradeAdapter} from 'angular2/upgrade';
import {TodoList} from "./components/todo-list";
import {TodoInput} from "./components/todo-input";

let adapter = new UpgradeAdapter();

angular.module('todoListWorkshopApp').directive('todoList', adapter.downgradeNg2Component(TodoList));

angular.module('todoListWorkshopApp').directive('todoInput', adapter.downgradeNg2Component(TodoInput));

adapter.bootstrap(document.body, ['todoListWorkshopApp']);
