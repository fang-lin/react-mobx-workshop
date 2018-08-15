import { observable, action, computed } from 'mobx';
import { trim } from 'lodash';
import TodoStore from './TodoStore';
import { uuid } from '../utils';

export default class TodosStore {
  @observable todos = [];

  @action addTodo = (title) => {
    const trimTitle = trim(title);
    if (trimTitle !== '') {
      const todo = new TodoStore(trimTitle, uuid(), false, this);
      this.todos.push(todo);
    }
  };

  @action removeTodo = (todo) => {
    this.todos.remove(todo);
  };

  @computed get totalCount() {
    return this.todos.length;
  };

  @computed get completedCount() {
    return this.todos.filter(todo => todo.completed).length;
  };
}
