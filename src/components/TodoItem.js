import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import styled from 'styled-components';
import { trim } from 'lodash';
import { ENTER_KEY } from '../utils';

const CompletedIcon = styled.span`
  display: block;
  color: #1EBDB2;
  width: 32px;
  height: 32px;
  min-width: 32px;
  border-radius: 17px;
  border: solid 1px #1EBDB2;
  line-height: 32px;
  font-size: 20px;
  cursor: pointer;
  text-align: center;
  transition: all .3s;
  opacity: .5;
  &:after {
    content: "${({ completed }) => completed ? '✔' : ' '}";
  }
  &:hover {
    opacity: 1;
  }
`;

const RemoveIcon = styled.span`
  opacity: 0;
  font-size: 20px;
  cursor: pointer;
  color: #E4002B;
  transition: all .3s;
  &:after {
    content: "✗";
  }
  &:hover {
    opacity: 1!important;
  }
`;

const Item = styled.li`
  padding: 20px;
  border-bottom: solid 1px #b4bac1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 32px;
  &:hover ${RemoveIcon} {
    opacity: .5;
  }
  &:last-child {
    border-bottom: none;
  }
`;

const Title = styled.span`
  flex-grow: 1;
  padding: 0 20px;
  font-size: 32px;
`;


const Input = styled.input`
  font-size: 32px;
  flex-grow: 1;
  width: 100px;
  font-size: 32px;
  font-weight: lighter;
  border: solid 1px #b4bac1;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 10px;
  margin: -20px 10px;
  color: #333f48;
  outline: none;
  box-shadow: inset 0 2px 10px 0px rgba(0, 0, 0, .1);
`;

export default class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = { editor: false };
  }

  onDoubleClickTitle = () => {
    this.setState({ editor: true }, () => {
      findDOMNode(this.refs.editor).focus();
    });
  };

  onChangeTitle(value) {
    const title = trim(value);
    if (title) {
      this.props.changeTitle(title);
    }
    this.setState({ editor: false });
  };

  onKeyUp = event => {
    if (event.keyCode === ENTER_KEY) {
      this.onChangeTitle(event.target.value);
    }
  };

  onBlurInput = event => this.onChangeTitle(event.target.value);

  render() {
    const { id, title, toggleState, completed, destroy } = this.props;
    return (
      <Item key={ id }>
        <CompletedIcon completed={ completed } onClick={ toggleState }/>
        {
          this.state.editor ?
            <Input ref="editor" defaultValue={ title } onBlur={ this.onBlurInput } onKeyUp={ this.onKeyUp }/> :
            <Title onDoubleClick={ this.onDoubleClickTitle }>{ title }</Title>
        }
        <RemoveIcon onClick={ destroy }/>
      </Item>
    );
  }
}
