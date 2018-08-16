import React, { Component } from 'react';
import styled from 'styled-components';

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

const ENTER_KEY = 13;

class TodoInput extends Component {

  render() {
    return (
      <div className="todo-input-wrapper">
        <Input type="text"
               placeholder="What needs to be done?"/>
      </div>
    );
  }
}

export default TodoInput;
