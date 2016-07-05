import {Component} from '@angular/core';
import {TodoContentComponent} from './content/content.component';
import {TodoHeaderComponent} from './header/header.component';
import {TodoFooterComponent} from './footer/footer.component';
import {TodoService} from '../services/todo.service';
import {Todo} from "../models/todo.model";

@Component({
  selector: 'my-app',
  templateUrl: 'app/components/app.html',
  providers: [TodoService],
  directives: [TodoContentComponent, TodoFooterComponent, TodoHeaderComponent]
})
export class AppComponent {
  todos: Todo[];

  constructor(private service: TodoService) {
    this.todos = this.service.todos;
  }
}
