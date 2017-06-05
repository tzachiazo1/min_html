/**
 * Implement the function below to match the expected results
 * - Should accept an optional delimiter
 * - Handle leading 0 when needed
 *
 * Tips:
 * Date, getDate, getMonth, getFullYear
 */

function getFormattedDate(delimiter) {
  if (typeof delimiter === 'undefined') {
    delimiter = '/';
  }

  const today = new Date();
  const day   = today.getDate();
  const month = today.getMonth() + 1;
  const year  = today.getFullYear();

  // Handle missing leading 0 for values below 10
  function handleZero(val) {
    return val < 10 ? '0' + val : val;
  }

  return handleZero(day) + delimiter + handleZero(month) + delimiter + year;
}

//-----------------------------------------------

console.log(getFormattedDate());
// e.g. 04/11/2052 (based on actual date)
console.log(getFormattedDate('-'));
// e.g. 04-11-2052
console.log(getFormattedDate(''));
// e.g. 04112052
