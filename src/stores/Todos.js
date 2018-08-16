import { observable, action } from 'mobx';

export default class Todos {
  @observable todos = [];

  @action addTodo = (title) => {
    this.todos.push(title);
  };

  @action removeTodo = (title) => {
    this.todos.remove(title);
  };
}
