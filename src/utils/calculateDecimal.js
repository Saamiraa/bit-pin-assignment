import Decimal from 'decimal.js';

const safeDecimal = (value) => {
  return new Decimal(value || 0);
};

export const calculateTotal = (arr, type) => {
  return arr.reduce((accumulator, currentValue) => {
    return accumulator.plus(safeDecimal(currentValue[type]));
  }, new Decimal(0)).toString();
};

export const weightedAveragePrice = (orders) => {
  const totalValue = orders.reduce((acc, order) => {
    return acc.plus(safeDecimal(order.amount).times(safeDecimal(order.price)));
  }, safeDecimal(0));

  const totalAmount = orders.reduce((acc, order) => {
    return acc.plus(safeDecimal(order.amount));
  }, safeDecimal(0));

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
  const totalRemain = calculateTotalRemain(data);
  const requiredRemain = safeDecimal(totalRemain).times(safeDecimal(percentage).div(100));
  let remainToTake = requiredRemain;
  let totalPayable = safeDecimal(0);

  // Create a copy of the array to avoid reversing the original
  const reverseData = [...data].reverse();

  reverseData.forEach((item) => {
    if (remainToTake.lte(0)) return;

    const currentRemain = safeDecimal(item.remain);
    const price = safeDecimal(item.price);

    const usableRemain = Decimal.min(currentRemain, remainToTake);
    const contribution = usableRemain.mul(price);
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