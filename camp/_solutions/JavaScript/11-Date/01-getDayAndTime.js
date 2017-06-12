/**
 * Implement the functions below to match the expected results
 *
 * Tips:
 * Date, getDay, getHours, getMinutes, getSeconds
 */

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

/**
 * Should return the current day from the `days` Array
 */
function getCurrentDay() {
  const today    = new Date();
  const todayNum = today.getDay();

  return days[todayNum];
}

/**
 * Should return the current time in format:
 * HH:MM:SS (handle values less than 10)
 */
function getCurrentTime() {
  const today = new Date();
  let hour    = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();

  // Handle missing leading 0 for values below 10
  function handleZero(val) {
    return val < 10 ? `0${val}` : val;
  }

  hour    = handleZero(hour);
  minutes = handleZero(minutes);
  seconds = handleZero(seconds);

  return `${hour}:${minutes}:${seconds}`;
}

//-----------------------------------------------

console.log(getCurrentDay());
// e.g. 'Friday' (based on actual current day)
console.log(getCurrentTime());
// e.g. '09:32:05' (based on actual current time)
