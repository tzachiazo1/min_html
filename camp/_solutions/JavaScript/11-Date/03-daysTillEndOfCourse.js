/**
 * Implement `daysTillEndOfCourse` to return the number of days till the end of the course
 * If not sure what is the date of the end of course, choose one approximately
 *
 * Tips:
 * Date with values, dates difference
 */

function daysTillEndOfCourse() {
  const today             = new Date();
  // Months start with `0`
  const endDate           = new Date(2022, 4, 12);
  const datesDiff         = endDate - today;
  // How many milliseconds in 1 day
  const dayInMilliseconds = (1000 * 60 * 60 * 24);

  return Math.floor(datesDiff / dayInMilliseconds);
}

//-----------------------------------------------

console.log(daysTillEndOfCourse());
// e.g. 45
