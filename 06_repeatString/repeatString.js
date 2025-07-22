const repeatString = (string, numRep) => {
  if (numRep < 0) { return 'ERROR' }
  let repeatedString = "";
  while (numRep) {
    repeatedString += string;
    numRep--;
  }

  return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
