import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-todo-task',
  standalone: true,
  imports: [],
  templateUrl: './todo-task.component.html',
  styleUrl: './todo-task.component.css',
})
export class TodoTaskComponent implements OnInit, OnChanges {
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

  public getClassByStatus(status) {
    if (status === 'todo') {
      return 'todo';
    } else if (status === 'doing') {
      return 'doing';
    } else {
      return 'done';
    }
  }

  ngOnInit() {
    console.log('TaskComponent INIT');
  }

  ngOnChanges() {
    console.log('TaskComponent CHANGES');
  }
}
