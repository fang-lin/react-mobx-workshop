import { observable, action } from 'mobx';

export default class Todos {
  todos = [];

  addTodo = (title) => {
    this.todos.push(title);
  };
}
