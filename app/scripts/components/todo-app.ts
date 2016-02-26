import { Component } from 'angular2/core';
import {TodoList} from "./todo-list";
import {TodoInput} from "./todo-input";

@Component({
  selector: 'todo-app',
  template: `<div>
              <todo-input (onItemAdded)="add($event)"></todo-input>
              <todo-list [todos]="todos"></todo-list>
            </div>
          `,
          directives: [TodoList, TodoInput]
})
export class TodoApp {
  todos = ['item1', 'item2', 'item3'];

  add(value) {
    this.todos.push(value);
  };

}
