import React, { Component } from 'react';
import styled from 'styled-components';
import { inject, observer } from "mobx-react";
import TodoItem from "./TodoItem";

const TodoItems = styled.ul`
  font-weight: lighter;
  box-sizing: border-box;
  margin: 20px 0;
  padding: 0;
  border: solid 1px #b4bac1;
  color: #333f48;
  border-radius: 4px;
`;

@inject('todos')
@observer

class TodosList extends Component {
  render() {
    const { todos } = this.props.todos;
    const { removeTodo } = this.props.todos;
    return (
      todos.length > 0 ? <TodoItems>
        { todos.map((title, index) => {
          return <TodoItem key={ index } { ...{ title, removeTodo } }/>;
        }) }
      </TodoItems> : null
    );
  }
}

export default TodosList;
