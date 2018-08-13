import React, { Component } from 'react';
import styled from 'styled-components';
import { inject, observer } from "mobx-react/index";

const Wrapper = styled.div``;

const Input = styled.input`
  display: block;
  font-size: 32px;
  font-weight: lighter;
  box-sizing: border-box;
  padding: 20px 40px;
  border: solid 1px #b4bac1;
  color: #333f48;
  border-radius: 4px;
  width: 100%;
  outline: none;
  &:focus{
    box-shadow: 0 2px 10px 0px rgba(0,0,0,.3)
  }
`;

@inject('todo')
@observer

class TodoInput extends Component {
  render() {
    const { title, changeTitle } = this.props.todo;
    return (
      <Wrapper className="todo-input-wrapper">
        <Input type="text"
               placeholder="What needs to be done?"
               value={ title }
               onChange={ event => changeTitle(event.target.value) }/>
      </Wrapper>
    );
  }
}

export default TodoInput;
