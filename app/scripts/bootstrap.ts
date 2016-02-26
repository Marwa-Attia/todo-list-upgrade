declare var angular: any;

import {UpgradeAdapter} from 'angular2/upgrade';
import {TodoList} from "./components/todo-list";

let adapter = new UpgradeAdapter();

angular.module('todoListWorkshopApp').directive('todoList', adapter.downgradeNg2Component(TodoList));

adapter.bootstrap(document.body, ['todoListWorkshopApp']);
