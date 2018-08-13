import registerServiceWorker from './registerServiceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import './index.css';
import TodoApp from './components/TodoApp';
import TodoStore from './stores/TodoStore';

const todo = new TodoStore();
ReactDOM.render(
  <Provider { ...{ todo } }>
    <TodoApp/>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
