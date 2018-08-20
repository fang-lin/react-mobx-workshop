import { observable, action, computed, reaction } from 'mobx';
import Todo from './Todo';
import { uuid } from '../utils';

const STORAGE_NAME = 'mobx-todos';

export default class Todos {
  @observable todos = [];

  @action addTodo = (title) => {
    this.todos.push(new Todo(title, uuid(), false, this));
  };

  @computed get totalCount() {
    return this.todos.length;
  };

  @computed get completedCount() {
    return this.todos.filter(todo => todo.completed).length;
  };

  loadFromLocalStorage() {

  }

  subscribeToLocalStorage() {

  }

  toJS() {

  }

  fromJS(array) {

  }
}
