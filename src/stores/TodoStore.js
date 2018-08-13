import { observable, action } from 'mobx';

export default class TodoStore {
  @observable newTodo = '';

  @action
  changeNewTodo = (newTodo) => {
    this.newTodo = newTodo;
  };
}
