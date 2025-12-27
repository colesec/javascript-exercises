const findTheOldest = function(array) {
  yearsLived = array.map((element) => element.yearOfDeath-element.yearOfBirth);

  let index = 0;
  for(let i=0; i<yearsLived.length; i++){
    if(yearsLived[i]>yearsLived[index]) index = i;
  }

  return array[index]
}

// Do not edit below this line
module.exports = findTheOldest;
