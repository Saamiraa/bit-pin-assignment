import jalaali from 'jalaali-js';

export const convertToJalali = timestamp => {
  const date = new Date(timestamp);
  const gYear = date.getUTCFullYear();
  const gMonth = date.getUTCMonth() + 1;
  const gDay = date.getUTCDate();
  const { jy, jm, jd } = jalaali.toJalaali(gYear, gMonth, gDay);

  const toPersianDigits = num =>
    num.toString().replace(/\d/g, d => "۰۱۲۳۴۵۶۷۸۹"[d]);

  const padZero = num => num.toString().padStart(2, "0");

  const jyPersian = toPersianDigits(jy);
  const jmPersian = toPersianDigits(padZero(jm));
  const jdPersian = toPersianDigits(padZero(jd));

  return `${jyPersian}-${jmPersian}-${jdPersian}`;
};

// Convert time to Persian numerals (e.g., 10:30 => ۱۰:۳۰)
export const convertToPersianNumerals = timeString => {
  const persianNumbers = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return timeString.replace(/[0-9]/g, digit => persianNumbers[Number(digit)]);
};

// Format the time portion of a date string in Persian numerals
export const formatTime = dateString => {
  const date = new Date(dateString);
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  return convertToPersianNumerals(`${hours}:${minutes}`);
};

// Combine the Jalaali date and Persian time
export const getPersianDateTime = timestamp => {
  const jalaliDate = convertToJalali(timestamp); // Get Jalaali date
  const persianTime = formatTime(timestamp); // Get Persian time
  return `${jalaliDate} ${persianTime}`; // Combine date and time
};
