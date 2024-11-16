import Decimal from 'decimal.js';

export const calculateTotal = (arr, type) => {
  return arr.reduce((accumulator, currentValue) => {
    return accumulator.plus(new Decimal(currentValue[type] || 0));
  }, new Decimal(0)).toString();
}

export const weightedAveragePrice = orders => {
  const totalValue = orders.reduce((acc, order) => {
    return acc.plus(new Decimal(order.amount).times(new Decimal(order.price)));
  }, new Decimal(0));

  const totalAmount = orders.reduce((acc, order) => {
    return acc.plus(new Decimal(order.amount));
  }, new Decimal(0));

  return totalValue.dividedBy(totalAmount).toString();
};
