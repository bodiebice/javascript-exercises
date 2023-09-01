const removeFromArray = function(givenArray) {
  const spotToRemove = null;
  for  (y = 0; y<arguments.length; y++){
    for (x = 0; x<givenArray.length; x++){
      if (givenArray[x] == arguments[y] && typeof(givenArray[x]) == typeof(arguments[y])){
        givenArray.splice(x,1);
      }
    }
  }
  return givenArray;

};

// Do not edit below this line
module.exports = removeFromArray;
