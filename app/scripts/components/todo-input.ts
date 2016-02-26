import { Component, Output, EventEmitter } from 'angular2/core';

@Component({
  selector: 'todo-input',
  template: `<input [(ngModel)]="currentItem" />
            <button (click)="add(currentItem)">Add</button>`
})
export class TodoInput {
  @Output() onItemAdded = new EventEmitter();
  currentItem;
  add(value) {
    this.onItemAdded.emit(value);
    this.currentItem = '';
  }
}
