import { observable, action, toJS } from 'mobx';
import { pick } from 'lodash';

export default class TodoStore {
  @observable title = '';
  @observable completed = false;

  constructor(title, id, completed, store) {
    this.title = title;
    this.id = id;
    this.completed = completed;
    this.store = store;
  }

  @action destroy = () => {
    this.store.todos.remove(this);
  };

  @action changeTitle = (title) => {
    this.title = title;
  };

  @action toggleState = () => {
    this.completed = !this.completed;
  };

  toJS() {
    return pick(toJS(this), ['id', 'title', 'completed']);
  }

  static fromJS({ title, id, completed }, store) {
    return new this(title, id, completed, store);
  }
}
