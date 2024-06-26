import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoTaskComponent } from '../todo-task/todo-task.component';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [FormsModule, TodoTaskComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent {
  inputValue: string = '';

  tasks: any = [];

  addTask() {
    this.tasks.push({
      id: this.tasks.length,
      task: this.inputValue,
      status: 'todo',
    });
    this.inputValue = '';
  }

  removeTask() {
    this.tasks.pop();
  }

  public statusChange(task) {
    console.log(task);
  }
}
