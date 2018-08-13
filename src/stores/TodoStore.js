import { observable, action } from 'mobx';

export default class TodoStore {
  @observable title = '';

  @action
  changeTitle = (title) => {
    this.title = title;
  };
}
