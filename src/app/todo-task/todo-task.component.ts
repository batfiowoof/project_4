import { Component, Input } from '@angular/core';

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
}
