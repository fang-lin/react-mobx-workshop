import registerServiceWorker from './registerServiceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import './index.css';
import TodoApp from './components/TodoApp';
import TodosStore from './stores/TodosStore';

const todos = new TodosStore();
ReactDOM.render(
  <Provider { ...{ todos } }>
    <TodoApp/>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
