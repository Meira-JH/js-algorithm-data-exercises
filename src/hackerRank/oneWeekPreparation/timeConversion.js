//Given a time in-hour AM/PM format, convert it to military (24-hour) time
//Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.
//Complete the timeConversion function in the editor below.
//It should return a new string representing the input time in 24 hour format.
//timeConversion has the following parameter(s): string s: a time in hour format

export function timeConversion(s) {
  const isPM = s.slice(-2).toUpperCase() === 'PM' && true;
  const hours = Number(`${s[0]}${s[1]}`);
  let convertedTime = '';
  if (isPM) {
    hours < 12
      ? (convertedTime = `${hours + 12}:${s[3]}${s[4]}:${s[6]}${s[7]}`)
      : (convertedTime = `12:${s[3]}${s[4]}:${s[6]}${s[7]}`);
  }
  if (!isPM) {
    hours < 12
      ? (convertedTime = `${s[0]}${s[1]}:${s[3]}${s[4]}:${s[6]}${s[7]}`)
      : (convertedTime = `00:${s[3]}${s[4]}:${s[6]}${s[7]}`);
  }

  return convertedTime;
}
