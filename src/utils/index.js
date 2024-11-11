export function localizedNumber(numberString) {
  const number = parseInt(numberString.replace(/,/g, ""), 10);
  const persianFormattedNumber = number.toLocaleString("fa-IR");
  return persianFormattedNumber
}