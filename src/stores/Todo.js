import { observable, action } from 'mobx';

export default class TodoStore {
  @observable title = '';
  @observable completed = false;

  constructor(title, id, completed, todosStore) {
    this.title = title;
    this.id = id;
    this.completed = completed;
    this.todosStore = todosStore;
  }

  @action destroy = () => {
    console.log(this.todosStore.todos, this.todosStore.todos.remove)
    this.todosStore.todos.remove(this);
  };

  @action changeTitle = (title) => {
    this.title = title;
  };

  @action toggleState = () => {
    this.completed = !this.completed;
  };
}
