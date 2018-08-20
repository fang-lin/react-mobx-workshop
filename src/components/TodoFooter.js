import React, { Component } from 'react';
import styled from 'styled-components';
import { inject, observer } from "mobx-react";

const Footer = styled.footer`
  border-top: solid 1px #b4bac1;
  margin-top: 20px;
  padding: 20px 0 0 0;
  font-size: 20px;
  font-weight: lighter;
  color: #333f48;
`;

@inject('store')
@observer

class TodoFooter extends Component {
  render() {
    const { completedCount, totalCount } = this.props.store;
    return (
      <Footer className="todo-footer">
        <span>Total: { totalCount }</span> / <span>Completed: { completedCount }</span>
      </Footer>
    );
  }
}

export default TodoFooter;
