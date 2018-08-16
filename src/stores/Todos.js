import { observable, action } from 'mobx';

export default class Todos {
  @observable todos = [];

  @action addTodo = (title) => {
    this.todos.push(title);
  };
}
