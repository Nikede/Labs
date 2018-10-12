function pulloutArray(input) {
  let arrayToReturn = [];
  if (typeof input !== 'object' || input === null) {
    return Error;
  }
  if (input.length === 0) {
    input = arrayToReturn;
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
  input = arrayToReturn;
  return arrayToReturn;
}