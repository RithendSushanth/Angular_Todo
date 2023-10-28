import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todo!: Todo;
  @Input() i!: number;
  @Input() darkMode!: boolean; // Input property to receive dark mode status

  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();

  constructor(){

  }

  onClick(todo: Todo){
    this.todoDelete.emit(todo);
    console.log("Onclick");  
  }

  onCheckboxClick(todo: Todo){ 
    console.log(todo);    
    this.todoCheckbox.emit(todo);
  }
}