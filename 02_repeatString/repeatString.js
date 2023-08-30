const repeatString = function(word, nums = 3) {
  let string = "";
  if (nums < 0){
    return "ERROR";
  }
  for (x =0; x<nums; x++){
    string = string.concat(word);
  }
  return string;
};

// Do not edit below this line
module.exports = repeatString;
