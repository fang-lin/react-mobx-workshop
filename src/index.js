import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
//
// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();


import { observable } from 'mobx';

class A {
  @observable a = 123
}

const a = new A();


const B = () => {
  return <div>123</div>;
}
