import React, { Component } from 'react';
import styled from 'styled-components';

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

export default class TodoItem extends Component {

  render() {
    const { title } = this.props;
    return (
      <Item>
        <CompletedIcon/>
        <Title>{ title }</Title>
        <RemoveIcon/>
      </Item>
    );
  }
}
