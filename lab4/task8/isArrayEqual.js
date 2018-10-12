function isArrayEqual(firstArray, secondArray) {
  if (firstArray === null || secondArray === null || typeof firstArray !== 'object' || typeof secondArray !== 'object') {
    return false;
  }
  if (firstArray.length !== secondArray.length) {
    return false;
  }
  for (var i = 0; i < firstArray.length; i++) {
    if (typeof firstArray[i] !== 'object') {
      if (firstArray[i] !== secondArray[i]) {
        return false;
      }
    } else {
      if (firstArray[i] === null && secondArray[i] !== null || firstArray[i] !== null && secondArray[i] === null) {
        return false;
      }
      for (var j = 0; j < firstArray[i].length; j++) {
        if (typeof firstArray[i][j] !== 'object') {
          if (firstArray[i][j] !== secondArray[i][j]) {
            return false;
          }
        } else {
          if (firstArray[i][j] === null && secondArray[i][j] !== null || firstArray[i][j] !== null && secondArray[i][j] === null) {
            return false;
          }
        }
      }
    }
  }
  return true;
}