import { observable, action } from 'mobx';
import TodoStore from './TodoStore';
import { uuid } from '../utils';

export default class TodosStore {
  @observable todos = [];

  @action
  addTodo = (title) => {
    this.todos.push(new TodoStore(title, uuid(), false));
  };
}
