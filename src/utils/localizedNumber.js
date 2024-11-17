export function formatNumberToPersian(input) {
  const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

  if (typeof input !== 'number') {
    return 'Invalid input';
  }

  const numberToString = input.toString();

  const [integerPart, decimalPart] = numberToString.split('.');

  let formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  formattedInteger = formattedInteger.replace(/\d/g, (digit) => persianDigits[digit]);

  let formattedDecimal = '';
  if (decimalPart) {
    formattedDecimal = '.' + decimalPart.replace(/\d/g, (digit) => persianDigits[digit]);
  }

  return formattedInteger.replace(/,/g, '٬') + formattedDecimal;
}