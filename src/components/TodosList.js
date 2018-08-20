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


class TodosList extends Component {
  render() {
    const todos = ['Eat five burgers', 'Running five kilometers'];
    return (
      todos.length > 0 ? <TodoItems>
        { todos.map((title, index) => {
          return <TodoItem key={ index } title={ title }/>;
        }) }
      </TodoItems> : null
    );
  }
}

export default TodosList;
