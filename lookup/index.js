exports.lookup = function (value, lookupArray, defaultValue = null) {
  let result = defaultValue;
  for (let i = 0; i < lookupArray.length; i++) {
    if (value === lookupArray[i][0]) {
      result = lookupArray[i][1];
      break;
    }
  }
  return result;
}
