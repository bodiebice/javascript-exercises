const sumAll = function(beg, end) {
  if (beg < 0 || end < 0  || typeof(beg)!= "number" || typeof(end) != "number"){
    return 'ERROR';
  }
  let sum = 0;
  if (end < beg){
    let temp = beg;
    beg = end;
    end = temp;
  }
  for (x = beg; x<end; x++ ){
    sum += x;
  }
  sum += end;
  return sum;
};


// Do not edit below this line
module.exports = sumAll;
