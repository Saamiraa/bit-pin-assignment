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

export const calculateTotalRemain = (arr) => {
  return arr.reduce((acc, order) => {
    const remainValue = new Decimal(order.remain || 0);
    return acc.plus(remainValue);
  }, new Decimal(0));
};

export const calculateTotalReceivableAmount = (inputPercentage, totalRemain) => {
  const percentage = new Decimal(inputPercentage || 0)
  const remain = new Decimal(totalRemain || 0)
  return percentage.dividedBy(100).times(remain).toString()
}


export const calculateTotalPayable = (data, percentage) => {
  const totalRemain = calculateTotalRemain(data)

  const requiredRemain = totalRemain.mul(new Decimal(percentage || 0).div(100));
  let remainToTake = requiredRemain;
  let totalPayable = new Decimal(0);

  data.forEach((item) => {
    if (remainToTake.lte(0)) return;

    const currentRemain = new Decimal(item.remain || 0);
    const price = new Decimal(item.price || 0);
    const value = new Decimal(item.value || 1);

    const usableRemain = Decimal.min(currentRemain, remainToTake);
    const contribution = usableRemain.mul(price).div(value);
    totalPayable = totalPayable.plus(contribution);
    remainToTake = remainToTake.minus(usableRemain);
  });

  return totalPayable.toString();
};

export const calculateWeightedAveragePrice = (payableAmount, receivableAmount) => {
  const totalPayable = new Decimal(payableAmount || "0");
  const totalReceivable = new Decimal(receivableAmount || "1");

  return totalPayable.div(totalReceivable).toString();
};