import { observable, action } from 'mobx';

export default class TodoStore {
  title = '';

  changeTitle = (title) => {
    this.title = title;
  };
}
