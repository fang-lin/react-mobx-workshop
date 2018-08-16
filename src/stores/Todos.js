import { observable, action } from 'mobx';
import Todo from './Todo';
import { uuid } from '../utils';

export default class Todos {
  @observable todos = [];

  @action addTodo = (title) => {
    this.todos.push(new Todo(title, uuid(), false, this));
  };
}
