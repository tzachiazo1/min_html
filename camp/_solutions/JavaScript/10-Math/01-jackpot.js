/*
 Jackpot Ex.

 - Implement `getNumsFromRange` function below (see comment)
 - Do not touch the HTML or CSS
 */

(function () {
  /**
   * Return an array with 3 random numbers within the specified range.
   * Resulting numbers should be positive, whole integers.
   *
   * Tips:
   * abs, min, max, floor, ceil, round, random
   */
  function getNumsFromRange(min, max) {

    // Your code here!!!

  }

  //----------------------------------------------------------
  // Tests
  //----------------------------------------------------------
  // Passing negative numbers should result in a positive range
  console.log(getNumsFromRange(-1, -9));
  // Support specifying the range in reverse order
  console.log(getNumsFromRange(9, 1));
  // Bonus: Support passing only 1 argument to specify a range from 0
  console.log(getNumsFromRange(9));

  //----------------------------------------------------------
  // Do not touch the code below
  //----------------------------------------------------------
  const slots   = document.querySelectorAll('#slots span');
  const hitMe   = document.querySelector('#hitMe');
  hitMe.counter = 0;

  // On button click (Enter as well)
  hitMe.addEventListener('click', function (e) {
    // Get lucky numbers, range 0-9
    const nums = getNumsFromRange(0, 9);

    e.preventDefault();

    // Spin each slot
    [].forEach.call(slots, function (elm, inx) {
      setTimeout(function () {
        // Trigger CSS transform
        elm.classList.toggle('spin');

        // If we have 3 lucky numbers
        if (Array.isArray(nums) && nums.length === 3) {
          // Inject the number, delay for effect
          setTimeout(function () {
            let tries;
            let winner;

            elm.innerHTML = nums[inx];

            // Do we have a winner
            if (inx === slots.length - 1) {
              tries = document.querySelector('#tries');
              // Count how many tries
              hitMe.counter++;
              tries.innerHTML = hitMe.counter;

              if (nums[0] === nums[1] && nums[1] === nums[2]) {
                winner           = document.querySelector('#winner');
                winner.innerHTML = '<h1>You are a Winner!!!</h1>';

                console.log('Got it!!! After ' + hitMe.counter + ' tries!');
                console.log(nums[0]);
                console.log(nums[1]);
                console.log(nums[2]);

                // Reset tries counter
                hitMe.counter = 0;
              }
            }
          }, 335);
        }
      }, inx * 100);
    });
  });
}());
