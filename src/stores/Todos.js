import { observable, action, computed } from 'mobx';
import Todo from './Todo';
import { uuid } from '../utils';

export default class Todos {
  @observable todos = [
    new Todo('AAA', uuid(), false, this),
    new Todo('BBB', uuid(), false, this)
  ];

  @action addTodo = (title) => {
    this.todos.push(new Todo(title, uuid(), false, this));
  };

  @computed get totalCount() {
    return this.todos.length;
  };

  @computed get completedCount() {
    return this.todos.filter(todo => todo.completed).length;
  };
}
