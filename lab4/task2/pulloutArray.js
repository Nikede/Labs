/**
 * Leaves only numbers in the array.
 *
 * @param {object} input - Array.
 * @return {object} Number array.
 * @throws Will throw an error if the argument isn't an array.
 */
function pulloutArray(input) {
  let arrayToReturn = [];
  if (typeof input !== 'object' || input === null) {
    throw new Error("Not an array!");
  }
  if (input.length === 0) {
    return arrayToReturn;
  }
  for (i = 0; i < input.length; i++) {
    if (typeof input[i] === 'number' && !isNaN(input[i])) {
      arrayToReturn.push(input[i]);
    } else {
      if (input[i] !== null && typeof input[i] === "object") {
        for (j = 0; j < input[i].length; j++) {
          if (typeof input[i][j] === 'number') {
            arrayToReturn.push(input[i][j]);
          }
        }
      }
    }
  }
  return arrayToReturn;
}