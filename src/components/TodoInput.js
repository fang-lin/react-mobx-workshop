import React, { Component } from 'react';
import styled from 'styled-components';
import { trim } from 'lodash';
import { inject, observer } from 'mobx-react';
import { ENTER_KEY } from '../utils';

const Input = styled.input`
  display: block;
  font-size: 32px;
  font-weight: lighter;
  box-sizing: border-box;
  padding: 20px 40px 20px 74px;
  border: solid 1px #b4bac1;
  border-radius: 4px;
  color: #333f48;
  width: 100%;
  outline: none;
  transition: all .3s;
  &:focus{
    box-shadow: 0 2px 10px 0px rgba(0, 0, 0, .1);
  }
`;

@inject('todos')
@observer

class TodoInput extends Component {

  onKeyUp = event => {
    const title = trim(event.target.value);
    if (event.keyCode === ENTER_KEY && title) {
      this.props.todos.addTodo(title);
      event.target.value = '';
    }
  };

  render() {
    return (
      <div className="todo-input-wrapper">
        <Input type="text"
               placeholder="What needs to be done?"
               onKeyUp={ this.onKeyUp }/>
      </div>
    );
  }
}

export default TodoInput;
