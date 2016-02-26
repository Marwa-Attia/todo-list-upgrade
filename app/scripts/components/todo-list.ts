import { Component, Input } from 'angular2/core';

@Component({
  selector: 'todo-list',
  template: `<ul>
              <li *ngFor="#todo of todos">{{todo}}</li>
            </ul>`
})
export class TodoList {
  @Input() todos;

}
