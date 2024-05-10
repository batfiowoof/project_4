import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo-task',
  standalone: true,
  imports: [],
  templateUrl: './todo-task.component.html',
  styleUrl: './todo-task.component.css',
})
export class TodoTaskComponent {
  @Input()
  public inputTask;

  @Input()
  public inputStatus;

  @Input() public inputTaskObject;

  @Output() public onStatusChange = new EventEmitter();

  public changeStatus(statusCode) {
    this.inputTaskObject.status = statusCode;
    this.onStatusChange.emit(this.inputTaskObject);
  }
}
