import React, { Component } from 'react';
import styled from 'styled-components';
import { inject, observer } from "mobx-react";

@inject('todos')
@observer
class TodosList extends Component {
  render() {
    const { todos } = this.props.todos;
    return (
      <ul>
        {
          todos.map(todo => <li key={ todo.id }>{ todo.title }</li>)
        }
      </ul>
    );
  }
}

export default TodosList;
