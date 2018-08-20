import { observable, autorun } from 'mobx';

class OrderLine {
  @observable price = 0;
  @observable amount = 1;

  constructor() {
    autorun(() => {
      console.log('this.price:', this.price);
    });

    autorun(() => {
      console.log('this.amount:', this.amount);
    });
  }
}

const orderLine = new OrderLine();

setInterval(() => {
  orderLine.price++;
}, 1000);
