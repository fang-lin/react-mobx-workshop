import { observable, action } from 'mobx';

export default class TodoStore {
  @observable title = '';

  constructor(title, id, todosStore) {
    this.title = title;
    this.id = id;
    this.todosStore = todosStore;
  }

  @action destroy = () => {
    this.todosStore.todos.remove(this);
  };
}
