const reverseString = function(toReverse) {
  let inReverse = toReverse.split("");
  inReverse = inReverse.reverse();
  let postReverse = inReverse.join("");
  return postReverse;
};

// Do not edit below this line
module.exports = reverseString;
