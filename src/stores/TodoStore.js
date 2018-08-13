import { observable, action } from 'mobx';

export default class TodoStore {
  @observable title = '';
  
  constructor(title, id, completed) {
    this.title = title;
    this.id = id;
    this.completed = completed;
  }

  @action
  changeTitle = (title) => {
    this.title = title;
  };
}
