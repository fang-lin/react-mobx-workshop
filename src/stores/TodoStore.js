import { observable, action } from 'mobx';

export default class TodoStore {
  newTodo = '';

  changeNewTodo = (newTodo) => {
    this.newTodo = newTodo;
  };
}
